import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Login } from '../pages';
import Header from './Header';
import ErrorDisplay from './ErrorDisplay';
import Content from './Content';

import '../styles/App.css';

class App extends Component {

  state = {
    errorMessage: "",
  };

  renderContent () {
    if (this.state.errorMessage) {
      return (
        <ErrorDisplay/>
      );
    } else {
      return (
        <Fragment>
          <Route path="/" component={Header}/>
          <Content>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={Login}/>
            </Switch>
          </Content>
        </Fragment>
      );
    }
  }

  render () {
    return (
      <div className="ui placeholder segment">
        {this.renderContent()}
      </div>
    )
  }

  componentDidMount () {
    console.log('컴포넌트 마운트');
    this.setState({errorMessage: null});
  }
}

export default App;
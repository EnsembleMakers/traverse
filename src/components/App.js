import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Login, Register } from '../pages';

import { history } from '../helpers';
import { alertActions } from '../actions';
import Header from './Header';
import ErrorDisplay from './ErrorDisplay';
import Content from './Content';

import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      errorMessage: "",
    };

    const { dispatch } = this.props;
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
    });
}

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
              <Route path="/signup" component={Register}/>
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
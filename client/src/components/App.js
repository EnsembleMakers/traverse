import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Home, Login, Register } from '../pages';

import { history } from '../helpers';
import { alertActions } from '../actions';
import Header from './Header';
import Content from './Content';

import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
   
    const { dispatch } = this.props;
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
    });
  }

  renderContent () {
    return (
      <Fragment>
        <Route path="/" component={Header}/>
        <Content>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
          </Switch>
        </Content>
      </Fragment>
    );
  }

  render () {
    const { alert } = this.props;
    return (
      <div className="ui placeholder segment">
        {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        {this.renderContent()}
      </div>
    )
  }

  componentDidMount () {
    console.log('컴포넌트 마운트');
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

export default withRouter(connect(mapStateToProps)(App));
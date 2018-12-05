import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Login, Register } from './';
import Content from '../components/Content';
import Header from '../components/Header';

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/main" component={Header}/>
        <Content>
          <Switch>
            <Route exact path="/main" component={Home}/>
            <Route exact path="/main/login" component={Login}/>
            <Route path="/main/register" component={Register}/>
          </Switch>
        </Content>
      </Fragment>
    );
  }
}

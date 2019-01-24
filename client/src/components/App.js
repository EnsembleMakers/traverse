import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// import { Home, Login, Register } from '../pages';
import { Main } from '../pages';

import { history } from '../helpers';
import { alertActions } from '../actions';
import Header from './Header';
import Content from './Content';

import '../styles/App.css';
import { FirstPage, BuyerSurveyOne, BuyerSurveyTwo, BuyerSurveyThree } from './survey';
// SY 추가
import { OnTransaction, AboutProducer, RegProduct } from './transaction';

class App extends Component {

  constructor(props) {
    super(props);
    // sy 추가
    this.state = {
      data: {},
    };
    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  changeState = (value) => {
    this.setState({ data: value[1] });
    console.log(this.state.data);
  }

  // sy 수정
  renderContent() {
    return (
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route path="/survey/buyer/1" component={BuyerSurveyOne} />
        <Route path="/survey/buyer/2" component={BuyerSurveyTwo} />
        <Route path="/survey/buyer/3" component={BuyerSurveyThree} />
        <Route exact path="/transactions" render={props => <OnTransaction data={this.state.data} />} />
        <Route path="/register-product" render={props => <RegProduct changeState={this.changeState} />} />
        <Route path="/main" component={Main} />
      </Switch>
    );
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="ui placeholder segment">
        {alert.message
          && <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        {this.renderContent()}
      </div>
    );
  }

  componentDidMount() {
    console.log('컴포넌트 마운트');
  }
}


function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert,
  };
}

export default withRouter(connect(mapStateToProps)(App));
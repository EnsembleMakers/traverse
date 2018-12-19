import React, { Fragment, Component } from 'react';
import '../../styles/OnTransaction.css';
import { Link } from 'react-router-dom';

import TransactionOne from './TransactionOne';
import TransactionTwo from './TransactionTwo';
import TransactionThree from './TransactionThree';
import TransactionFour from './TransactionFour';


// modal
class Modal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      post_id: '',
      user_id: '',
      guota: []
    }
  }

  render() {
    return (
      <div class="ui modal">
        <i class="close icon"></i>
        <div class="header">
          Participate in this Ensemble
  </div>
        <div class="image content">
          <div class="ui medium image">
            <img src="/images/avatar/large/chris.jpg" />
          </div>
          <div class="description">
            <div class="ui header">Details</div>
            <p>post_id</p>

            <input
              type="text"
              placeholder="User_id"
              value={this.state.User_id}
              name="User_id"
            />

            <input
              type="text"
              placeholder="Quota"
            //value={this.state.quota[0]}

            />
          </div>
        </div>
        <div class="actions">
          <div class="ui black deny button">
            Nope
    </div>
          <div class="ui positive right labeled icon button">
            Yes, join this group
      <i class="checkmark icon"></i>
          </div>
        </div>
      </div>
    )
  }
}

// 컴포넌트 합치기 BUT 아래 div container분할한곳으로 개별적으로 연결함.
// class Main extends React.Component {
//   render() {
//     return (
//       <section>
//         <TransactionOne />
//         <TransactionTwo />
//         <TransactionThree />
//         <TransactionFour />
//       </section>
//     )
//   }
// }

class OnTransaction extends Component {

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <div className="top">
          <img src="/img/Traverse_logo.PNG" alt="" />
        </div>

        <div class="ui grid container">
          <TransactionOne />
          <TransactionTwo data={this.props.data}/>
        </div>

        <div class="ui grid container">
          <TransactionThree />
          <TransactionFour />
          <Modal />
        </div>
      </Fragment>
    );
  }
}

export default OnTransaction;


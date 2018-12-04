import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/FirstPage.css';

export default function FirstPage(props) {
  return (
    <Fragment>
    
    <div className="front-logo">
      <img src="/img/Traverse_logo.PNG" alt=""/>
    </div>
      <br></br>
      <p align="center">
        <h3>Trade + Universe</h3>
        <br></br>
      </p>

    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div class="ui column">

    <div className='buyerSide'>
            <div class="ui card">
                <div class="ui image">
                  <img src="/img/buyer2.jpg" alt="#"/>
                </div>
                <div class="content">
                <a class="header">I am a Buyer</a>
                <div class="meta">
                </div>
                <div class="description">
                Are you looking for trustworthy supplier?<br/>
                신뢰있는 공급자를 찾고 있나요?
                 </div>
                </div>
            </div>
    </div>
     
      <div className="sellerButton">
      <Link to='/survey/buyer/1'>
        <button class="ui blue button">Next</button>
      </Link>
      </div>
 
      </div>
    <div class="column">
        
    <div className='sellerSide'>
            <div class="ui card">
                <div class="image">
                <img src="/img/seller.jpg" alt="#"/>
                </div>
                <div class="content">
                <a class="header">I am a Supplier</a>
                <div class="meta">
                </div>
                <div class="description">
                Are you looking for higher profits?<br/>
                새로운 판로와 매출 증대를 원하시나요?
                 </div>
                </div>
            </div>
      </div>

      <div className="buyerButton">
      <Link to='/survey/supplier/1'>
        <button class="ui blue button">Next</button>
      </Link>
      </div>

    </div>
      </div>
      <div class="ui vertical divider">
        <h3>WHO ARE YOU ? </h3>
      </div>
    </div>

    </Fragment>
  )
}



import React, {Fragment} from 'react';
import '../../styles/FirstPage.css';

export default function FirstPage(props) {
  return (
    <Fragment>

    <div>
      <h1 align="center">Traverse</h1>
      <p align="center">
        <b>Trade + Universe</b>
      </p>
    </div>

    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div class="ui column">
        
        
      <div className='buyerSide'>
            <div class="ui card">
                <div class="ui image">
                <img src="./img/seller1.jpg" alt="#"/>
                </div>
                <div class="content">
                <a class="header">I am a Buyer</a>
                <div class="meta">
                </div>
                <div class="description">
                Are you looking for higher profits? <br></br>
                새로운 판로와 매출 증대를 원하시나요?
                 </div>
                </div>
            </div>
      </div>
     
      <div className="button">
      <br></br><br></br><br></br>
      <button class="ui blue button">Next</button>
      </div>
 
      </div>
    <div class="column">
        
    <div className='sellerSide'>
            <div class="ui card">
                <div class="image">
                <img src="./img/buyer2.jpg" alt="#"/>
                </div>
                <div class="content">
                <a class="header">I am a Supplier</a>
                <div class="meta">
                </div>
                <div class="description">
                Are you looking for higher profits? <br></br>
                새로운 판로와 매출 증대를 원하시나요?
                 </div>
                </div>
            </div>
      </div>

      <div className="button">
      <br></br><br></br><br></br>
      <button class="ui blue button">Next</button>
      </div>

    </div>
      </div>
      <div class="ui vertical divider">
        WHO ARE YOU ?
      </div>
    </div>

    </Fragment>
  )
}



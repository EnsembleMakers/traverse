import React, { Fragment, Component } from 'react';

// 왼쪽 하단 postSchema의 images / 그리고 postSchema의 host 연결
class TransactionThree extends React.Component {
    render() {
      return (
        <div class="eight wide column">
          <div className="productList">
            <div class="ui segment">
              <div class="ui small images">
                <img src="/img/shoe2.jpg" />
                <img src="/img/shoe4.jpg" />
                <img src="/img/shoe5.jpg" />
              </div>
            </div>
          </div>
  
          <div className="buyerInfo">
            <div class="ui segment">
  
              <div class="ui grid">
                <div class="eight wide column">
  
                  <div class="ui card">
                    <div class="content">
                      <i class="right floated like icon"></i>
                      <i class="right floated star icon"></i>
                      <div class="header">Billy Beane</div>
                      <div class="description">
                        <p><i class="us flag"></i>One INTER Ltd..</p>
                      </div>
                    </div>
  
                    <div class="extra content">
                      <span class="left floated like">
                        <i class="red like icon"></i>
                        Like 200+
                     </span>
                      <span class="right floated star">
                        <i class="yellow star icon"></i>
                        Favorite 50+
                     </span>
                    </div>
                  </div>
                </div>
  
                <div class="eight wide column">
                  <h4>신용도</h4>
                  <p><i class="briefcase icon"></i>  99.9% </p>
                  <h4>거래수</h4>
                  <p><i class="chart pie icon"></i>  1000 +</p>
                </div>
  
              </div>
  
            </div>
          </div>
        </div>
      )
    }
  }

  export default TransactionThree;
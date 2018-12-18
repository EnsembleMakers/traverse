import React, { Fragment, Component } from 'react';

// 오른쪽 하단, portionSchema의 participants 연결부분
class TransactionFour extends React.Component {
    render() {
      return (
        <div class="eight wide column">
          <div className="productionDetail">
            <div class="ui segment">
  
              <div class="ui four statistics">
                <div class="statistic">
                  <div class="value">
                    D-22&nbsp;
                </div>
                  <div class="label">
                    <br />
                    18.12.20 까지
                </div>
                </div>
                <div class="statistic">
                  <div class="value">
                    &nbsp;
                  <img src="/img/teamwork.png" />
                    &nbsp;3명
                </div>
                  <div class="label">
                    <br />
                    참여인원
                </div>
                </div>
              </div>
  
              <div class="ui progress success">
                <div class="bar">
                  <div class="progress"></div>
                </div>
                <div class="label"><h3>10 % 진행중</h3></div>
              </div>
  
              <div className="button">
                <br /><br />
                <button class="large ui black button">문의하기</button>
                <button class="large ui black button">참여하기</button>
              </div>
  
  
  
            </div>
          </div>
        </div>
      )
    }
  }

  export default TransactionFour;
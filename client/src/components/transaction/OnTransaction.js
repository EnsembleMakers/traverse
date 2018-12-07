import React, {Fragment} from 'react';
import '../../styles/OnTransaction.css';
import { Link } from 'react-router-dom';


// 왼쪽 상단
class One extends React.Component {
  render(){
    return (
      <div class="eight wide column">
      <div className="product">
         <div class="ui segment">
            <img class="ui medium left floated image" src="/img/shoe1.jpg" alt=""/>
                <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
                <br/><p>따스한 날씨와 어울리는 수제 여성화</p>
                <br/><p>따스한 날씨와 어울리는 수제 여성화</p>
          </div>
      </div>
    </div>
    )
  }
}

// 오른쪽 상단
class Two extends React.Component {
  render(){
    return (
      <div class="eight wide column">
      <div className="productDetail">
          <div class="ui segment">
              <h3>상품코드 Product Code</h3><br/>
              <p></p>
              <h3>주문갯수 Total Order</h3><br/>  
              <p></p> 
              <h3>상품단가 Product Price</h3><br/>   
              <p></p>
              <h3>주문금액 Total Price</h3><br/>   
              <p></p>
          </div>
      </div>
    </div>
    )
  }
}

// 왼쪽 하단
class Three extends React.Component{
  render(){
    return(
      <div class="eight wide column">
      <div className="productList">
           <div class="ui segment">
              <div class="ui small images">
                 <img src="/img/shoe2.jpg"/>
                 <img src="/img/shoe4.jpg"/>
                 <img src="/img/shoe5.jpg"/>
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

// 오른쪽 하단
class Four extends React.Component{
  render(){
    return(
    <div class="eight wide column">
    <div className="productionDetail">
        <div class="ui segment">
       
        <div class="ui four statistics">
            <div class="statistic">
              <div class="value">
                D-22&nbsp;
              </div>
              <div class="label">
              <br/>
                18.12.20 까지
              </div>
            </div>
            <div class="statistic">
              <div class="value">
               &nbsp;
                <img src="/img/teamwork.png"/>
                &nbsp;3명
              </div>
              <div class="label">
              <br/>
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
          <br/><br/>
          <button class="large ui black button">문의하기</button>
          <button class="large ui black button">참여하기</button>
         </div> 



        </div>
    </div>
  </div>
    )
  }
}

// 컴포넌트 합치기 BUT 아래 div container분할한곳으로 개별적으로 연결함.
class Main extends React.Component {
  render(){
    return (
      <section>
      <One/>
      <Two/>
      <Three/>
      <Four/>
      </section>
    )
  }
}

export default function OnTransaction(props) {
  return (
    <Fragment>

      <div className="top">
        <img src="/img/Traverse_logo.PNG" alt=""/>
      </div>

      <div class="ui grid container">
        <One></One>          
        <Two></Two>
      </div>

      <div class="ui grid container">
        <Three></Three>
        <Four></Four>
      </div>
    </Fragment>
  )
}



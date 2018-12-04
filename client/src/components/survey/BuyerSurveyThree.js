import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/BuyerSurveyThree.css';

export default function BuyerSurveyThree(props) {

        return (
            <Fragment>
                {/* <i class="us flag"></i>
                <i class="france flag"></i>
                <i class="uk flag"></i> */}
            <div>
            <br></br><br></br>
                <h1 align="center">Traverse에 가입하시지 않을래요?</h1>
                <h2 align="center">Why don't you join us, why not ?</h2>
                <br></br><br></br>                 

            </div>

         <div className="main"> 
            <div class="ui placeholder segment"><br/>
                 <h3>손쉬운 가입으로<br/>
                     간편하게 이용하세요!</h3><br/>
                 <div class="ui large input focus">
                    <input type="text" placeholder="Email"/>
                </div>
                <br/>
                <div class="ui large input focus">
                    <input type="text" placeholder="Password"/>
                </div>
                <div className="inline"><br/><br/>
                    <Link to="/main">
                      <button class="ui blue button">Complete</button><br/><br/><br/>
                    </Link>
                </div>
            </div>
            <br/><br/>
         </div>
             
           <div className="bottomContents">     
                <div class="ui ordered steps">
                    <div class="completed step">
                        <div class="content">
                        <div class="title"></div>
                        <div class="description"></div>
                        </div>
                    </div>
                    <div class="completed step">
                        <div class="content">
                        <div class="title"></div>
                        <div class="description"></div>
                        </div>
                    </div>
                    <div class="active step">
                        <div class="content">
                        <div class="title">Step 3</div>
                        <div class="description"></div>
                        </div>
                    </div>
                </div>
            </div>

            </Fragment>
        );
    }

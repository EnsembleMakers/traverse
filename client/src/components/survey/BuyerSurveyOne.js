import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/BuyerSurveyOne.css';

export default function BuyerSurveyOne(props) {

        return (
            <Fragment>
                {/* <i class="us flag"></i>
                <i class="france flag"></i>
                <i class="uk flag"></i> */}
            <div>
            <br></br><br></br>
                <h1 align="center">Traverse 와 함께 놀라운 변화를 경험하십시오</h1>
                <h2 align="center">Fabulous experience with Traverse</h2>
                <br></br><br></br>
           
           
         <div className="ui placeholder segment">
                <div class="ui icon header">
                <br></br>
                   <i class="blue check circle outline icon" ></i>
                </div>
                <div>
                <br></br>
                    <div className="surveyStatistics">
                    <div class="ui statistics">
                        <div class="black statistic">
                            <div class="value">
                                2,213
                            </div>
                            <div class="label">
                                <br></br>
                                Members <br></br>
                                등록된 회원수
                            </div>
                            </div>
                        <div class="black statistic">
                            <div class="value">
                            310
                            </div>
                        <div class="label">
                                <br></br>
                                Match Numbers <br></br>
                                성사된 거래수  
                            </div>
                        </div>
                        <div class="blue statistic">
                            <div class="value">
                                +22%
                            </div>
                            <div class="label">
                                <br></br>
                                Benefits <br></br>
                                이익증가율
                            </div>
                            </div>
                    </div>
                    </div>
                    <br></br><br></br>
                </div>
                <div class="inline">
                <br></br>
                <Link to='/survey/buyer/2'>
                    <button class="ui blue button">Next</button>
                </Link><br/><br/>
                </div>
            </div>
            <br></br>
        </div>
             
           <div className="bottomContents">     
                <div class="ui ordered steps">
                    <div class="completed step">
                        <div class="content">
                        <div class="title">Step 1</div>
                        <div class="description"></div>
                        </div>
                    </div>
                    <div class="active step">
                        <div class="content">
                        <div class="title"></div>
                        <div class="description"></div>
                        </div>
                    </div>
                    <div class="active step">
                        <div class="content">
                        <div class="title"></div>
                        <div class="description"></div>
                        </div>
                    </div>
                </div>
            </div>

            </Fragment>
        );
    }
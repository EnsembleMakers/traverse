import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import '../../styles/BuyerSurveyTwo.css';

class BuyerSurveyTwo extends React.Component{

    state = {

    };

    render(){
        return (
            <Fragment>
                {/* <i class="us flag"></i>
                <i class="france flag"></i>
                <i class="uk flag"></i> */}
            <div>
                <br/><br/>
                <h1 align="center">고객님의 소중한 5가지 답변을 기다립니다</h1>
                <h2 align="center">Your precious and meaningful interests</h2>
                <br/><br/>
            </div>

         <div className="main"> 
            <div class="ui placeholder segment"><br/>

            <div class="ui grid container">
                <div class="two wide column"></div>
                <div class="fourteen wide column">
                    {/* Q 1 */}
                    <div class="ui form">
                        <div class="inline fields">
                        <label>What are you looking for ?</label>
                            <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="frequency" checked="checked"/>
                                <label>가죽가방 및 신발 제조업</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="frequency"/>
                                <label>의복 및 의복 제조업</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio checkbox">
                            <input type="radio" name="frequency"/>
                            <label>전자 및 전기 장비 제조업</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="frequency"/>
                                <label>금속가공 및 귀금속 제조업</label>
                            </div>
                        </div>
                    </div>
                    </div>
                    <br/>
                </div>
            </div>

      
            <div class="ui grid container">
                <div class="two wide column"></div>
                <div class="fourteen wide column">
                        {/* Q 2 */}
                        <div class="ui form">
                            <div class="inline fields">
                            <label>What is your top priority </label>
                                <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="frequency"/>
                                    <label>Quality 품질</label>
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="frequency"/>
                                    <label>Price 가격</label>
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui radio checkbox">
                                <input type="radio" name="frequency"/>
                                <label>Functions 기능성</label>
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="frequency"/>
                                    <label>Design 디자인</label>
                                </div>
                            </div>
                        </div>
                        </div>
                        <br/>
                </div>
            </div>

            <div class="ui grid container">
                <div class="two wide column"></div>
                    <div class="fourteen wide column">
                    {/* Q 3 */}
                    <div class="ui form">
                        <div class="inline fields">
                        <label>Where do you come from ?</label>
                            <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="frequency"/>
                                <label>America 미주</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="frequency"/>
                                <label>Asia 아시아</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio checkbox">
                            <input type="radio" name="frequency"/>
                            <label>Africa 아프리카</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="frequency"/>
                                <label>Europe 유럽</label>
                            </div>
                        </div>
                    </div>
                    </div>
                    <br/>
                </div>
            </div>

            <div class="ui grid container">
                <div class="two wide column"></div>
                    <div class="fourteen wide column">
                    {/* Q 4 */}
                    <div class="ui form">
                        <div class="inline fields">
                        <label>Which form of production type do you prefer ?</label>
                            <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="frequency"/>
                                <label>OEM product</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="frequency"/>
                                <label>Customized and Fitted</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio checkbox">
                            <input type="radio" name="frequency"/>
                            <label>Specialized Functions</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="frequency"/>
                                <label>Don't care</label>
                            </div>
                        </div>
                    </div>
                    </div>
                    <br/>
                </div>
            </div>
                

            <div class="ui grid container">
                <div class="two wide column"></div>
                    <div class="fourteen wide column">
                    {/* Q 5 */}
                    <div class="ui form">
                        <div class="inline fields">
                        <label>Do you have estimate of minumun order in your mind ?</label>
                            <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="frequency"/>
                                <label>Under 100</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="frequency"/>
                                <label>Between 101-499</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio checkbox">
                            <input type="radio" name="frequency"/>
                            <label>Over 500</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="frequency"/>
                                <label>Over 1000</label>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>

                <div class="ui grid container">
                    <div class="four wide column"></div>
                    <div class="four wide column">
                        <div className="skipButton">
                            <button class="ui blue button">Skip</button>
                        </div>
                    </div>
                    <div class="four wide column">
                         <div className="nextButton">
                            <button class="ui blue button">Next</button>
                        </div>
                    </div>
                    <div class="four wide column"></div>
                </div>
            </div>
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
                        <div class="title">Step 2</div>
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
}

export default BuyerSurveyTwo;

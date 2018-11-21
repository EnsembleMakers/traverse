import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import '../../styles/BuyerSurveyOne.css';

class BuyerSurvey extends React.Component{

    state = {

    };

    render(){
        return (
            <Fragment>
                {/* <i class="us flag"></i>
                <i class="france flag"></i>
                <i class="uk flag"></i> */}
            
            <div>
            <br></br><br></br><br></br><br></br><br></br>
                <h1 align="center">Traverse 와 함께 놀라운 변화를 경험하십시오</h1>
                <h2 align="center">New experience with Traverse</h2>
                <h3 align="center">Why don't you join ? </h3>
                <br></br><br></br><br></br>
            </div>

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
                 <div class="teal statistic">
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
            <br></br><br></br><br></br>
            <div className="button">
            <br></br><br></br><br></br>
            <button class="ui blue button">Next</button>
            </div>

            </Fragment>
        );
    }
}

export default BuyerSurvey;

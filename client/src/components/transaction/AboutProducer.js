import React, {Fragment} from 'react';
import '../../styles/AboutProducer.css';

export default function AboutProducer() {
  return (
    <Fragment>
      <div>
         <div className="top-logo">
            <img src="./img/Traverse_logo.PNG" alt=""/>    
         </div>
                 <div class="ui grid">
                     <div class="six wide column">
                                
                        <div class="ui one column grid">
                             <div class="column">
                                  <div class="ui medium centered fluid image">
                                     <div class="ui blue ribbon label">
                                         <i class="spoon icon"></i> Shoe Maker
                                     </div>
                                       <img src="./img/producer.jpg"/>
                                      </div>
                            </div>
                        </div>
                     </div>
            

                     <div class="ten wide column">

                              <div>
                                <h2>Introduction</h2>
                              </div>

                         <div class="ui search">
                              <div class="ui icon input">
                                   <input class="prompt" type="text" placeholder="Find producers.."/>
                                   <i class="search icon"></i>
                             </div>
                             <div class="results"></div>
                        </div>



                        <div className="producerName">
                            <h2>
                                Mr. Beane &nbsp;<i class="ae flag"></i><br/><br/>
                            </h2>
                             
                        </div>
                        <p>
                            Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
                            Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
                        </p><br/>
                        <hr/><br/>
                        <p>
                        Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.
                        </p>
                        <p>
                        Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.
                        </p>
                     </div>
                </div>


                <div class="ui grid">


                    <div class="ten wide column">
                    
                        <div>
                             <h3 class="ui dividing header">&nbsp;&nbsp;Production</h3>
                        </div>
                       
                       <div className="productionList">
                        
                        <div class="ui card">
                            <div class="content">
                                <div class="right floated">
                                <i class="calendar icon"></i>
                                &nbsp;&nbsp;D-22
                                </div>
                                <img class="ui avatar image" src="./img/ch3.png"/> Elliot &nbsp;
                                <i class="us flag"></i>
                            </div>
                            <div class="image">
                                <img src="./img/shoe1.jpg"/>
                            </div>
                            <div class="content">
                                <span class="right floated">
                                <i class="box icon"></i>
                                MOQ 300
                                </span>
                                <span class="left floated">
                                <i class="dollar sign icon"></i>
                                200,000
                                </span>
                                <div className="productButton">
                                <button class="mini ui secondary basic button">Detail</button>
                                 </div>
                            </div>
                            {/* <div class="extra content">
                                <div class="ui large transparent left icon input">
                                <i class="heart outline icon"></i>
                                <input type="text" placeholder="Add Comment..."/>>
                                </div>
                            </div> */}
                            </div>

                         <div class="ui card">
                            <div class="content">
                                <div class="right floated">
                                <i class="calendar icon"></i>
                                &nbsp;&nbsp;D-22
                                </div>
                                <img class="ui avatar image" src="./img/ch3.png"/> Elliot &nbsp;
                                <i class="us flag"></i>
                            </div>
                            <div class="image">
                                <img src="./img/shoe1.jpg"/>
                            </div>
                            <div class="content">
                                <span class="right floated">
                                <i class="box icon"></i>
                                MOQ 300
                                </span>
                                <span class="left floated">
                                <i class="dollar sign icon"></i>
                                200,000
                                </span>
                                <div className="productButton">
                                <button class="mini ui secondary basic button">Detail</button>
                                 </div>
                            </div>
                            {/* <div class="extra content">
                                <div class="ui large transparent left icon input">
                                <i class="heart outline icon"></i>
                                <input type="text" placeholder="Add Comment..."/>>
                                </div>
                            </div> */}
                            </div>
                            
                        </div>   



                    </div>





                    <div class="six wide column">
                    
                        <div class="ui small comments">
                            <h3 class="ui dividing header">Comments</h3>
                            <div class="comment">
                                <a class="avatar">
                                <img src="./img/ch1.png"/>
                                </a>
                                <div class="content">
                                <a class="author">Matt</a>
                                <div class="metadata">
                                    <span class="date">Today at 5:42PM</span>
                                </div>
                                <div class="text">
                                    How artistic!
                                </div>
                                <div class="actions">
                                    <a class="reply">Reply</a>
                                </div>
                                </div>
                            </div>
                            <div class="comment">
                                <a class="avatar">
                                <img src="./img/ch2.png"/>
                                </a>
                                <div class="content">
                                <a class="author">Elliot Fu</a>
                                <div class="metadata">
                                    <span class="date">Yesterday at 12:30AM</span>
                                </div>
                                <div class="text">
                                    <p>This has been very useful for my research. Thanks as well!</p>
                                </div>
                                <div class="actions">
                                    <a class="reply">Reply</a>
                                </div>
                                </div>
                                {/* <div class="comments">
                                <div class="comment">
                                    <a class="avatar">
                                    <img src="./img/ch3.png"/>
                                    </a>
                                    <div class="content">
                                    <a class="author">Jenny Hess</a>
                                    <div class="metadata">
                                        <span class="date">Just now</span>
                                    </div>
                                    <div class="text">
                                        Elliot you are always so right :)
                                    </div>
                                    <div class="actions">
                                        <a class="reply">Reply</a>
                                    </div>
                                    </div>
                                </div>
                                </div> */}
                            </div>
                            <div class="comment">
                                <a class="avatar">
                                <img src="./img/ch4.png"/>
                                </a>
                                <div class="content">
                                <a class="author">Joe Henderson</a>
                                <div class="metadata">
                                    <span class="date">5 days ago</span>
                                </div>
                                <div class="text">
                                    Dude, this is awesome. Thanks so much
                                </div>
                                <div class="actions">
                                    <a class="reply">Reply</a>
                                </div>
                                </div>
                            </div>
                            <form class="ui reply form">
                                <div class="field">
                                <div class="ui input">
                                    <input type="text" placeholder="Tell others about"/>
                                </div>
                                 {/* <textarea></textarea> */}
                                </div>
                                <div class="ui blue labeled submit icon button">
                                <i class="icon edit"></i> Add Reply
                                </div>
                            </form>
                            </div>


                    </div>
                </div>

      </div>
    </Fragment>
  )
}

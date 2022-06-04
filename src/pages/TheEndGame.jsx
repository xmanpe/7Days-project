import { StrictMode } from "react";
import $ from 'jquery'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Import Components
import Footer from "../components/Footer";

// Import icons
import happinessIcon from '../images/happiness-icon.png';
import sleepIcon from '../images/sleeping-icon.png';
import studyIcon from '../images/study-icon.png';
import romanceIcon from '../images/romance-icon.png';
import eatIcon from '../images/eat-icon.png';
import doneImg from '../images/done-image.png';

const TheEndGame = () => {
    // $('body').css('backgroundColor', '#F1F1F1');
    $('body').css('backgroundImage',"url(https://www.linkpicture.com/q/putih.png)");
    alert("You have finished the simulation! Press Ok to see your result!");

    // const [ucapanSleep, setUcapanSleep] = useState("");
    // const [ucapanEat, setUcapanEat] = useState("");
    // const [ucapanPlay, setUcapanPlay] = useState("");
    // const [ucapanRomance, setUcapanRomance] = useState("");
    // const [ucapanStudy, setUcapanStudy] = useState("");

    let userName = localStorage.getItem('resultName');
    let dateName = localStorage.getItem('resultDateName');
    let barEat = localStorage.getItem('finalEat');
    let barRomance = localStorage.getItem('finalRomance');
    let barPlay = localStorage.getItem('finalPlay');
    let barSleep = localStorage.getItem('finalSleep');
    let barStudy = localStorage.getItem('finalStudy');

    let ucapanEat;
    let ucapanPlay;
    let ucapanRomance;
    let ucapanSleep;
    let ucapanStudy;

    //Eat Bar
    if(barEat <= 25){
        ucapanEat = "Oh my god, are you a skeleton? You get hit once and you are done";
    }
    else if(barEat <= 50){;
        ucapanEat = "You start losing weight, my friend";
    }
    else if(barEat <= 75){
        ucapanEat = "Healthy diet healthy mind";
    }
    else{
        ucapanEat = "You eat too much lah. Get some workout!";
    }

    //Sleep Bar
    if(barSleep <= 25){
        ucapanSleep = "Rhoma Irama once said 'begadang jangan begadang kalau tak ada gunanya" ;
    }
    else if(barSleep <= 50){
        ucapanSleep="Human needs to sleep at least 8 hours a day to be healthy";
    }
    else if(barSleep <= 75){
        ucapanSleep = "You are a heatlhy guy. You know when to sleep";
    }
    else{
        ucapanSleep = "I mean, sleeping is a healthy thing to do. But you kinda slept a bit much, eh?";
    }
    
    //Romance Bar
    if(barRomance <= 0){
        ucapanRomance = "Get yourself a partner. You look so sad";
    }
    else if(barRomance <= 25){
        ucapanRomance = "Don't forget about your partner otherwise you will be dumped";
    }
    else if(barRomance <= 50){
        ucapanRomance = "Maybe you could try to be a bit more romantic";
    }
    else if(barRomance <= 75){
        ucapanRomance = "Love start from small step"
    }
    else{
        ucapanRomance = "Just get married soon, yo!";
    }

    //Play Bar
    if(barPlay <= 25){
        ucapanPlay="Relax my friend, don't push yourself too hard"
    }
    else if(barPlay <= 50){
        ucapanPlay="All work and no play will make you deppressed";
    }
    else if(barPlay <= 75){
        ucapanPlay="Balancing playing and studying sure is a hard thing";
    }
    else{
        ucapanPlay = "You better be a gamer than a college student"
    }
    
    //Study Bar
    if(barStudy <= 25){
        ucapanStudy="Bro, are you that lazy?"
    }
    else if(barStudy <= 50){
        ucapanStudy="Mommy's broom wants to have a word with you";
        
    }
    else if(barStudy <= 75){
        ucapanStudy="You are an A-sian not B-sian";
    }
    else{
        ucapanStudy = "All hail the topper";
    }

    const navigate = useNavigate();
    return (
        <StrictMode>
            <div className="container">
                <div className="theSummarySection">
                    <h1>Congratulations, {userName}🎉</h1>
                    <p id="theSummaryFirstP">Thank you for playing with us. We hope you are satisfied.</p>
                    <div className="doneImage">
                        <img src={doneImg}/>
                    </div>
                    <br />
                    <p id="summaryTell">Here's the summary of your game: </p>
                    <div className="summary-card">
                        <div id="theFirst" className="each-summary-card">
                            <h3>Happiness <img src={happinessIcon}/></h3>
                            <div className="theProgressBar-summary { progress }">
                                <div className="{ progress-bar }" role={"progressbar"} style={{width: `${barPlay}%`}} aria-valuenow={"0"} aria-valuemin={"0"} aria-valuemax={"100"}></div>
                            </div>
                            <div className="commentHappy">
                                <h5 id="h5Play">{ucapanPlay}</h5>
                            </div>
                        </div>
                        <div id="theSecond" className="each-summary-card">
                            <h3>Romance <img src={romanceIcon}/></h3>
                            <div className="theProgressBar-summary { progress }">
                                <div className="{ progress-bar }" role={"progressbar"} style={{width: `${barRomance}%`}} aria-valuenow={"0"} aria-valuemin={"0"} aria-valuemax={"100"}></div>
                            </div>
                            <div className="commentRomance">
                                <h5 id="h5Romance">{ucapanRomance}</h5>
                            </div>
                        </div>
                        <div id="theThird" className="each-summary-card">
                            <h3>Knowledge <img src={studyIcon}/></h3>
                            <div className="theProgressBar-summary { progress }">
                                <div className="{ progress-bar }" role={"progressbar"} style={{width: `${barStudy}%`}} aria-valuenow={"0"} aria-valuemin={"0"} aria-valuemax={"100"}></div>
                            </div>
                            <div className="commentStudy">
                                <h5 id='h5Study'>{ucapanStudy}</h5>
                            </div>
                        </div>
                        <div id="theFourth" className="each-summary-card">
                            <h3>Hunger <img src={eatIcon}/></h3>
                            <div className="theProgressBar-summary { progress }">
                                <div className="{ progress-bar }" role={"progressbar"} style={{width: `${barEat}%`}} aria-valuenow={"0"} aria-valuemin={"0"} aria-valuemax={"100"}></div>
                            </div>
                            <div className="commentEat">
                                <h5 id='h5Eat'>{ucapanEat}</h5>
                            </div>
                        </div>
                        <div id="theFifth" className="each-summary-card">
                            <h3>Sleep <img src={sleepIcon}/></h3>
                            <div className="theProgressBar-summary { progress }">
                                <div className="{ progress-bar }" role={"progressbar"} style={{width: `${barSleep}%`}} aria-valuenow={"0"} aria-valuemin={"0"} aria-valuemax={"100"}></div>
                            </div>
                            <div className="commentSleep">
                                <h5 id='h5Sleep'>{ucapanSleep}</h5>
                            </div>
                        </div>
                        <button onClick={() => { navigate('/'); localStorage.clear(); window.location.reload();}} id="summaryButton" type="button">Main Menu</button>
                    </div>
                </div>
            </div>
            <Footer />
        </StrictMode>
    );
}
 
export default TheEndGame;
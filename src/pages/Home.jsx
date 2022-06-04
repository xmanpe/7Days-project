// Import Components
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import Photos
import aldrik from '../images/aldrik.png';
import joshua from '../images/joshua.png';
import farion from '../images/farion.png';
import daffa from '../images/daffa.png';
import umnPerson from '../images/umn-person.png';

// Import React Stuff
import { StrictMode } from "react";
import { motion } from "framer-motion";
import $ from 'jquery';

const Home = () => {
    $('body').css('backgroundColor', '#F1F1F1');
    return (
        <StrictMode>
            <Navbar />
            <Header />
            <main id="main" className="{ container }">
                <motion.div whileHover={{rotate: 1}} id="whatIsSevendays" className="what-is-sevendays">
                    <div className="leftSection">
                        <img src={umnPerson} alt="umn-guy" />
                    </div>
                    <div className="rightSection">
                        <h3>What is 7DAYS?</h3>
                        <p>It is a simulation that is specially designed to resemble the life of UMN students. You will experience the daily struggles that UMN students face for 7 days.</p>
                    </div>
                </motion.div>
                <div id="howToPlay" className="how-to-play">
                    <h1>How to Play?</h1>
                    <motion.div whileHover={{rotate: 1}} className="topSection">
                        <p>Your character's status will be shown in each bar. The statuses will get lower as time goes by. This simulation will end once you have finished the first week. And the final result will be shown based on your last status</p>
                    </motion.div>
                    <div className="bottomSection">
                        <motion.div whileHover={{rotate: 1}} id="left" className="square">
                            <h1>1</h1>
                            <p>Click on each button on the left to increase your status. Be careful, don't let your status go to zero</p>
                        </motion.div>
                        <motion.div whileHover={{rotate: 1}} id="mid" className="square">
                            <h1>2</h1>
                            <p>You can open your phone to read some news and get a partner</p>
                        </motion.div>
                        <motion.div whileHover={{rotate: 1}} id="right" className="square">
                            <h1>3</h1>
                            <p>You can click buttons on the right to move into another place</p>
                        </motion.div>
                    </div>
                </div>
                <motion.div whileHover={{rotate: 1}} id="credits" className="credits">
                    <h1>Credits</h1>
                    <div className="credits-list">
                        <motion.div whileHover={{rotate: -2}} id="aldrik" className="each-person">
                            <img src={aldrik} alt="aldrik" />
                            <h4>Aldrik Ciaputra</h4>
                            <p>00000055871</p>
                        </motion.div>
                        <motion.div whileHover={{rotate: -2}} id="joshua" className="each-person">
                            <img src={joshua} alt="joshua" />
                            <h4>Joshua Hotama</h4>
                            <p>00000056899</p>
                        </motion.div>
                        <motion.div whileHover={{rotate: -2}} id="farion" className="each-person">
                            <img src={farion} alt="farion" />
                            <h4>Farion Tekkry</h4>
                            <p>00000056034</p>
                        </motion.div>
                        <motion.div whileHover={{rotate: -2}} id="daffa" className="each-person">
                            <img src={daffa} alt="daffa" />
                            <h4>Daffa Akbari</h4>
                            <p>00000055736</p>
                        </motion.div>
                    </div>
                </motion.div>  
            </main>
            <Footer />
        </StrictMode>
    );
}
 
export default Home;

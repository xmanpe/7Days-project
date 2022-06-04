// Import Components
import Profile from "../components/Profile";
import profilePicture from "../profilePicture";

// Import React Stuff
import { useState, } from "react";
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import { motion } from "framer-motion";

const Choosing = () => {
    $('body').css('backgroundColor', '#F6F6F6');
    const navigate = useNavigate();
    const [profile, setProfile] = useState(0);

    function passData(){
        let fullname = $('#inputName').val();
        let major = $('#inputMajor').find(':selected').text();
        let profilePicture = $('.userAvatar').attr('src');

        if(fullname === '' || major === 'Choose Major'){
            alert('Please input your name and your major!');
        }
        else {
            localStorage.setItem('resultFullName', fullname);
            localStorage.setItem('resultName', fullname.split(" ", 1));
            localStorage.setItem('resultMajor', major);
            localStorage.setItem('resultAvatar', profilePicture);
            navigate('/theGame');
        }
    }
    function leftClick(){
        setProfile(profile + 1);
        
        if(profile === 3){
            setProfile(0);
        }
    }
    function rightClick(){
        setProfile(profile - 1);

        if(profile === 0){
            setProfile(3);
        }
    }
    return (
        <div className="rootChild">
            <div className="{ container }">
                <motion.div initial={{scale: 0.7}} animate={{scale: 1.0}} transition={{type: 'spring', duration: 1, bounce: 0.3}} className="user-input-section">
                    <h1>Let's Create You!</h1>
                    <div className="select-profile-picture">
                        <button onClick={leftClick} id="leftClick">🡨</button>
                        <Profile
                            img={profilePicture[profile].imgURL}
                            alt={profilePicture[profile].alt}
                        />
                        <button onClick={rightClick} id="rightClick">🡪</button>
                    </div>
                    <div className="input-selection">
                        <div id="input-for-name" className="{ mb-3 }">
                            <input type="text" className="{ form-control }" id="inputName" placeholder="Your Name" />
                        </div>
                        <select id="inputMajor" className="{ form-select }" aria-label="majorSelection">
                            <option selected>Choose Major</option>
                            <option value="1">Informatics</option>
                            <option value="2">Information System</option>
                            <option value="3">Engineering Physics</option>
                            <option value="4">Electrical Engineering</option>
                            <option value="5">Computer Engineering</option>
                            <option value="6">Communication Science</option>
                            <option value="7">Digital Journalism</option>
                            <option value="8">Management</option>
                            <option value="9">Accounting</option>
                            <option value="10">Visual Communication Design</option>
                            <option value="11">Film & Animation</option>
                            <option value="12">Architecture</option>
                            <option value="13">Department of Hotel Operations</option>
                        </select>
                    </div>
                    <p>Make sure you have read <a onClick={() => navigate('/')} href="#">How To Play</a> before playing!</p>
                    <div className="button-list">
                        <button onClick={() => navigate('/')} id="backButton" type="button">Back</button>
                        <button onClick={passData} id="playButton" type="button">Play</button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
 
export default Choosing;
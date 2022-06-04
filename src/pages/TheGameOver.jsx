import theGOImage from '../images/gameover-image.png';
import $ from 'jquery';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { StrictMode } from 'react';

const TheGameOver = () => {
    alert("That's it. It's game over!");
    $('body').css('backgroundImage',"url(https://www.linkpicture.com/q/putih.png)");
    const navigate = useNavigate();

    return (
        <StrictMode>
            <div className="container">
                <motion.div initial={{scale: 0.7}} animate={{scale: 1.0}} transition={{type: 'spring', duration: 1, bounce: 0.3}}  className="theSection">
                    <h1>It's Game Over, {localStorage.getItem('resultName')}!</h1>
                    <p>Don't be sad. This is just the first week, try harder next week, ya?</p>
                    <div className="theSection-image">
                        <img src={theGOImage}/>
                    </div>
                    <button onClick={() => { navigate('/'); localStorage.clear(); window.location.reload();}} type='button'>Main Menu</button>
                </motion.div>
            </div>
            <Footer />
        </StrictMode>
    );
}
 
export default TheGameOver;
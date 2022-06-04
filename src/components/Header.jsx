// Import Photos
import sevendayslogo from '../images/7days-logo.png';

// Import React Stuff
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
    const navigate = useNavigate();
    return (
        <header>
            <motion.div initial={{x: '-100vw'}} animate={{x: 0}} transition={{type: 'spring', duration: 1, bounce: 0.3}} className="leftSide">
                <h1>Welcome to 7DAYS!</h1>
                <h5>If you are curious about what UMN students do for 7 straight days, this game is perfect for you.</h5>
                <button onClick={() => navigate('/choosing')} type="button">Play</button>
            </motion.div>
            <motion.div whileHover={{scale: 1.1, rotate: 12}} initial={{x: '100vw'}} animate={{x: 0}} transition={{type: 'spring', duration: 1, bounce: 0.3}} className="rightSide">
                <img src={sevendayslogo} alt="7days-logo" />
            </motion.div>
        </header>
    );
}
 
export default Header;

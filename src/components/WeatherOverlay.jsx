// Import Icons
import weatherClouds from '../images/weather-overlay/normal-clouds.png';
import weatherCloudsRain from '../images/weather-overlay/rain-clouds.png';
import weatherThunderstorm from '../images/weather-overlay/thunderstorm-clouds.png';
import weatherHaze from '../images/weather-overlay/haze-clouds.png';
import weatherMist from '../images/weather-overlay/mist-clouds.png';

// Import React Stuff
import { motion } from 'framer-motion';

const WeatherOverlay = (props) => {
    if(props.weather === 'Clouds'){
        return <motion.img initial={{y: '-100vw', scaleY: 0.8}} animate={{y: 0, scaleY: 1}} transition={{type:'tween', duration: 2, ease:"easeOut"}} src={weatherClouds}/>
    }
    else if(props.weather === 'Rain'){
        return <motion.img initial={{y: '-100vw'}} animate={{y: 0}} transition={{type:'tween', duration: 2}} src={weatherCloudsRain}/>
    }
    else if(props.weather === 'Thunderstorm'){
        return <motion.img initial={{y: '-100vw'}} animate={{y: 0}} transition={{type:'tween', duration: 2}} src={weatherThunderstorm}/>
    }
    else if(props.weather === 'Haze'){
        return <motion.img initial={{y: '-100vw'}} animate={{y: 0}} transition={{type:'tween', duration: 2}} src={weatherHaze}/>
    }
    else if(props.weather === 'Mist'){
        return <motion.img initial={{y: '-100vw'}} animate={{y: 0}} transition={{type:'tween', duration: 2}} src={weatherMist}/>
    }
    else return <motion.img initial={{y: '-100vw'}} animate={{y: 0}} transition={{type:'tween', duration: 2}} src={null}/>
}
 
export default WeatherOverlay;
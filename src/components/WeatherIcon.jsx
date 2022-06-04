import clouds from '../images/icon-gif/clouds.png';
import rain from '../images/icon-gif/heavy-rain.gif';
import drizzle from '../images/icon-gif/drizzle-rain.gif';
import clear from '../images/icon-gif/clear.gif';
import thuderstorm from '../images/icon-gif/thunderstorm.gif';
import haze from '../images/icon-gif/haze.png';
import hazeNight from '../images/icon-gif/haze-night.png';
import mist from '../images/icon-gif/mist.png';

const WeatherIcon = (props) => {
    if(props.weather === 'Clouds'){
        return <p id="weather"><img src={clouds}/>Clouds</p>
    }
    else if(props.weather === 'Rain'){
        return <p id="weather"><img src={rain}/>Rain</p>
    }
    else if(props.weather === 'Drizzle'){
        return <p id="weather"><img src={drizzle}/>Drizzle</p>
    }
    else if(props.weather === 'Clear'){
        return <p id="weather"><img src={clear}/>Clear Sky</p>
    }
    else if(props.weather === 'Thunderstorm'){
        return <p id="weather"><img src={thuderstorm}/>Thunderstorm</p>
    }
    else if(props.weather === 'Haze'){
        if(props.timing === 12){
            return <p id="weather"><img src={haze}/>Haze</p>
        }
        else if(props.timing === 18){
            return <p id="weather"><img src={haze}/>Haze</p>
        }
        else if(props.timing === 21){
            return <p id="weather"><img src={hazeNight}/>Haze</p>
        }
        else if(props.timing === 5){
            return <p id="weather"><img src={haze}/>Haze</p>
        }
    }
    else if(props.weather === 'Mist'){
        return <p id="weather"><img src={mist}/>Mist</p>
    }
}
 
export default WeatherIcon;
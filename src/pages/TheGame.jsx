// Import Components
import ButtonList from "../components/ButtonList";
import Day from "../components/Day";
import ButtonSetPlace from "../components/ButtonSetPlace";
import Modal from "../components/Modal";
import ModalExit from "../components/ModalExit";
import ModalDate from "../components/ModalDate";
import WeatherIcon from "../components/WeatherIcon";
import WeatherOverlay from "../components/WeatherOverlay";

// Import Photos
import Sleep from '../images/sleeping-icon.png';
import Romance from '../images/romance-icon.png';
import Study from '../images/study-icon.png';
import Happiness from '../images/happiness-icon.png';
import Eat from '../images/eat-icon.png';

//import Character Design
import charactersProfile from '../charactersProfile';

// Import React Stuff
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import $ from 'jquery';

const TheGame = () => {
    const navigate = useNavigate();

    // Bagian WeatherAPI
    const [weather, setWeather] = useState({});
    const api = {
        key: '08bcc4e9dafacaf8e8963701dd2b53d2',
        base: 'https://api.openweathermap.org/data/2.5/',
        lat: '-6.178306',
        lon: '106.631889'
    }
    useEffect(() => {
        fetch(`${api.base}weather?lat=${api.lat}&lon=${api.lon}&appid=${api.key}`)
            .then(serverRespond => {
                console.log('All weather data has been loaded!');
                return serverRespond.json();
            })
            .then(dataFromServer => {
                console.log(dataFromServer);
                setWeather(dataFromServer);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, []);

    // Take LocalStorage Value
    let fullNameResult = localStorage.getItem('resultFullName');
    let nameResult = localStorage.getItem('resultName');
    let majorResult = localStorage.getItem('resultMajor');
    let profileResult = localStorage.getItem('resultAvatar');
    let dateName = localStorage.getItem('resultDateName');

    // Major Settings
    let finalMajor;

    if(majorResult === 'Informatics'){
        finalMajor = 'Informatics 💻';
    }
    else if(majorResult === 'Information System'){
        finalMajor = 'Information System ⌨️';
    }
    else if(majorResult === 'Engineering Physics'){
        finalMajor = 'Engineering Physics 🧮';
    }
    else if(majorResult === 'Electrical Engineering'){
        finalMajor = 'Electrical Engineering 🔋';
    }
    else if(majorResult === 'Computer Engineering'){
        finalMajor = 'Computer Engineering 🖥️';
    }
    else if(majorResult === 'Communication Science'){
        finalMajor = 'Communication Science 📢';
    }
    else if(majorResult === 'Digital Journalism'){
        finalMajor = 'Digital Journalism 🎥';
    }
    else if(majorResult === 'Management'){
        finalMajor = 'Management 📚';
    }
    else if(majorResult === 'Accounting'){
        finalMajor = 'Accounting 💰';
    }
    else if(majorResult === 'Visual Communication Design'){
        finalMajor = 'Visual Communication Design 🖌️';
    }
    else if(majorResult === 'Film & Animation'){
        finalMajor = 'Film & Animation 🎬';
    }
    else if(majorResult === 'Architecture'){
        finalMajor = 'Architecture ✏️';
    }
    else if(majorResult === 'Department of Hotel Operations'){
        finalMajor = 'Department of Hotel Operations 🛎️';
    }

    //Set all the react hooks
    const [dayCount, setDayCount] = useState(0);
    const [place, setPlace] = useState(0);
    const [resultPlace, setResultPlace] = useState('@ Home');
    const [greeting, setGreeting] = useState('');
    const [quotes, setQuotes] = useState('');
    const [barEat, setBarEat] = useState(50);
    const [barPlay, setBarPlay] = useState(50);
    const [barRomance, setBarRomance] = useState(0);
    const [barSleep, setBarSleep] = useState(50);
    const [barStudy, setBarStudy] = useState(1);
    const [condition, setCondition] = useState("Normal")
    const [thoughts, setThoughts] = useState("Hi!");
    const [barColorEat, setBarColorEat] = useState("");
    const [barColorPlay, setBarColorPlay] = useState("");
    const [barColorSleep, setBarColorSleep] = useState("");
    const [barColorStudy, setBarColorStudy] = useState("");
    const [money, setMoney] = useState(50);
    const [charImg, setCharImg] = useState(profileResult);
    const [weatherTime, setWeatherTime] = useState(0);
    
    // Time Settings
    let [time, setTime] = useState('');
    let [hour, setHour] = useState(0);
    let [second, setSecond] = useState(0);

    useEffect(() => {
        // Buat waktu setiap satu detik
        const createTime = setInterval(timing, 1000);
        const minusEat = setInterval(kurangEat, 1000);
        const minusPlay = setInterval(kurangPlay, 1000);
        const minusRomance = setInterval(kurangRomance, 1000);
        const minusSleep = setInterval(kurangSleep, 1000);

        // Langsung clearInterval biar gak kepanggil terus, jadi panggilnya cuma sekali
        return () => {
            clearInterval(createTime);
            clearInterval(minusEat);
            clearInterval(minusPlay);
            clearInterval(minusRomance);
            clearInterval(minusSleep);
        };
    });
    function timing(){
        setSecond((prevState) => prevState + 1);
        if(second >= 59){
            setSecond(0);
            setHour((prevState) => prevState + 1);
        }
        else if(hour >= 24){
            setDayCount(dayCount + 1);
            setMoney(money + 50); // Setiap hari uangnya akan menambah $100
            setHour(0);
        }
        if(dayCount > 6){
            localStorage.setItem('finalEat', barEat);
            localStorage.setItem('finalRomance', barRomance);
            localStorage.setItem('finalPlay', barPlay);
            localStorage.setItem('finalSleep', barSleep);
            localStorage.setItem('finalStudy', barStudy);
            navigate("/theEndGame");
        }

        let resultHour = hour < 10 ? '0' + hour : hour;
        let resultSecond = second < 10 ? '0' + second : second;
        setTime(resultHour + ':' + resultSecond);

        if(resultHour >= 12 && resultHour <= 17){
            setWeatherTime(12);

            if(place === 0){
                $('body').css('backgroundImage',"url(https://www.linkpicture.com/q/Noon-newnew.png)");
            }
            else if(place === 1){
                $('body').css('backgroundImage',"url(https://www.linkpicture.com/q/noon-new.png)");
            }
            else if(place === 2){
                $('body').css('backgroundImage', "url(https://www.linkpicture.com/q/2481.jpg)");
            }
            else if(place === 3){
                $('body').css('backgroundImage', "url(https://www.linkpicture.com/q/mallPagi.jpg)");
            }

            setGreeting('Good Afternoon');
            setQuotes('Shine like the afternoon sun and let people inspired by you for all the great things you do.');
        }
        else if(resultHour >= 18 && resultHour <= 20){
            setWeatherTime(18);

            if(place === 0){
                $('body').css('backgroundImage',"url(https://www.linkpicture.com/q/Sunsets-newnew.png)");
            }
            else if(place === 1){
                $('body').css('backgroundImage',"url(https://www.linkpicture.com/q/afternoonbg-new.png)");
            }
            else if(place === 2){
                $('body').css('backgroundImage', "url(https://www.linkpicture.com/q/2481.jpg)");
            }
            else if(place === 3){
                $('body').css('backgroundImage', "url(https://www.linkpicture.com/q/mallPagi.jpg)");
            }

            setGreeting('Good Evening');
            setQuotes('No matter how bad your day has been, the beauty of the setting sun will make everything serene.');
            localStorage.setItem('hour', hour);
        }
        else if(resultHour >= 21 || resultHour <= 4){
            setWeatherTime(21);

            if(place === 0){
                $('body').css('backgroundImage',"url(https://www.linkpicture.com/q/Night-newnew.png)");
            }
            else if(place === 1){
                $('body').css('backgroundImage',"url(https://www.linkpicture.com/q/night-new.png)");
            }
            else if(place === 2){
                $('body').css('backgroundImage',"url(https://www.linkpicture.com/q/Cafe-Malam.jpg)");
            }
            else if(place === 3){
                $('body').css('backgroundImage',"url(https://www.linkpicture.com/q/mallMalem.jpg)");
            }

            $('.headerGreeting').css('color', 'white');
            $('#quotes').css('color', 'white');
            setGreeting('Good Night');
            setQuotes('Today will soon be yesterday. Tomorrow is a new day. Begin it well and serenely.');
        }
        else if(resultHour >= 5 && resultHour <= 11){
            setWeatherTime(5);

            if(place === 0){
                $('body').css('backgroundImage',"url(https://www.linkpicture.com/q/Morning-newnew.png)");
            }
            else if(place === 1){
                $('body').css('backgroundImage',"url(https://www.linkpicture.com/q/morningbg-new.png)");
            }
            else if(place === 2){
                $('body').css('backgroundImage', "url(https://www.linkpicture.com/q/2481.jpg)");
            }
            else if(place === 3){
                $('body').css('backgroundImage', "url(https://www.linkpicture.com/q/mallPagi.jpg)");
            }

            $('.headerGreeting').css('color', 'black');
            $('#quotes').css('color', 'black');
            $('#day').css('color', 'black');
            setGreeting('Good Morning');
            setQuotes('When you start each day with a grateful heart, light illuminates from within.');
        }
    }

    //Bar Settings (every second)
    function kurangEat(){
        let selisih = 1.25;
        setBarEat(barEat - selisih);

        if(barEat <= 0){
            navigate("/TheGameOver");
        }
        else if(barEat <= 24){
            setThoughts("I'm super hungry. Maybe I should start eating something, eh?");
            setCondition("Hungry");
            setBarColorEat('bg-warning');
        }
        else{             
            setThoughts("Alright...");
            setCondition("Normal");
            setBarColorEat('');
        }
    }
    function kurangPlay(){
        let selisih = 1;
        setBarPlay(barPlay - selisih);
        
        if(barPlay <= 0){
            navigate("/TheGameOver");
        }
        else if(barPlay <= 24){
            setThoughts("I'm so depressed");
            setCondition("Bored");
            setBarColorPlay('bg-warning');
        }
        else{
            setThoughts("Alright...");
            setCondition("Normal");
            setBarColorPlay('');
        }
    }
    function kurangRomance(){
        let selisih = 0.25;
        setBarRomance(barRomance - selisih);

        if(barRomance <= 0){
            // Future updates
        }
        else if(barRomance <= 24){
            setThoughts("I need love");
        }
        else{
            setThoughts("I am so lucky");
        }
    }
    function kurangSleep(){
        let selisih = 2;
        setBarSleep(barSleep - selisih);

        if(barSleep <= 0){
            navigate("/TheGameOver");
        }
        else if(barSleep <= 24){
            setThoughts("I have panda's eyes");
            setCondition("Sleepy");
            setBarColorSleep('bg-warning');
        }
        else{
            setThoughts("Alright...");
            setCondition("Normal");
            setBarColorSleep('');
        }
    }
    // function kurangStudy(){
    //     let selisih = 2;
    //     setBarStudy(barStudy - selisih)
    //     if(barStudy <= 0){
    //         setBarStudy(0);
    //     }
    //     else if(barStudy <= 24){
    //         setThoughts("Am I the dumbest person on earth?");
    //         setCondition("Stupid");
    //         setBarColorStudy ('bg-warning');
    //     }
    //     else{
    //         setThoughts("I need lazyness because I'm very clever");
    //         setCondition("Normal");
    //         setBarColorStudy('bg-success');
    //     }
    // }

    // Button Bar Settings
    function addEat(){
        let selisih = 3;
        let nambah = 10;
        let temp;

        if(barEat < 99){
            if(profileResult == require('../images/char1.png')){
                setCharImg(charactersProfile[0].imgEat);
            }
            else if(profileResult == require('../images/char2.png')){
                setCharImg(charactersProfile[1].imgEat);
            }
            else if(profileResult == require('../images/char3.png')){
                setCharImg(charactersProfile[2].imgEat);
            }
            else if(profileResult == require('../images/char4.png')){
                setCharImg(charactersProfile[3].imgEat);
            }

            setTimeout(() => {
                setCharImg(profileResult);
            }, 3000);

            if(second >= 35){
                temp = second + 25 - 60;
                setSecond(temp);

                if(hour >= 23){
                    setHour(0);
                    setDayCount((prevState) => prevState + 1);
                    setMoney(money + 50);
                }
                else{
                    setHour((prevState) => prevState + 1);
                }
            }
            else{
                setSecond((prevState) => prevState + 35);
            }
        
            setBarEat(barEat + nambah);
        }
        if(barEat <= 0){
            navigate('/theGameOver');
        }
        else if(barEat <= 24){
            setBarColorEat("bg-warning");
        }
        else if(barEat >= 75){
            setBarColorEat("bg-success");
        }
        else if(barEat >= 100 || barEat === 100){
            setBarEat(100);
        }
        else{
            setBarColorEat('');
        }
        
        setBarSleep(barSleep - selisih);

        if(barSleep <= 0){
            navigate('/TheGameOver');
        }
        else if(barSleep <= 24){
            setBarColorSleep("bg-warning");
            setCondition("Sleep deprived");
        }
        else if(barSleep >= 75){
            setCondition("Normal");
            setBarColorSleep("bg-success");
        }
        else if(barSleep >= 100 || barSleep === 100){
            setCondition("Normal");
            setBarSleep(100);
        }
        else{
            setBarColorSleep('');
        }
    }
    function addEatMall(){
        let selisih = 5;
        let nambah = 15;
        let temp;

        if(barEat < 99){
            setMoney(money - 5);

            if(money <= -50){
                navigate('/theGameOver');
            }
            else if(money <= 0){
                alert("You don't have money");
            }
            if(profileResult == require('../images/char1.png')){
                setCharImg(charactersProfile[0].imgEat);
            }
            else if(profileResult == require('../images/char2.png')){
                setCharImg(charactersProfile[1].imgEat);
            }
            else if(profileResult == require('../images/char3.png')){
                setCharImg(charactersProfile[2].imgEat);
            }
            else if(profileResult == require('../images/char4.png')){
                setCharImg(charactersProfile[3].imgEat);
            }

            setTimeout(() => {
                setCharImg(profileResult);
            }, 3000);

            if(second >= 35){
                temp = second + 25 - 60;
                setSecond(temp);

                if(hour >= 23){
                    setHour(0);
                    setDayCount((prevState) => prevState + 1);
                    setMoney(money + 50);
                }
                else{
                    setHour((prevState) => prevState + 1);
                }
            }
            else{
                setSecond((prevState) => prevState + 35);
            }

            setBarEat(barEat + nambah);
        }
        if(barEat <= 0){
            navigate('/theGameOver');
        }
        else if(barEat <= 24){
            setBarColorEat("bg-warning");
        }
        else if(barEat >= 75){
            setBarColorEat("bg-success");
        }
        else if(barEat >= 100 || barEat === 100){
            setBarEat(100);
        }
        else{
            setBarColorEat('');
        }
        
        setBarSleep(barSleep - selisih);

        if(barSleep <= 0){
            navigate('/TheGameOver');
        }
        else if(barSleep <= 24){
            setBarColorSleep("bg-warning");
            setCondition("Sleep deprived");
        }
        else if(barSleep >= 75){
            setCondition("Normal");
            setBarColorSleep("bg-success");
        }
        else if(barSleep >= 100 || barSleep === 100){
            setCondition("Normal");
            setBarSleep(100);
        }
        else{
            setBarColorSleep('');
        }
    }
    function addPlay(){
        let selisih = 3;
        let selisihStudy = 2;
        let nambah = 4;
        let temp;
        
        if(barPlay < 99){
            if(profileResult == require('../images/char1.png')){
                setCharImg(charactersProfile[0].imgPlay);
            }
            else if(profileResult == require('../images/char2.png')){
                setCharImg(charactersProfile[1].imgPlay);
            }
            else if(profileResult == require('../images/char3.png')){
                setCharImg(charactersProfile[2].imgPlay);
            }
            else if(profileResult == require('../images/char4.png')){
                setCharImg(charactersProfile[3].imgPlay);
            }

            setTimeout(() => {
                setCharImg(profileResult);
            }, 3000);

            if(hour >= 22){
                temp = hour + 2 - 24;
                setHour(temp);
                setHour((prevState) => prevState + 2);
                setDayCount((prevState) => prevState + 1);
                setMoney(money + 50);
            }
            else{
                setHour((prevState) => prevState + 2);
            }

            setBarPlay(barPlay + nambah);
        }
        if(barPlay <= 24){
            setBarColorPlay("bg-warning");
        }
        else if(barPlay >= 75){
            setBarColorPlay("bg-success");
        }
        else if(barPlay >= 100 || barPlay === 100){
            setBarPlay(100);
        }
        else{
            setBarColorPlay('');
        }

        setBarEat(barEat - selisih);

        if(barEat<=0){
            navigate('/theGameOver');
        }
        else if(barEat <= 24){
            setBarColorEat("bg-warning");
            setCondition("Sleep deprived");
        }
        else if(barEat >= 75){
            setBarColorEat("bg-success");
        }
        else if(barEat >= 100 || barEat === 100){
            setBarEat(100);
        }
        else{
            setBarColorEat('');
        }

        setBarStudy(barStudy - selisihStudy);

        if(barStudy <= 0){
            setBarStudy(0);
        }
        else if(barStudy <= 24){
            setBarColorStudy("bg-warning");
        }
        else if(barStudy >= 75){
            setBarColorStudy("bg-success");
        }
        else if(barStudy >= 100 || barStudy === 100){
            setBarStudy(100);
        }
        else{
            setBarColorStudy('');
        }
    }
    function addCook(){
        let selisih = 3.5;
        let nambah = 5;
        let nambahHappy = 2;
        let temp;

        if(barEat < 99){
            if(profileResult == require('../images/char1.png')){
                setCharImg(charactersProfile[0].imgCook);
            }
            else if(profileResult == require('../images/char2.png')){
                setCharImg(charactersProfile[1].imgCook);
            }
            else if(profileResult == require('../images/char3.png')){
                setCharImg(charactersProfile[2].imgCook);
            }
            else if(profileResult == require('../images/char4.png')){
                setCharImg(charactersProfile[3].imgCook);
            }

            setTimeout(() => {
                setCharImg(profileResult);
            }, 3000);

            if(hour >= 22){
                temp = hour + 2 - 24;
                setHour(temp);
                setDayCount((prevState) => prevState + 1);
                setMoney(money + 50);
            }
            else{
                setHour((prevState) => prevState + 2);
            }

            setBarEat(barEat + nambah);
            setBarPlay(barPlay + nambahHappy);
        }
        if(barEat<=0){
            navigate('/theGameOver');
        }
        else if(barEat <= 24){
            setBarColorEat("bg-warning");
        }
        else if(barEat >= 75){
            setBarColorEat("bg-success");
        }
        else if(barEat >= 100 || barEat === 100){
            setBarEat(100);
        }
        else{
            setBarColorEat('');
        }
        
        setBarSleep(barSleep - selisih);

        if(barSleep <= 0){
            navigate('/TheGameOver');
        }
        else if(barSleep <= 24){
            setBarColorSleep("bg-warning");
            setCondition("Sleep deprived");
        }
        else if(barSleep >= 75){
            setBarColorSleep("bg-success");
        }
        else if(barSleep >= 100 || barSleep === 100){
            setBarSleep(100);
        }
        else{
            setBarColorSleep('');
        }
    }
    
    const [y, setY] = useState(1);

    function addRomance(){
        let selisih = 5;
        let nambah = 5;
        let temp;
        setMoney(money - 10);

        if(money <= -50){
            navigate('/theGameOver');
        }
        else if(money <= 0){
            alert("You don't have money");
        }

        setBarRomance(barRomance + nambah);

        if(y == 1){
            setBarRomance(20);
            setY(0);
        }
        if(hour >= 23){
            temp = hour + 1 - 60 ;
            setHour((prevState) => prevState + 1);
            if(hour > 23){
                setDayCount((prevState) => prevState + 1);
                setMoney(money + 50);
            }
        }
        else{
            setHour((prevState) => prevState + 1);
        }
        if(barRomance < 100){
            if(profileResult == require('../images/char1.png')){
                setCharImg(charactersProfile[0].imgDate);
            }
            else if(profileResult == require('../images/char2.png')){
                setCharImg(charactersProfile[1].imgDate);
            }
            else if(profileResult == require('../images/char3.png')){
                setCharImg(charactersProfile[2].imgDate);
            }
            else if(profileResult == require('../images/char4.png')){
                setCharImg(charactersProfile[3].imgDate);
            }

            setTimeout(() => {
                setCharImg(profileResult);
            }, 3000);
        }
        if(barRomance <= 15 && barRomance >= 10){
            // Future Updates
        }
        else if(barRomance >= 100 || barRomance === 100){
            setBarRomance(100);
        }
    }
    function addSleep(){
        let selisih = 4;
        let nambah = 25;
        let temp;
        if(barSleep >= 90){
            alert("You are not sleepy. Take your time to do something!");
        }
        else{
            if(profileResult == require('../images/char1.png')){
                setCharImg(charactersProfile[0].imgSleep);
            }
            else if(profileResult == require('../images/char2.png')){
                setCharImg(charactersProfile[1].imgSleep);
            }
            else if(profileResult == require('../images/char3.png')){
                setCharImg(charactersProfile[2].imgSleep);
            }
            else if(profileResult == require('../images/char4.png')){
                setCharImg(charactersProfile[3].imgSleep);
            }

            setTimeout(() => {
                setCharImg(profileResult);
            }, 3000);

            setBarSleep(barSleep + nambah);

            if(hour >= 21){
                temp = hour + 4 - 24 ;
                setHour(temp);
                setDayCount((prevState) => prevState + 1);
                setMoney(money + 50);
            }
            else{
                setHour((prevState) => prevState + 4);
            }
        }

        setBarEat(barEat - selisih);

        if(barEat <= 0){
            navigate('/TheGameOver');
        }
        else if(barSleep <= 24){
            setBarColorSleep("bg-warning");
        }
        else if(barSleep >= 75){
            setBarColorSleep("bg-success");
        }
        else if(barSleep >= 100 || barSleep === 100){
            setBarSleep(100);
        }  
    }
    function addStudy(){
        let selisih = 2;
        let nambah = 4;
        let temp;
        
        if(profileResult == require('../images/char1.png')){
            setCharImg(charactersProfile[0].imgStudy);
        }
        else if(profileResult == require('../images/char2.png')){
            setCharImg(charactersProfile[1].imgStudy);
        }
        else if(profileResult == require('../images/char3.png')){
            setCharImg(charactersProfile[2].imgStudy);
        }
        else if(profileResult == require('../images/char4.png')){
            setCharImg(charactersProfile[3].imgStudy);
        }

        setTimeout(() => {
            setCharImg(profileResult);
        }, 3000);

        if(barStudy < 100){
            if(hour >= 21){
                temp = hour + 3 - 24 ;
                setHour(temp);
                setDayCount((prevState) => prevState + 1);
            }
            else{
                setHour((prevState) => prevState + 3);
            }

            setBarStudy(barStudy + nambah);
        }
        else if(barStudy <= 24){
            setBarColorStudy("bg-warning");
        }
        else if(barStudy >= 75){
            setBarColorStudy("bg-success");
        }
        else if(barStudy >= 100 || barStudy === 100){
            setBarStudy(100);
        }  
        
        setBarSleep(barSleep - selisih);

        if(barSleep <= 24){
            setBarColorSleep("bg-warning");
        }
        else if(barSleep >= 75){
            setBarColorSleep("bg-success");
        }
        else if(barSleep >= 100 || barSleep === 100){
            setBarSleep(100);
        }

        setBarEat(barEat - selisih);

        if(barEat <= 24){
            setBarColorEat("bg-warning");
        }
        else if(barEat >= 75){
            setBarColorSleep("bg-success");
        }
        else if(barEat >= 100 || barEat === 100){
            setBarEat(100);
        }  

        setBarPlay(barPlay - selisih);

        if(barPlay <= 24){
            setBarColorPlay("bg-warning");
        }
        else if(barPlay >= 75){
            setBarColorPlay("bg-success");
        }
        else if(barPlay >= 100 || barPlay === 100){
            setBarPlay(100);
        }  
    }
    function addMapel(){
        let selisih = 2;
        let nambah = 4;
        let temp;

        if(profileResult == require('../images/char1.png')){
            setCharImg(charactersProfile[0].imgStudy);
        }
        else if(profileResult == require('../images/char2.png')){
            setCharImg(charactersProfile[1].imgStudy);
        }
        else if(profileResult == require('../images/char3.png')){
            setCharImg(charactersProfile[2].imgStudy);
        }
        else if(profileResult == require('../images/char4.png')){
            setCharImg(charactersProfile[3].imgStudy);
        }

        setTimeout(() => {
            setCharImg(profileResult);
        }, 3000);

        if(barStudy < 100){
            if(hour >= 21){
                temp = hour + 3 - 24 ;
                setHour(temp);
                setDayCount((prevState) => prevState + 1);
            }
            else{
                setHour((prevState) => prevState + 3);
            }

            setBarStudy(barStudy + nambah);
        }
        else if(barStudy <= 24){
            setBarColorStudy("bg-warning");
        }
        else if(barStudy >= 75){
            setBarColorStudy("bg-success");
        }
        else if(barStudy >= 100 || barStudy === 100){
            setBarStudy(100);
        }  
        
        setBarSleep(barSleep - selisih);

        if(barSleep <= 24){
            setBarColorSleep("bg-warning");
        }
        else if(barSleep >= 75){
            setBarColorSleep("bg-success");
        }
        else if(barSleep >= 100 || barSleep === 100){
            setBarSleep(100);
        }

        setBarEat(barEat - selisih);

        if(barEat <= 24){
            setBarColorEat("bg-warning");
        }
        else if(barEat >= 75){
            setBarColorSleep("bg-success");
        }
        else if(barEat >= 100 || barEat === 100){
            setBarEat(100);
        }  

        setBarPlay(barPlay - selisih);

        if(barPlay <= 24){
            setBarColorPlay("bg-warning");
        }
        else if(barPlay >= 75){
            setBarColorPlay("bg-success");
        }
        else if(barPlay >= 100 || barPlay === 100){
            setBarPlay(100);
        }  
    }
    function starBucks(){
        let selisih = 5;
        let nambah = 5;
        let temp;
        if(barEat < 100){
            if(profileResult == require('../images/char1.png')){
                setCharImg(charactersProfile[0].imgStarbucks);
            }
            else if(profileResult == require('../images/char2.png')){
                setCharImg(charactersProfile[1].imgStarbucks);
            }
            else if(profileResult == require('../images/char3.png')){
                setCharImg(charactersProfile[2].imgStarbucks);
            }
            else if(profileResult == require('../images/char4.png')){
                setCharImg(charactersProfile[3].imgStarbucks);
            }

            setTimeout(() => {
                setCharImg(profileResult);
            }, 3000);

            setMoney((prevState) => prevState - 3);

            if(money <= -50){
                navigate('/theGameOver');
            }
            else if(money <= 0){
                alert("You don't have money");
            }
            if(hour >= 23){
                temp = hour + 1 - 24;
                setHour(temp);
                setHour((prevState) => prevState + 1);

                if(hour > 23){
                    setDayCount((prevState) => prevState + 1);
                    setMoney(money + 50);
                }
            }
            else{
                setHour((prevState) => prevState + 1);
            }

            setBarEat(barEat + nambah);
        }
        if(barEat <= 24){
            setBarColorEat("bg-warning");
        }
        else if(barEat >= 75){
            setBarColorEat("bg-success");
        }
        else if(barEat >= 100 || barEat === 100){
            setBarEat(100);
        }
        else{
            setBarColorEat('');
        }
    }
    function kerja(){
        let nambah;
        let selisih = 3;
        let selisihSleep = 5;
        let temp;

        if(profileResult == require('../images/char1.png')){
            setCharImg(charactersProfile[0].imgWork);
        }
        else if(profileResult == require('../images/char2.png')){
            setCharImg(charactersProfile[1].imgWork);
        }
        else if(profileResult == require('../images/char3.png')){
            setCharImg(charactersProfile[2].imgWork);
        }
        else if(profileResult == require('../images/char4.png')){
            setCharImg(charactersProfile[3].imgWork);
        }

        setTimeout(() => {
            setCharImg(profileResult);
        }, 3000);

        setMoney(money + 15);
        
        if(hour >= 20){
            temp = hour + 4 - 24;
            setHour(temp);
            setDayCount((prevState) => prevState+1);
        }
        else{
            setHour((prevState) => prevState + 4);
        }
    
        setBarEat(barEat - selisih);

        if(barEat <= 24){
            setBarColorEat("bg-warning");
        }
        else if(barEat >= 75){
            setBarColorEat("bg-success");
        }
        else if(barEat >= 100 || barEat === 100){
            setBarEat(100);
        }
        else{
            setBarColorEat('');
        }

        setBarPlay(barPlay - selisih);

        if(barPlay <= 0){
            navigate('/TheGameOver');
        }
        else if(barPlay <= 24){
            setBarColorPlay("bg-warning");
        }
        else if(barPlay >= 75){
            setBarColorPlay("bg-success");
        }
        else if(barPlay >= 100 || barPlay === 100){
            setBarPlay(100);
        }
        else{
            setBarColorPlay('');
        }

        setBarSleep(barSleep - selisihSleep);

        if(barSleep <= 0){
            navigate('/TheGameOver');
        }
        else if(barSleep <= 24){
            setBarColorSleep("bg-warning");
        }
        else if(barSleep >= 75){
            setBarColorSleep("bg-success");
        }
        else if(barSleep >= 100 || barSleep === 100){
            setBarSleep(100);
        }
        else{
            setBarColorSleep('');
        }
    }
    function shopping(){
        let nambah = 10;
        let selisih = 3;
        let temp;

        if(barPlay < 100){
            if(profileResult == require('../images/char1.png')){
                setCharImg(charactersProfile[0].imgShopping);
            }
            else if(profileResult == require('../images/char2.png')){
                setCharImg(charactersProfile[1].imgShopping);
            }
            else if(profileResult == require('../images/char3.png')){
                setCharImg(charactersProfile[2].imgShopping);
            }
            else if(profileResult == require('../images/char4.png')){
                setCharImg(charactersProfile[3].imgShopping);
            }

            setTimeout(() => {
                setCharImg(profileResult);
            }, 3000);

            setMoney(money - 20);

            if(money <= -50){
                navigate('/theGameOver');
            }
            else if(money <= 0){
                alert("You don't have money");
            }
            if(hour >= 21){
                temp = hour + 3 - 24;
                setHour(temp);
                setHour((prevState) => prevState + 2);

                if(hour > 23){
                    setDayCount((prevState) => prevState + 1);
                }
            }
            else{
                setHour((prevState) => prevState + 2);
            }

            setBarPlay(barPlay + nambah);
        }
        else if(barPlay <= 24){
            setBarColorPlay("bg-warning");
        }
        else if(barPlay >= 75){
            setBarColorPlay("bg-success");
        }
        else if(barPlay >= 100 || barPlay === 100){
            setBarPlay(100);
        }
        else{
            setBarColorPlay('');
        }

        setBarSleep(barSleep - selisih);

        if(barSleep <= 24){
            setBarColorSleep("bg-warning");
        }
        else if(barSleep >= 75){
            setBarColorSleep("bg-success");
        }
        else if(barSleep >= 100 || barSleep === 100){
            setBarSleep(100);
        }  
    }
    function movie(){
        let nambah = 15;
        let selisih = 3;
        let temp;
        if(barPlay < 100){
            if(profileResult == require('../images/char1.png')){
                setCharImg(charactersProfile[0].imgHappy);
            }
            else if(profileResult == require('../images/char2.png')){
                setCharImg(charactersProfile[1].imgHappy);
            }
            else if(profileResult == require('../images/char3.png')){
                setCharImg(charactersProfile[2].imgHappy);
            }
            else if(profileResult == require('../images/char4.png')){
                setCharImg(charactersProfile[3].imgHappy);
            }

            setTimeout(() => {
                setCharImg(profileResult);
            }, 3000);

            setMoney(money - 15);

            if(money <= -50){
                navigate('/theGameOver');
            }
            else if(money <= 0){
                alert("You don't have money");
            }
            if(hour >= 22){
                temp = hour + 2 - 24;
                setHour(temp);
                setHour((prevState) => prevState + 2);

                if(hour >= 22){
                    setDayCount((prevState) => prevState + 1);
                }
            }
            else{
                setHour((prevState) => prevState + 2);
            }

            setBarPlay(barPlay + nambah);
        }
        if(barPlay <= 0){
            navigate('TheGameOver');
        }
        else if(barPlay <= 24){
            setBarColorPlay("bg-warning");
        }
        else if(barPlay >= 75){
            setBarColorPlay("bg-success");
        }
        else if(barPlay >= 100 || barPlay === 100){
            setBarPlay(100);
        }
        else{
            setBarColorPlay('');
        }
    }
    function salon(){
        let nambah = 7.5;
        let selisih = 5;
        let temp;
        if(barPlay < 100){
            setMoney(money - 15);

            if(money <= -50){
                navigate('/theGameOver');
            }
            else if(money <= 0){
                alert("You don't have money");
            }
            if(hour >= 23){
                temp = hour + 1 - 24;
                setHour(temp);
                setHour((prevState) => prevState + 1);

                if(hour >= 23){
                    setDayCount((prevState) => prevState + 1);
                }
            }
            else{
                setHour((prevState) => prevState + 1);
            }

            setBarPlay(barPlay + nambah);
        }
        else if(barPlay <= 24){
            setBarColorPlay("bg-warning");
        }
        else if(barPlay >= 75){
            setBarColorPlay("bg-success");
        }
        else if(barPlay >= 100 || barPlay === 100){
            setBarPlay(100);
        }
        else{
            setBarColorPlay('');
        }
    }

    // Place Settings
    function goHome(){
        setPlace(0);
        setResultPlace('@ Home');
    }
    function goUMN(){
        setPlace(1);
        setResultPlace('@ UMN');
    }
    function goStarbucks(){
        setPlace(2);
        setResultPlace('@ Starbucks');
    }
    function goSummarecon(){
        setPlace(3);
        setResultPlace('@ Summarecon');
    }
    return (
        <div className="rootChild">
            <div className="container">
                <div className="weather-overlay">
                    {(typeof weather.main != 'undefined') ? <WeatherOverlay weather={weather.weather[0].main}/> : null}
                </div>
                <div className="header">
                    <div className="headerGreeting">
                        <h1 id="">{greeting}, {nameResult}!</h1>
                    </div>
                    <div className="headerGreetingQuotes">
                        <p id="quotes">{quotes}</p>
                    </div>
                    <div className="time">
                        <Day dayCount={dayCount} />
                        <p id="time">{time}</p>
                        {(typeof weather.main != 'undefined') ? <p id="celcius">{Math.round(weather.main.temp - 273)}°C</p> : <p>Couldn't be loaded</p>}
                        {(typeof weather.main != 'undefined') ? <WeatherIcon timing={weatherTime} weather={weather.weather[0].main}/> : <p>Couldn't be loaded</p>}
                    </div>
                </div>
                <div className="activitySection">
                    <div className="eachActivity">
                        <img src={Eat} alt="EatBar" />
                        <div style={{height: '25px'}} className="progress">
                            <div className={`progress-bar ${barColorEat}`} role={`progressbar`} style={{width: `${barEat}%`}} aria-valuenow={`${barEat}`} aria-valuemin={`0`} aria-valuemax={`100`}></div>
                        </div>
                    </div>
                    <div className="eachActivity">
                        <img src={Happiness} alt="PlayBar" />
                        <div style={{height: '25px'}} className="progress">
                            <div className={`progress-bar ${barColorPlay}`} role={`progressbar`} style={{width: `${barPlay}%`}} aria-valuenow={`${barPlay}`} aria-valuemin={`0`} aria-valuemax={`100`}></div>
                        </div>
                    </div> 
                    <div className="eachActivity">
                        <img src={Romance} alt="RomanceBar" />
                        <div style={{height: '25px'}} className="progress">
                            <div id="romanceBar" className={`progress-bar}`} role={`progressbar`} style={{width: `${barRomance}%`}} aria-valuenow={`${barRomance}`} aria-valuemin={`0`} aria-valuemax={`100`}></div>
                        </div>
                    </div> 
                    <div className="eachActivity">
                        <img src={Sleep} alt="SleepBar" />
                        <div style={{height: '25px'}} className="progress">
                            <div className={`progress-bar ${barColorSleep}`} role={`progressbar`} style={{width: `${barSleep}%`}} aria-valuenow={`${barSleep}`} aria-valuemin={`0`} aria-valuemax={`100`}></div>
                        </div>
                    </div>
                    <div className="eachActivity">
                        <img src={Study} alt="StudyBar" />
                        <div style={{height: '25px'}} className="progress">
                            <div className={`progress-bar ${barColorStudy}`} role={`progressbar`} style={{width: `${barStudy}%`}} aria-valuenow={`${barStudy}`} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </div>
                </div>
                <div className="activitySectionBottom">
                    <div className="activityToggler">
                        <ButtonList 
                            matkul={majorResult}
                            place={place}
                            addEat={addEat}
                            addEatMall={addEatMall}
                            addPlay={addPlay}
                            addRomance={addRomance}
                            addSleep={addSleep}
                            addStudy={addStudy}
                            addMapel={addMapel}
                            addCook={addCook}
                            kerja={kerja}
                            starBucks={starBucks}
                            shopping={shopping}
                            movie={movie}
                            salon={salon}
                        />
                    </div>
                    <div className="status">
                        <div className="profileSection">
                            <img className="userAvatar { rounded-circle }" src={charImg} alt={'Erik Gans'} />
                            <p id="personTalk">{thoughts}</p>
                        </div>
                        <div className="statusSection">
                            <div className="eachStatus">
                                <p><span>Name:</span> {fullNameResult}</p>
                            </div>
                            <div className="eachStatus">
                                <p><span>Major: </span> {finalMajor}</p>
                            </div>
                            <div className="eachStatus">
                                {localStorage.getItem('resultDateName') ? <p><span>Relationship:</span> {dateName}</p> : <p><span>Relationship:</span> Single</p>}
                            </div>
                            <div className="eachStatus">
                                <p><span>Condition: </span>{condition}</p>
                            </div>
                            <div className="eachStatus">
                                <p><span>Money: </span> ${money}</p>
                            </div>
                            <button id="phoneButton" type="button" data-bs-toggle="modal" data-bs-target="#theModal">- Open Your Phone -</button>
                            <button id="exitButton" type="button" data-bs-toggle="modal" data-bs-target="#theModalExit">Exit Game</button>
                        </div>
                    </div>
                    <div className="goTo">
                        <div className="placeName">
                            <p>{resultPlace}</p>
                        </div>
                        <div className="placeButton { d-grid }">
                            {/* <ButtonSetPlace 
                                place={place}
                                setPlaceA={goUMN}
                                setPlaceB={goStarbucks}
                                setPlaceC={goSummarecon}
                                setPlaceD={goHome}
                            /> */}
                            {(typeof weather.main != 'undefined') ? 
                            <ButtonSetPlace
                                place={place}
                                setPlaceA={goUMN}
                                setPlaceB={goStarbucks}
                                setPlaceC={goSummarecon}
                                setPlaceD={goHome}
                                timing={weatherTime}  
                            
                            /> : null}
                        </div>
                    </div>
                </div>
                <ModalExit />
                <ModalDate />
                <Modal addRomance={addRomance} />
            </div>
        </div>
    );
}

 
export default TheGame;
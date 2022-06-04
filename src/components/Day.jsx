const Day = (props) => {
    if(props.dayCount === 0){
        return (
            <p id="day">Sunday</p>
        );
    }
    else if(props.dayCount === 1){
        return (
            <p id="day">Monday</p>
        );
    }
    else if(props.dayCount === 2){
        return (
            <p id="day">Tuesday</p>
        );
    }
    else if(props.dayCount === 3){
        return (
            <p id="day">Wednesday</p>
        );
    }
    else if(props.dayCount === 4){
        return (
            <p id="day">Thursday</p>
        );
    }
    else if(props.dayCount === 5){
        return (
            <p id="day">Friday</p>
        );
    }
    else if(props.dayCount === 6){
        return (
            <p id="day">Saturday</p>
        );
    }
}
 
export default Day;
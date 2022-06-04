import { StrictMode } from "react";

const ButtonSetPlace = (props) => {
    if(props.place === 0){ // di home
        return (
            <StrictMode>
                <button onClick={props.setPlaceA} type="button" className="btnUMN">Go To UMN</button>
                <button onClick={props.setPlaceB} type="button" className="btnStarbucks">Go To Starbucks</button>
                <button onClick={props.setPlaceC} type="button" className="btnSumma">Go To Summarecon</button>
            </StrictMode>
        );
    }
    else if(props.place === 1){ // di umn
        return (
            <StrictMode>
                <button onClick={props.setPlaceD} type="button" className="btnHome">Go To Home</button>
                <button onClick={props.setPlaceB} type="button" className="btnStarbucks">Go To Starbucks</button>
                <button onClick={props.setPlaceC} type="button" className="btnSumma">Go To Summarecon</button>
            </StrictMode>
        );
    }
    else if(props.place === 2){ // di starbucks
        return (
            <StrictMode>
                <button onClick={props.setPlaceD} type="button" className="btnHome">Go To Home</button>
                <button onClick={props.setPlaceA} type="button" className="btnUMN">Go To UMN</button>
                <button onClick={props.setPlaceC} type="button" className="btnSumma">Go To Summarecon</button>
            </StrictMode>
        );
    }
    else if(props.place === 3){ // di summarecon
        return (
            <StrictMode>
                <button onClick={props.setPlaceD} type="button" className="btnHome">Go To Home</button>
                <button onClick={props.setPlaceA} type="button" className="btnUMN">Go To UMN</button>
                <button onClick={props.setPlaceB} type="button" className="btnStarbucks">Go To Starbucks</button>
            </StrictMode>
        );
    }
}
 
export default ButtonSetPlace;
import { StrictMode } from "react";

const ButtonList = (props) => {
    if(props.place === 0){ // @ home
        return (
            <StrictMode>
                <button id="buttonList" onClick={props.addEat} type="button">+ Eat</button>
                <button id="buttonList" onClick={props.addSleep} type="button">+ Sleep</button>
                <button id="buttonList" onClick={props.addCook} type="button">+ Cook</button>
                <button id="buttonList" onClick={props.addPlay} type="button">+ Play</button>
                <button id="buttonList" onClick={props.addStudy} type="button">+ Study</button>
            </StrictMode>
        );
    }
    else if(props.place === 1){
        if(props.matkul === 'Informatics'){
            return (
                <StrictMode>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Intro To Internet Things</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Algorithm & Data Structure</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Discrete Mathematics</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Operating System</button>
                    <button id="buttonList" onClick={props.addmapel} type="button">+ Computer Architecture</button>
                </StrictMode>
            );
        }
        else if(props.matkul === 'Information System'){
            return (
                <StrictMode>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Data Analysis</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Data Engineering</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Database Systems</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Data Visualization</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Algorithm & Data Structure</button>
                </StrictMode>
            );
        }
        else if(props.matkul === 'Engineering Physics'){
            return (
                <StrictMode>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Building Physics</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Signal Processing</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Engineering Mathematics</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Project Management</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Energy & Environment</button>
                    
                </StrictMode>
            );
        }
        else if(props.matkul === 'Electrical Engineering'){
            return (
                <StrictMode>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Flexible Manufacturing System</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Digital Control Systems</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Electrical Power Systems</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Industrial System & Instruments</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Mechatronics System Design</button>
                </StrictMode>
            );
        }
        else if(props.matkul === 'Computer Engineering'){
            return (
                <StrictMode>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Mobile Pervasive Computing</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Generation</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Applied Computer Networking</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ System Administration</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Design Creation</button>
                </StrictMode>
            );
        }
        else if(props.matkul === 'Communication Science'){
            return (
                <StrictMode>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Media Planning & The Consumer Journey</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Business Principles & Communication</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Marketing Public Relations</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Copywriting & Creative Strategy</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Research Problem</button>
                </StrictMode>
            );
        }
        else if(props.matkul === 'Digital Journalism'){
            return (
                <StrictMode>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Media Studies1</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Introduction to Journalism</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Audio Storytelling</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Video Program Production</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Design Creation</button>
                </StrictMode>
            );
        }
        else if(props.matkul === 'Management'){
            return (
                <StrictMode>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Technopreneurship</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Human Resource Management</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Fundamental of Investment</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Financial Management</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Organizational Development</button>
                </StrictMode>
            );
        }
        else if(props.matkul === 'Accounting'){
            return (
                <StrictMode>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Cost Accounting</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Taxation</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Accounting Principles</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Idea Validation</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Business Mentoring</button>
                </StrictMode>
            );
        }
        else if(props.matkul === 'Visual Communication Design'){
            return (
                <StrictMode>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Typography Principles</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Publication</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Nirmana</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Advanced Photography</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Creativity Theory</button>
                </StrictMode>
            );
        }
        else if(props.matkul === 'Film & Animation'){
            return (
                <StrictMode>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Basic Drawing</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Direction</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Animation History</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Cinematography</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Film Marketing</button>
                </StrictMode>
            );
        }
        else if(props.matkul === 'Architecture'){
            return (
                <StrictMode>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Visual Arts</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Architecture and Waste</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Architectural Design</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Photography in Architecture</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Introduction to Architecture</button>
                </StrictMode>
            );
        }
        else if(props.matkul === 'Department of Hotel Operations'){
            return (
                <StrictMode>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Food Styling</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Food Production</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Cost Control</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ Pastry and Bakery Production</button>
                    <button id="buttonList" onClick={props.addMapel} type="button">+ House Keeping Operation</button>
                </StrictMode>
            );
        }
    }
    else if(props.place === 2){ // @ starbucks
        return (
            <StrictMode>
                <button id="buttonList" onClick={props.starBucks} type="button">+ Caffe Latte ($3)</button>
                <button id="buttonList" onClick={props.starBucks} type="button">+ Espresso ($3)</button>
                <button id="buttonList" onClick={props.starBucks} type="button">+ Cappuccino ($3)</button>
                <button id="buttonList" onClick={props.starBucks} type="button">+ Macchiato ($3)</button>
                <button onClick={props.kerja} type="button" className="barista-button">Barista (+ $15)</button>
            </StrictMode>
        );
    }
    else if(props.place === 3){ // @ summarecon
        return (
            <StrictMode>
                {localStorage.getItem('resultDateName') ? <button className="theRomanceButton" onClick={props.addRomance} id="buttonList" type="button">+ Date ($10)</button> : <button className="theRomanceButton" data-bs-toggle="modal" data-bs-target="#theModalDate" id="buttonList" type="button">+ Date ($10)</button>}
                <button id="buttonList" onClick={props.addEatMall} type="button">+ Eat ($5)</button>
                <button id="buttonList" onClick={props.shopping} type="button">+ Shopping ($20)</button>
                <button id="buttonList" onClick={props.movie} type="button">+ Movie ($15)</button>
                <button id="buttonList" onClick={props.salon}type="button">+ Salon ($15)</button>
            </StrictMode>
        );
    }
}
 
export default ButtonList;
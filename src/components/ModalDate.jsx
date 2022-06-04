import { useState } from "react";
import { StrictMode } from "react";
import profilePicture from "../profilePicture";
import Toast from "./Toast";
import Profile from "./Profile";
import $ from 'jquery';

const ModalDate = () => {
    const [profile, setProfile] = useState(0);
    const toastTrigger = $('#continueDateButton');
    const liveToast = $('#liveToast');

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
    function activateDate(){
        let barWidth = 50;
        let dateName = $('#inputNameDate').val();
        let dateProfile = $('.userAvatar').attr('src'); // This is for future updates

        if(dateName === ''){
            alert('Please input the name of your date! It would be weird if your date does not have a name.');
        }
        else{
            localStorage.setItem('resultBarWidth', barWidth);
            localStorage.setItem('resultDateName', dateName);
            $('.theRomanceButton').removeAttr('data-bs-target');
            // const toast = new bootstrap.Toast(liveToast);
            // toast.show();
        }
    }
    return (
        <StrictMode>
            <Toast /> 
            <div className="{ modal fade }" id="theModalDate" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="{ modal-dialog }">
                    <div id="theModalExit-content" className="{ modal-content }">
                        <div className="{ modal-header }">
                            <h5 className="{ modal-title }" id="theModalDateTitle">Create Your Date</h5>
                            <button type="button" className="{ btn-close }" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div id="modalDateContent" className="{ modal-body }">
                            <p>So, you are lonely lah? Let's create your date!</p>
                            <div className="pickDateProfile">
                                <button onClick={leftClick} id="theLeftClick">🡨</button>
                                <Profile 
                                    img={profilePicture[profile].imgURL}
                                    alt={profilePicture[profile].alt}
                                />
                                <button onClick={rightClick} id="theRightClick">🡪</button>
                            </div>
                            <div className="dateInput">
                                <div id="input-for-date" className="{ mb-3 }">
                                    <input type="text" className="{ form-control }" id="inputNameDate" placeholder="The Name of Your Date"/>
                                </div>
                            </div>
                            <p>Keep in mind that having a partner is not always easy!</p>
                        </div>
                        <div id="footer-bottom" className="{ modal-footer }">
                            <button type="button" id="cancelDateButton" data-bs-dismiss="modal">Cancel</button>
                            <button onClick={activateDate} type="button" data-bs-dismiss="modal" id="continueDateButton">Create Date</button>
                        </div>
                    </div>
                </div>
            </div>
        </StrictMode>
    );
}
 
export default ModalDate;
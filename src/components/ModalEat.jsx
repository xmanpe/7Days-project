import { useNavigate } from "react-router-dom";

const ModalEat = () => {
    const navigate = useNavigate();
    return (
        <div className="{ modal fade }" id="theModalEat" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="{ modal-dialog }">
                <div id="theModalExit-content" className="{ modal-content }">
                    <div className="{ modal-header }">
                        <h5 className="{ modal-title }" id="theModalExitTitle">You are dead!</h5>
                        <button type="button" className="{ btn-close }" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="{ modal-body }">
                        <p>You probably should have eaten a lot more</p>
                    </div>
                    <div className="{ modal-footer }">
                        <button onClick={() => { navigate('/theDead'); localStorage.clear(); window.location.reload();}} type="button" id="continueButton">Ok</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ModalEat;
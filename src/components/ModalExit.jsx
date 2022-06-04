import { useNavigate } from "react-router-dom";

const ModalExit = () => {
    const navigate = useNavigate();
    return (
        <div className="{ modal fade }" id="theModalExit" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="{ modal-dialog }">
                <div id="theModalExit-content" className="{ modal-content }">
                    <div className="{ modal-header }">
                        <h5 className="{ modal-title }" id="theModalExitTitle">Are you sure?</h5>
                        <button type="button" className="{ btn-close }" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="{ modal-body }">
                        <p>You are about to leave the game. We currently can't save your game. Do you want to continue?</p>
                    </div>
                    <div className="{ modal-footer }">
                        <button type="button" id="cancelButton" data-bs-dismiss="modal">Cancel</button>
                        <button onClick={() => { navigate('/'); localStorage.clear(); window.location.reload();}} type="button" id="continueButton">Ok</button>
                    </div>
                </div>
            </div>
        </div>  
    );
}
 
export default ModalExit;
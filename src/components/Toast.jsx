const Toast = () => {
    return (
        <div aria-live="polite" tabIndex={-1} aria-atomic="true" className="{ d-flex my-auto justify-content-center mt-3 align-items-center w-100 }">
            <div id="liveToast" className="{ toast }" role={`alert`} aria-live="assertive" aria-atomic="true">
                <div className="{ toast-header }">
                    <strong className="{ me-auto }">7Days</strong>
                    <small>Now</small>
                    <button type="button" className="{ btn-close }" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="{ toast-body }">
                    Your date has has been created successfully!
                </div>
            </div>
        </div>
    );
}
 
export default Toast;
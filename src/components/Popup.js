import React, { useEffect } from 'react'


const Popup = ({data}) => {

    useEffect(() => {
        if(data.show){
            const popupButton = document.getElementById('popupbutton');
            popupButton.click();
            
        }
    }, [data.show])



    return (
        <>
            <button type="button" id="popupbutton" className="d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-body fs-4">
                    {data.message}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
            
        </>
    )
}

export default Popup

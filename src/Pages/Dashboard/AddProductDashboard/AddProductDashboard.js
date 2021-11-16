import axios from 'axios';
import React, { useState } from 'react'
import Popup from '../../../components/Popup';
import apiurl from '../../../hooks/apiUrl';
import useAuth from '../../../hooks/useAuth';

const AddProductDashboard = () => {
    
    const url = apiurl();
    const {token} = useAuth();
    const [droneData, setDroneData] = useState({});
    const [popup, setPopupData] = useState({'show':false});


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newDroneData = { ...droneData }
        newDroneData[field] = value;
        setDroneData(newDroneData);
        setPopupData({'show':false});        
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        if( ! droneData.title || ! droneData.price ) {
            setPopupData({
                'show':true,
                'message': 'Sorry Title and Price can not be empty'
            });
            return ;            
        }
        console.log(droneData)

        const apiHeader = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          };

        axios.post(`${url}/products`, droneData, apiHeader)
        .then(function (res) {
            
            if( res.data.acknowledged ){
                setPopupData({
                    'show':true,
                    'message': 'Drone add succeffully'
                });
            }
            document.getElementById('addDrone').reset();
        })
        .catch(function (error) {
            console.log(error);
        }); 


    }

    return (
        <>
            <h2>Add a new Drone</h2>
            <div className="w-75 my-5">
            <form onSubmit={handleLoginSubmit} className="text-center" id="addDrone">
     
                <div className="form-floating mb-2">
                    <input type="text" name="title" className="form-control" id="floatingInput" placeholder="Title" onChange={handleOnChange} />
                    <label htmlFor="floatingInput">Title</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="text" name="price" className="form-control" id="floatingInput" placeholder="Price" onChange={handleOnChange} />
                    <label htmlFor="floatingInput">Price</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="text" name="range" className="form-control" id="floatingInput" placeholder="Range" onChange={handleOnChange} />
                    <label htmlFor="floatingInput">Range</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="text" name="flightime" className="form-control" id="floatingInput" placeholder="Fligh time" onChange={handleOnChange} />
                    <label htmlFor="FloatingInput">Fligh time</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="text" name="photo" className="form-control" id="floatingInput" placeholder="Photo" onChange={handleOnChange} />
                    <label htmlFor="FloatingInput">Photo</label>
                </div>
                <div className="mb-2">
                    <textarea name="description" onChange={handleOnChange} className="form-control" id="floatingInput" cols="30" rows="5" placeholder="Photo"></textarea>
                </div>

            
                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
            {popup.show ? <Popup data={popup} /> : '' } 
        </div>            
        </>
    )
}

export default AddProductDashboard

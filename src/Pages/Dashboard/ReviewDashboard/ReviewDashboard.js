import axios from 'axios';
import React, { useState } from 'react'
import Popup from '../../../components/Popup';
import apiurl from '../../../hooks/apiUrl';
import useAuth from '../../../hooks/useAuth';

const ReviewDashboard = () => {
    
    const url = apiurl();
    const {user} = useAuth();
    const [reviewData, setReviewData] = useState({'star':1});
    const [popup, setPopupData] = useState({'show':false});


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...reviewData }
        newReviewData[field] = value;
        setReviewData(newReviewData);
        setPopupData({'show':false});      
    }



    const handleReviewSubmit = e => {
        e.preventDefault();

        reviewData['name'] = user.displayName;
        if( ! reviewData.description ) {
            setPopupData({
                'show':true,
                'message': 'Sorry Message field can not be empty'
            });
            return ;            
        }
        console.log(reviewData)
        axios.post(`${url}/review`, reviewData)
        .then(function (res) {
            if( res.data.acknowledged ){
                setPopupData({
                    'show':true,
                    'message': 'Your review submited succeffully'
                });
            }
            document.getElementById('addReview').reset();
        })
        .catch(function (error) {
            console.log(error);
        }); 


    }

    return (
        <>
            <h2>Add a review</h2>
            <div className="w-75 my-5">
            <form onSubmit={handleReviewSubmit} className="text-center" id="addReview">
     
                <div className="form-floating mb-2">
                    <select name="star" id="floatingInput" onChange={handleOnChange} className="form-control">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label htmlFor="floatingInput">Star</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="text" name="name" className="form-control" id="floatingInput" placeholder="Name" defaultValue={user.displayName} onChange={handleOnChange} />
                    <label htmlFor="floatingInput">Name</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="text" name="photo" className="form-control" id="floatingInput" placeholder="Photo" onChange={handleOnChange} />
                    <label htmlFor="FloatingInput">Photo</label>
                </div>

                <div className="mb-2">
                    <textarea name="description" onChange={handleOnChange} className="form-control" id="floatingInput" cols="30" rows="5" placeholder="Photo"></textarea>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit review</button>
            </form>
            {popup.show ? <Popup data={popup} /> : '' } 
        </div>            
        </>
    )
}

export default ReviewDashboard

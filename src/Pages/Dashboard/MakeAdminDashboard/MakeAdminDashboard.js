import axios from 'axios';
import React, { useState } from 'react'
import Popup from '../../../components/Popup';
import apiurl from '../../../hooks/apiUrl';
import useAuth from '../../../hooks/useAuth';

const MakeAdminDashboard = () => {
    
    const [popup, setPopupData] = useState({'show':false});
    const url = apiurl();
    const {token} = useAuth();
    const [email, setEmail] = useState('');
    
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleMakeAdmin = (e) => {
        e.preventDefault();
        console.log(email);
        const apiHeader = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          };

        axios.put(`${url}/users/admin`, {'email' : email }, apiHeader)
        .then(function (res) {
            
            if( res.data.acknowledged ){
                setPopupData({
                    'show':true,
                    'message': `${email} this user create as a admin succeffully`
                });
            }
            document.getElementById('makeAdmin').reset();
        })
        .catch(function (error) {
            console.log(error);
        }); 


    }

    return (
        <>
            <form onSubmit={handleMakeAdmin} className="mx-auto my-5 text-center w-50" id="makeAdmin">

                <div className="form-floating mb-2">
                <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" onBlur={handleOnBlur} />
                <label htmlFor="floatingInput">Email address</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Make Admin</button>
            </form>
            {popup.show ? <Popup data={popup} /> : '' } 
        </>
    )
}

export default MakeAdminDashboard

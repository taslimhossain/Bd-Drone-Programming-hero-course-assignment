import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Popup from '../../components/Popup';
import TitleBar from '../../components/TitleBar';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const [regData, setRegData] = useState({});
    const [popup, setPopupData] = useState({'show':false});

    const { registerUser, authError } = useAuth();

    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegData = { ...regData }
        newRegData[field] = value;
        setRegData(newRegData);
        setPopupData({'show':false});        
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        if( ! regData.email || ! regData.password ) {
            setPopupData({
                'show':true,
                'message': 'Sorry Email and Password can not be empty'
            });
            return ;            
        }


        registerUser(regData.email, regData.password, regData.name, history);

        if(authError){
            alert(authError);
        }

        // setPopupData({
        //     'show':true,
        //     'message': 'Login successfully'
        // });
       // console.log(popup);

    }
    console.log(popup);

    return (
        <>
        <TitleBar title="" />
        <div className="mx-auto w-25 my-5">
            <form onSubmit={handleLoginSubmit} className="text-center">
                <img className="mb-4 mt-5" src="https://bd-drone.web.app/images/dronelogo.png" alt="" height="100" />
                <h1 className="h3 mb-3 fw-normal">Create new account</h1>

                <div className="form-floating mb-2">
                    <input type="text" name="name" className="form-control" id="floatingInput" placeholder="Name" onChange={handleOnChange} />
                    <label htmlFor="floatingInput">Name</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleOnChange} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handleOnChange} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
            </form>
            <p> <Link to="login" className="d-block fs-5 fw-bold my-2 text-black">Login</Link> </p>
            {popup.show ? <Popup data={popup} /> : '' } 
        </div>
    </>
    )
}

export default Register

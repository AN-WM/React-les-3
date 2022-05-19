import React from "react";
import '../App.css'
import {useNavigate} from "react-router-dom";

function Loginpage({auth, toggleAuth}) {
    const navigate = useNavigate();

    function login() {
        toggleAuth(!auth);
        navigate('/blogposts');
    }

    return (
        <div>
            <h1>Loginpage</h1>
            <button
                type="button"
                onClick={login}
            >
                Log in
            </button>
        </div>
    )
}

export default Loginpage;
import React from "react";
import '../App.css'
import {NavLink, useNavigate} from 'react-router-dom';

function Navbar({auth, toggleAuth}) {
    const navigate = useNavigate();

    function logout() {
        toggleAuth(!auth);
        navigate('/');
    }

    return (
        <ul
            className="navigatie"
        >
            <NavLink to="/" className="navigatie-link">
                Home
            </NavLink>

            {/*Wanneer de gebruiker ingelogd is, zijn Blogposts en de log uit knop zichtbaar*/}
            {auth === true ?
                <>
                    <NavLink to="/blogposts" className="navigatie-link">
                        Blogposts
                    </NavLink>

                    <button
                        type="button"
                        onClick={logout}
                    >
                        Log uit
                    </button>
                </>

                // Wanneer de gebruiker niet ingelogd is, is alleen de log in link zichtbaar
                :
                <NavLink to="/login" className="navigatie-link">
                    Log in
                </NavLink>
            }


        </ul>
    )
}

export default Navbar;
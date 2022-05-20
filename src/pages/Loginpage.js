import React, {useState} from 'react';
import '../App.css'
import {useNavigate} from "react-router-dom";
import {useForm} from 'react-hook-form';
import users from '../data/users.json';

function Loginpage({auth, toggleAuth}) {
    const navigate = useNavigate();

    const [loginError, toggleLoginError] = useState(false);

    const {register, formState: {errors}, handleSubmit} = useForm({
        mode: 'onBlur',
        defaultValues: {
            username: "",
            password: ""
        }
    });

    function login() {
        toggleAuth(!auth);
        navigate('/blogposts');
    }

    function onFormSubmit({username, password}) {

        const thisUser = users.find((user) => {
            return (user.username === username) && (user.password === password);
        })

        if (thisUser === undefined) {
            console.log("gebruiker onbekend");
            loginError === false && toggleLoginError(!loginError);
        } else {
            login();
        }
    }


    return (
        <form
            className="inhoud"
            onSubmit={handleSubmit(onFormSubmit)}
        >

            <h1>Loginpage</h1>

            <label>
                Username
                <input
                    type="text"
                    {...register("username",
                        {required: "Username mag niet leeg zijn",})}
                />
            </label>
            {errors.username && <p className="error-message">{errors.username.message}</p>}

            <label>
                Password
                <input
                    type="password"
                    {...register("password",
                        {required: "Password mag niet leeg zijn",})}
                />
            </label>
            {errors.password && <p className="error-message">{errors.password.message}</p>}

            {loginError === true && <p className="error-message">Gebruiker onbekend</p>}

            <button
                type="submit"
            >
                Log in
            </button>
        </form>
    )
}

export default Loginpage;
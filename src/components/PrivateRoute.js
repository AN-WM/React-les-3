import React from 'react';
import {Navigate} from "react-router-dom";

const PrivateRoute = ({auth, children}) => {
    //Check of ingelogd. Zo nee, ga naar homepage
    if (!auth) {
        return <Navigate to="/" replace/>;
    }
    // Als je wel ingelogd bent, ga door naar de children zoals die meegegeven waren.
    else return children;
};

export default PrivateRoute;
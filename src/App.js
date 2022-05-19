import React, {useState} from 'react';
import './App.css';
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Blogposts from "./pages/Blogposts";
import Blogpost from "./pages/Blogpost";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <Router>
                <Navbar
                    auth={isAuthenticated}
                    toggleAuth={toggleIsAuthenticated}
                />

                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route
                        path="/login"
                        element={
                            <Loginpage
                                auth={isAuthenticated}
                                toggleAuth={toggleIsAuthenticated}
                            />
                        }
                    />
                    <Route
                        path="/blogposts"
                        element={
                            <PrivateRoute
                                auth={isAuthenticated}
                            >
                                <Blogposts/>
                            </PrivateRoute>
                        }/>
                    <Route
                        path="/blogposts/:blogId"
                        element={
                            <PrivateRoute
                                auth={isAuthenticated}
                            >
                                <Blogpost/>
                            </PrivateRoute>
                        }/>
                </Routes>
            </Router>
        </>
    );
}

export default App;

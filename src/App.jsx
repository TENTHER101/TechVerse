import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Universes from "./components/Universes";
import UserProfile from "./components/UserProfile";
import Universe from "./components/Universe";
import Galaxy from "./components/Galaxy";
import Planet from "./components/Planet";
import Footer from "./components/Footer";
import "./styles/main.css";

function App() {
    return (
        <Router basename="/">
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/universes" element={<Universes />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route
                        path="/universe/:universeName"
                        element={<Universe />}
                    />
                    <Route
                        path="/universe/:universeName/galaxy/:galaxyId"
                        element={<Galaxy />}
                    />
                    <Route
                        path="/universe/:universeName/galaxy/:galaxyId/planet/:planetId"
                        element={<Planet />}
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

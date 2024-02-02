import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./Components/Homepage/Homepage";


function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Navigation;
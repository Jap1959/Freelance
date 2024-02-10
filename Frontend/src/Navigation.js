import React, { createContext, useEffect, useReducer, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./Components/Homepage/Homepage";
import ServicePage from "./Components/ServicePage/ServicePage";
import ContactPage from "./Components/ContactPage/ContactPage";
import BookPage from "./Components/BookPage/Bookpage";
import NotFoundPage from "./Components/NotFound";
import RequestList from "./Components/Request/RequestPage";
import LoginPage from "./Components/Login/LoginPage";
import { initialState, reducer } from "./reducer";
import axios from "axios";
import Protected from "./Components/Protected";
import AddReviewPage from "./Components/Review/Review";
export const userContext = createContext();

function Navigation() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isMobileView, setIsMobileView] = useState(false);
    const getLoginCookie = () => {
        const cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('login='));
        if (cookie) {
            return cookie.split('=')[1];
        } else {
            return null;
        }
    };
    useEffect(() => {
        async function fetchDetails() {
            try {
                const result = getLoginCookie();
                console.log("hello" + result);
                if (result === 'true') {
                    console.log("hello" + result);
                    const login = result;
                    dispatch({ type: "USER", payload: { login: login, } });
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchDetails();
    }, []);
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768); // Adjust the threshold as needed
        };

        handleResize(); // Check initially
        window.addEventListener("resize", handleResize); // Add event listener for resize

        return () => {
            window.removeEventListener("resize", handleResize); // Clean up the event listener
        };
    }, []);
    return (
        <userContext.Provider value={{ state, dispatch }}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomePage mobile={isMobileView} />} />
                    <Route exact path="/Services" element={<ServicePage />} />
                    <Route exact path="/Contactus" element={<ContactPage />} />
                    <Route exact path="/Book" element={<BookPage />} />
                    <Route exact path="/Enquire" element={<ContactPage />} />
                    <Route exact path="/Login" element={<LoginPage />} />
                    <Route exact path="/Notification" element={<Protected><RequestList /></Protected>} />
                    <Route exact path="/Review" element={<Protected><AddReviewPage /></Protected>} />
                    <Route exact path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </userContext.Provider>
    );
}
export default Navigation;
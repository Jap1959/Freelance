import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./Components/Homepage/Homepage";
import ServicePage from "./Components/ServicePage/ServicePage";
import ContactPage from "./Components/ContactPage/ContactPage";
import BookPage from "./Components/BookPage/Bookpage";
import NotFoundPage from "./Components/NotFound";


function Navigation() {
    const [isMobileView, setIsMobileView] = useState(false);

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
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage mobile={isMobileView} />} />
                <Route exact path="/Services" element={<ServicePage />} />
                <Route exact path="/Contactus" element={<ContactPage />} />
                <Route exact path="/Book" element={<BookPage />} />
                <Route exact path="/Enquire" element={<ContactPage />} />
                <Route exact path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Navigation;
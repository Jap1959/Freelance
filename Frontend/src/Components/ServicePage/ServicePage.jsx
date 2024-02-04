import React from "react";
import Navbar from '../Homepage/App';
import Footer from "../Homepage/Footer";
import ServicesList from "./ServicesList";

function ServicePage() {
    return (
        <>
            <Navbar />
            <ServicesList />
            <Footer />
        </>

    );
}
export default ServicePage;
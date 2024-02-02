import React from "react";
import Navbar from "./App";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import ServicesSection from "./Services";
import TestimonialSection from "./Testimonial";
import StatsSection from "./StateSection";


function HomePage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <TestimonialSection />
            <StatsSection />
            <Footer />
        </>

    );
}
export default HomePage;
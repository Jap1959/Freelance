import React from "react";
import Navbar from "./App";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import ServicesSection from "./Services";
import TestimonialSection from "./Testimonial";
import StatsSection from "./StateSection";
import HeroSectionMobile from "./HerosectionMobile";
import TestimonialSectionMobile from "./TestimonialMobile";


function HomePage(props) {
    return (
        <>
            <Navbar />
            {props.mobile ? <HeroSectionMobile /> : <HeroSection />}
            <ServicesSection />
            {props.mobile ? <TestimonialSectionMobile /> : <TestimonialSection />}
            <StatsSection />
            <Footer />
        </>

    );
}
export default HomePage;
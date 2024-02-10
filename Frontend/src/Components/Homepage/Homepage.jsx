import React, { useEffect } from "react";
import Navbar from "./App";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import ServicesSection from "./Services";
import TestimonialSection from "./Testimonial";
import HeroSectionMobile from "./HerosectionMobile";
import TestimonialSectionMobile from "./TestimonialMobile";


function HomePage(props) {

    return (
        <>
            <Navbar />
            {props.mobile ? <HeroSectionMobile /> : <HeroSection />}
            <ServicesSection />
            {props.mobile ? <TestimonialSectionMobile /> : <TestimonialSection />}
            <Footer />
        </>

    );
}
export default HomePage;
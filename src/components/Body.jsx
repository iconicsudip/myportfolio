import React from 'react'
import Intro from "./Intro";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";
import Testimonials from "./Testimonials";

export default function Body(props) {
    if(props.change!=="undefined"){
        props.change(window.location.pathname===""?"":window.location.pathname.split("/")[1])
    }
    return (
        <>
            <Intro />
            <Services />
            <Portfolio />
            <Resume />
            <Testimonials />
            <Contact />
        </>
    )
}

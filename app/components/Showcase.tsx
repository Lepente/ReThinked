import React from "react";

export default function Showcase () {
    return (
        <>
        <div id="work" className="m-auto work-container text-center">
            <h3 className="text-5xl mb-4 font-bold">Our work</h3>
            <p className="text-gray-600 mb-4 text-lg">We are proud that we create websites that our clients love.</p>
            <img src="../images/evyssa-work.jpg" className="project-image shadow-lg" alt="Porject Image" />
            <div className="text-left mt-8">
                <h4 className="text-3xl font-bold mb-4">Evyssa Vacations' Website</h4>
                <p className="text-lg text-gray-600 max-w-2xl mb-4">A Luxurious new website for a luxury travel agency. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="evyssavacations.com" className="cta-link text-lg">Visit Live Site</a>
            </div>
        </div>
        </>
    )
}
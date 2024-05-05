import React from "react";
import "../styles/Footer.css";

function Footer(){

    const currentYear= new Date().getFullYear();


    return (
            <div className="Footer__Container">

                    <div className="Footer__Section1">
                        <div className="Footer__Subsection FootSubsection1">
                            <h2>Useful Links</h2>
                            <ul>
                                <li>Admission</li>
                                <li>Health & Safety</li>
                                <li>Our Approach</li>
                                <li>Contact Us</li>
                                <li>NewsLetter</li>
                                <li>Circular</li>
                                <li>Mandatory Public Disclosure</li>
                            </ul>
                        </div>
                        <div className="Footer__Subsection FootSubsection2">
                         <h2>NewsLetter</h2>
                            <div className="Footer__Input">
                           
                                <input type="text" placeholder="Email Id"></input>
                                <div className="SendButton"><strong>SEND</strong></div>
                            </div>
                        </div>

                        <div className="Footer__Subsection FootSubsection3">
                        <h2>Quick Links</h2>
                            <ul>
                                <li>Academics</li>
                                <li>News</li>
                                <li>Events</li>
                                <li>Video Gallery</li>
                                <li>Career</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Footer__Section2">
                        <div className="Footer__Section2__Div1"><span>Privacy Policy</span><span>Terms of Use</span></div>
                        <div>CopyRight © {currentYear}</div>
                    </div>


            </div>
    )
}

export default Footer;
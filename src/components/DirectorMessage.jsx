import React from "react";
import "../styles/DirectorMessage.css";
function DirectorMessage(){

    return (

            <div className="DirectorsMessage">

                    <div className="DirectorImage" alt="">
                            <img src="https://th.bing.com/th/id/OIP.1-rQVD-eBu_wAbbx5Zn6swHaGC?rs=1&pid=ImgDetMain" alt=""></img>
                            <p>Dr. Rajeev</p>
                    </div>

                    <div className="Message">
                            <h1 className="bg-colorDiff" >DIRECTOR'S MESSAGE</h1>
                            <p>We, at IIT Bhilai School are committed to providing a high-quality education for our students. We emphasise the importance of achieving personal standards of excellence in academic, sporting, cultural and recreational activities. The school combines excellent facilities with a progressive curriculum, proactive values teaching and high expectations of students in performance and behaviour</p>
                            <strong className="bg-colorDiff">Read More</strong>
                    </div>



            </div>





    );

        }


export default DirectorMessage;
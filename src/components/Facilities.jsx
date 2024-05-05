import React , { useState , useEffect } from "react";
import "../styles/Facilities.css";


function Facilities(){
    //FacilityCAROUSEL ...ISH lOGIC

            const [ facilityArray , setFacilityArray ] = useState([1,0,0,0,0]);
            function handleClick(event,id){
                        const nextFacilityArray = [...facilityArray];
                        nextFacilityArray[id]=1;
                        for(var i=0;i<nextFacilityArray.length;i++){
                            if(i!==id){
                                nextFacilityArray[i]=0;
                            }
                        }
                        setFacilityArray(nextFacilityArray);

            }
            useEffect(()=>{
                    const FacilitiesList = Array.from (document.getElementsByClassName("FacilitiesList"));
                    const FacilityImages=Array.from(document.getElementsByClassName("FacilityImages"));
                    for(var i=0;i<facilityArray.length;i++){
                        if(facilityArray[i]===1){
                            FacilityImages[i].style.display="block";
                            FacilitiesList[i].style.backgroundColor="#10439F";
                            FacilitiesList[i].style.color="white";
                        }
                        else{
                            FacilityImages[i].style.display="none";
                            FacilitiesList[i].style.backgroundColor="#F2F2F2";
                            FacilitiesList[i].style.color="black";
                        }
                    }


            },[facilityArray])



    return (
                <div className="Facilities__Section">
                <h1>FACILITIES</h1>

                        <div className="Facilities__Statement"><p>Each child is different, and at  International School, IIT we understand this and provide the young scholars with the ideal learning environment.</p></div>
                       <div className="Facilities">
                            <div className="Facilities__List">
                                <div className="FacilitiesList " onClick={event=>handleClick(event,0)}>Health & Safety</div>
                                <div className="FacilitiesList" onClick={event=>handleClick(event,1)}>Security</div>
                                <div className="FacilitiesList" onClick={event=>handleClick(event,2)}>Music</div>
                                <div className="FacilitiesList" onClick={event=>handleClick(event,3)}>Library</div>
                                <div className="FacilitiesList" onClick={event=>handleClick(event,4)}>Computer lab</div>
                            </div>
                             <div className="Facilities__Images">
                                <img  className="FacilityImages" src="https://www.amanoraschool.edu.in/public/uploads/2023/health-safety.jpg" alt=""></img>
                                <img className="FacilityImages" src="https://www.amanoraschool.edu.in/public/uploads/2023/1693912751-64f70eafca8fd.jpg" alt=""></img>
                                <img className="FacilityImages" src="https://www.amanoraschool.edu.in/public/uploads/2023/music.png" alt=""></img>
                                <img  className="FacilityImages"src="https://www.amanoraschool.edu.in/public/uploads/2023/library.png" alt=""></img>
                                <img  className="FacilityImages"src="	https://www.amanoraschool.edu.in/public/uploads/2023/computer-labs.png" alt=""></img>
                             </div>
                        </div>
                </div>
    );
};


export default Facilities;
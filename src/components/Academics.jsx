import React , {useState , useEffect} from "react";
import "../styles/Academics.css";


function Subcomponent(props){
     return(  <div className="Subcomponent">
                    <img src={props.imageURL} alt=""></img>
                    <p>{props.message}</p>

        </div>
     );
        
}
function Academics(){

    const array=["Collaboration and Communication", "Exploration and Creative Play", "Imitation and Guided Practice", "Gross and Fine Motor Skills", "Literacy and Numeracy Skills", "Multi Sensorial Learning", "Language Skills and Multiple Intelligences", "Socio - Emotional Skills", "Culture, Values, Artistic Expression", "Structured Fitness and Wellness", "Curiosity and Guided discovery", "Ideation and Innovation", "Collaboration and Communication", "Outcome based Interactive Learning", "Language, Literacy and Numeracy Skills", "Environment Awareness and Sensitivity", "Cultural Awareness and Artistic Expression", "Socio- Emotional Intelligence and Community Service", "Foundational, Vocational and Passion Building", "Structured Sports Skills Development and Training", "Making Meaning from Direct Experience", "Conceptual Clarity through hands on Practice", "Active involvement and Self Learning", "Well curated and Age Appropriate Content", "Communication, Collaboration, Critical Thinking", "Foundational, Vocational and Passion Building", "Music, Art, Dance, Physical and Mental Wellness", "Entrepreneurship and Innovation", "Financial Management, Philanthropy and Global Citizenship", "Multiple Sports and Skills Training", "Subject Mastery Through Conceptual Clarity", "Goal Oriented and Outcome based Instruction", "Self-Management and Adaptability", "Creative and Collaborative Learning", "Communication and Critical Thinking", "Science Experimentation and Exploratory Learning", "Reflection and Peer Learning", "Philanthropy, Entrepreneurship & Management", "Sports and Wellness"];
    const [navArr , setNavArr] = useState([1,0,0,0]);


        function handleNavClick(event,id){
                        const newNavArr = [...navArr];
                        for(var i=0;i<newNavArr.length;i++){
                            if(i===id){
                                newNavArr[i]=1;
                            }
                            else{
                                newNavArr[i]=0;
                            }
                        }
                        setNavArr(newNavArr);
                        return navArr;
        }

        useEffect(()=>{
                const featuresArray=Array.from(document.getElementsByClassName("Academic__FeaturesContainer"));
                const optionsArray=Array.from(document.getElementsByClassName("OptionsFk2"));

                console.log(featuresArray);
                for(var i=0;i<navArr.length;i++){
                    if(navArr[i]!==0){
                        featuresArray[i].style.display="flex";
                        optionsArray[i].style.backgroundColor="#10439F";
                        optionsArray[i].style.color="white";
                    }
                    else{
                        featuresArray[i].style.display="none";
                        optionsArray[i].style.backgroundColor="#e3e3e3";
                        optionsArray[i].style.color="#A09E9E";
                    }
                }
        },[navArr])









    return (
            <div className="Academics__Section">
                <div className="Academics__Banner">
                    <img src="	https://www.amanoraschool.edu.in/public/uploads/2023/1681971915-6440dacb653dd.jpg" alt=""></img>
                    <div className="Banner__Text"><h1 style={{color:"white"}}>ACADEMICS</h1></div>
                </div>
            <div className="Academic__Journey">
                    <h2>ACADEMIC EXCELLENCE - YOUR CHILD'S JOURNEY IN OUR SCHOOL</h2>
                    <div className="AcademicJourney__Options">
                        <div   className="OptionsFk2" onClick={event=>handleNavClick(event,0)}>ANANDA</div>
                        <div className="OptionsFk2" onClick={event=>handleNavClick(event,1)}>JIGYASA</div>
                        <div  className="OptionsFk2" onClick={event=>handleNavClick(event,2)}>ANUBHAV</div>
                        <div  className="OptionsFk2" onClick={event=>handleNavClick(event,3)}>SADHNA</div>
                    </div>
                    <div className="Academic__FeaturesContainer">
                        {array.map((item,index)=>{
                                    return  index<10? <Subcomponent message={item} imageURL="https://www.amanoraschool.edu.in/public/uploads/2023/1681996588-64413b2ccdca7.png"/>:null
                        })}
                    </div>
                    <div className="Academic__FeaturesContainer">
                        {array.map((item,index)=>{
                                    return index>=10&&index<20?<Subcomponent message={item} imageURL="https://www.amanoraschool.edu.in/public/uploads/2023/1681996588-64413b2ccdca7.png"/>:null
                        })}
                    </div>
                    <div className="Academic__FeaturesContainer">
                        {array.map((item,index)=>{
                                    return index>=20&&index<30?<Subcomponent message={item} imageURL="https://www.amanoraschool.edu.in/public/uploads/2023/1681996588-64413b2ccdca7.png"/>:null
                        })}
                    </div>
                    <div className="Academic__FeaturesContainer">
                        {array.map((item,index)=>{
                                    return index>=30&&index<40?<Subcomponent message={item} imageURL="https://www.amanoraschool.edu.in/public/uploads/2023/1681996588-64413b2ccdca7.png"/>:null
                        })}
                    </div>
                    

            </div>
            <div className="Academic__Curriculum">
                <h1>ACADEMIC EXCELLENCE - OUR CURRICULUM</h1>
                <p>All students learn from resources and textbooks prescribed by the board. Core Curriculum provides tools with knowledge required and goes a step further in ensuring genuine engagement with subjects.</p>
                <div className="Curriculum__Cards">
                                <div className="Curriculum__Card">
                                    <img src="	https://www.amanoraschool.edu.in/public/uploads/2023/1681998272-644141c085e2e.png" alt=""></img>
                                    <p>Thematic, Integrated Skill Based Books</p>
                                </div>
                                <div className="Curriculum__Card">
                                    <img src="https://www.amanoraschool.edu.in/public/uploads/2023/1681998278-644141c6ed91f.png" alt=""></img>
                                    <p>Teaching Tool Kit</p>
                                </div>
                                <div className="Curriculum__Card">
                                    <img src="https://www.amanoraschool.edu.in/public/uploads/2023/1681998288-644141d09bccb.png" alt=""></img>
                                    <p>Physical Education</p>
                                </div>
                                <div className="Curriculum__Card">
                                    <img src="https://www.amanoraschool.edu.in/public/uploads/2023/1681998297-644141d9f14da.png" alt=""></img>
                                    <p>Life Skills Programme</p>
                                </div>
                                <div className="Curriculum__Card">
                                    <img src="https://www.amanoraschool.edu.in/public/uploads/2023/1681998330-644141fa29634.png" alt=""></img>
                                    <p>Standard Library Programme</p>
                                </div>
                                <div className="Curriculum__Card">
                                    <img src="	https://www.amanoraschool.edu.in/public/uploads/2023/1681998272-644141c085e2e.png" alt=""></img>
                                    <p>Thematic, Integrated Skill Based Books</p>
                                </div>
                                <div className="Curriculum__Card">
                                    <img src="https://www.amanoraschool.edu.in/public/uploads/2023/1681998341-64414205bb452.png" alt=""></img>
                                    <p>co-scholastics</p>
                                </div>
                                <div className="Curriculum__Card">
                                    <img src="https://www.amanoraschool.edu.in/public/uploads/2023/1681998351-6441420f1fc60.png" alt=""></img>
                                    <p>Standard Assessments</p>
                                </div>
                </div>
            </div>

            </div>
    );
}

export default Academics;
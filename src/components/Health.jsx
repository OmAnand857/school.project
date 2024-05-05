import React from "react";
import "../styles/Health.css";


function HealthSubcomp(props){
        return (
                <div className="HeatlthInfo__Section">
                        <div className="imgCnt">
                            <img src={props.imageURL} alt=""></img>
                        </div>
                        <div >
                            <h4>{props.heading}</h4>
                            <p>{props.text}</p>
                        </div>
                </div>
        );
}


function HealthSubcompInvert(props){
        return(
            <div className="HeatlthInfo__Section__Invert">
            <div className="imgCntInvert">
                <img src={props.imageURL} alt=""></img>
            </div>
            <div >
                <h4>{props.heading}</h4>
                <p>{props.text}</p>
            </div>
    </div>
        );
}





function Health(){
    return (

        <div className="HS__Container">
            <div className="Banner__HS">
                        <img src="https://www.ryangroup.org/ria/public/uploads/2022/newsletter-banner.jpg" alt=""></img>
                        <div className="HS__BannerText"><h2>FOLLOWING BEST PRACTICES TO KEEP CHILDREN HEALTHY AND SAFE</h2></div>
            </div>
            <HealthSubcomp  heading="HEALTH SAFETY" text="At IIT Bhilai School, we consider Health Safety and Child Protection (HSCP) as an innate school culture developed through an iterative process of risk assessment, risk mitigation, evaluation of control measures, and periodic review. It is a constantly evolving process based on honest feedback and timely corrective action measures. Our teams are guided by the Local/State/National mandate on school safety and by the best practices followed across the education sector.
            The HSCP culture at IIT Bhilai School heavily hinges on top leadership owning responsibility, effective working of School safety committees, competence creation, role-based clear accountability, safe recruitment, and, above all, a shared vision of keeping the child’s wellbeing at the center, all the time. The implementation has hinged around proactively supporting the schools with world-class training, regular review meetings, and periodic audits against global standards on school safety." imageURL="https://www.ryangroup.org/ria/public/uploads/2022/1656993623-62c3b757f0a60.png"/>

            <HealthSubcompInvert heading="CAMPUS SAFETY" text="Campus Safety policy and process ensure safety at work for every individual on the school premises. It is achieved through safe building structure, safe electrical installations, continuous CCTV surveillance, physical perimeter safety, and adherence to strict visitor management policy. Our schools are equipped with all essential Fire fighting facilities based on a detailed risk assessment of the school that meets all regulatory norms. This is backed by periodic training and mock drills to evaluate readiness to handle emergencies." imageURL="https://www.ryangroup.org/ria/public/uploads/2022/1656993743-62c3b7cf140a3.png"/>

            <HealthSubcomp heading="FIRST AID CENTRE" text="Our schools are well-equipped with a First Aid Centre (Infirmary) manned by a qualified nurse on duty to meet any medical emergency. In addition, regular sensitization on health and hygiene-related issues has helped maintain the well-being of our learners. We have a well-trained squad of first aiders who can handle cases in a routine school environment." imageURL="https://www.ryangroup.org/ria/public/uploads/2022/1656994427-62c3ba7b3b564.jpg"/>

            <HealthSubcompInvert heading="SCHOOL BUS SAFETY" text="Safety of our young learners whilst using School transport remains a key focus area of our schools, supported by a vigilant mechanism monitoring compliance to all mandatory safety requirements and best practices. Well-trained and professionally competent bus staff serve as a safety net whilst the bus is ferrying our learners." imageURL="https://www.ryangroup.org/ria/public/uploads/2022/1656994915-62c3bc63e2384.png"/>

            <HealthSubcomp heading="SCHOOL READINESS PROTOCOL - COVID 19" text="We have always been guided by the maxim that Prevention is better than Cure. For us, there is nothing more important than the safety and well-being of our learners. Accordingly, we have taken arduous efforts to prepare and make our campus safe during the COVID-19 pandemic. We are not fearful, but being careful. We conﬁdently welcome our young learners back to school and experience the joy of learning in a safe environment." imageURL="https://www.ryangroup.org/ria/public/uploads/2022/1656994971-62c3bc9b1da24.png"/>

            <HealthSubcompInvert heading="EMERGENCY RESPONSE TEAM (CERT)" text="The Community Emergency Response Team (CERT) is trained in basic disaster response skills, such as fire safety, team organization, and disaster medical operations." imageURL="https://www.ryangroup.org/ria/public/uploads/2022/1656995015-62c3bcc713876.jpg"/>
            <HealthSubcomp heading="FIRE SAFETY MEASURES" text="The safety of our young learners is our main focus. Our school takes all the necessary precautions in order to prevent anything untoward from happening in the case of an emergency, like a fire. We have the following measures in place:" imageURL="https://www.Amanoraschool.edu.in/public/uploads/2023/1690379317-64c12435f0941.jpg"/>
            <HealthSubcompInvert heading="CYBERSAFETY" text="Cybersafety is the safe and responsible use of information and communication technologies, such as the internet, social media, online games, smartphones, tablets, and other connected devices. Our Cybersafety protocols provide students with the knowledge and skills they need to stay safe in online environments." imageURL="https://www.ryangroup.org/ria/public/uploads/2022/1656995149-62c3bd4d29ad4.jpg"/>
            
        </div>


    );
}

export default Health;
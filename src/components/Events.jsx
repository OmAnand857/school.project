import React from "react";
import "../styles/Events.css";


function Events(){
    return (
        <div className="Events__Section">
            <h1>EVENTS</h1>
            <p>Events and happening at our School</p>
            <div className="Card__Collection">
                <div className="Events__Card">
                  <img src="https://www.amanoraschool.edu.in/public/uploads/2023/1699272270-6548d64e0424c.jpg" alt=""></img>
                <strong>Grade 6 B Assembly World Ozone Day</strong>
                <small>2023</small>
            </div>
            <div className="Events__Card">
                  <img src="https://www.amanoraschool.edu.in/public/uploads/2023/1699272306-6548d672a778e.jpg" alt=""></img>
                  <strong>Life Cycle of a Tree</strong>
                <small>2023</small>
            </div>
            <div className="Events__Card">
                  <img src="https://www.amanoraschool.edu.in/public/uploads/2023/1699272361-6548d6a99a6d0.jpg" alt=""></img>
                  <strong>MeraZ Annual Fest</strong>
                <small>2023</small>
            </div>
            </div>
            
        </div>
    );
};

export default Events;
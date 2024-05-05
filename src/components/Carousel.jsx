import React , {useState , useEffect } from "react";
import "../styles/Carousel.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';




function Carousel(){

//Carousel concept implementation

    const [ track , setTrack ] = useState( [1,0,0,0] );
      // console.log("function ke bahar wala",track);

   

    function handleClickRight(){
        const nextTrack = [...track ];
                   for( var i=0;i<nextTrack.length;i++){
            if(nextTrack[i]===1&&i<nextTrack.length-1){
                nextTrack[i]=0;nextTrack[i+1]=1;
                setTrack(nextTrack);
                break;
                  
            }
            if(i===nextTrack.length-1){
                nextTrack[i]=0;nextTrack[0]=1;
                setTrack(nextTrack);
                break;
            }
        }
        //console.log("function ke andar wala",track);
        return;
        //return track;

    }

    function handleClickLeft(){
        const nextTrack = [...track ];
        for( var i=0;i<nextTrack.length;i++){
 if(nextTrack[i]===1&&i>0){
     nextTrack[i]=0;nextTrack[i-1]=1;
     setTrack(nextTrack);
     break;
       
 }
 if(i===0&&nextTrack[i]===1){
     nextTrack[i]=0;nextTrack[3]=1;
     setTrack(nextTrack);
     break;
 }
}
return;
    }

    
    useEffect(() => {
        const intervalId = setInterval(() => {
         const nextTrack=[...track];
         for(var i=0;i<nextTrack.length;i++){
            if(nextTrack[i]===1&&i<nextTrack.length-1){
                nextTrack[i]=0;nextTrack[i+1]=1;
                setTrack(nextTrack);
                break;
                  
            }
            if(i===nextTrack.length-1){
                nextTrack[i]=0;nextTrack[0]=1;
                setTrack(nextTrack);
                break;
            }
         }
        }, 4000); // Update every 5 second
    
        return () => clearInterval(intervalId);
      }, [track]);

    useEffect(()=>{
        const imageList = Array.from(document.getElementsByClassName("Carousel__Slide"));
        console.log(imageList);
        console.log(track,'useefeect se track');
        imageList.map((item,index)=>{
            if(track[index]!==1){
                item.style.display="none";
                console.log('chala');
            }
            else{
                item.style.display="block";
            }
            return item;
        })
        },[ track ]) 





    return (
            <div className="Carousel">
                <button onClick= {handleClickLeft}  className="Carousel__ButtonLeft CarouselButton">
                    <ArrowBackIosIcon style={{fontSize:"4em",color:"lightgrey"}}/>
                </button>
                <div className="Carousel__TrackContainer">
                    <ul className="Carousel__Track">
                            <li className="Carousel__Slide"><img src="https://www.amanoraschool.edu.in/public/uploads/2023/1697611305-652f7e29486b7.jpeg" alt=""/>
                                <div className = "Black__Patch">
                                    <h1>Thank You Mummy & Papa</h1>
                                    <h4>For choosing a school that excites me about the mysteries of science </h4>
                                    <button className="Black__PatchButton">Admissions Open AY 2024-25</button>
                                </div>
                            </li>
                            <li className="Carousel__Slide"><img src="https://www.amanoraschool.edu.in/public/uploads/2023/1697611230-652f7dde3f391.jpeg" alt=""/>
                            <div className = "Black__Patch">
                                    <h1>Thank You Mummy & Papa</h1>
                                    <h4>For making me a star </h4>
                                    <button className="Black__PatchButton">Admissions Open AY 2024-25</button>
                                </div>
                            </li>
                            <li className="Carousel__Slide"><img src="https://www.amanoraschool.edu.in/public/uploads/2023/1697611164-652f7d9c997c0.jpeg" alt=""/>
                            <div className = "Black__Patch">
                                    <h1>Thank You Mummy & Papa</h1>
                                    <h4>For choosing a school that hones the fimmaker inside me </h4>
                                    <button className="Black__PatchButton">Admissions Open AY 2024-25</button>
                                </div>
                            </li>
                            <li className="Carousel__Slide"><img src="https://www.amanoraschool.edu.in/public/uploads/2023/1702633652-657c20b49d87b.jpeg" alt=""/>
                            </li>
                    </ul>

                    <div className="Admission__Enquiry">
                            <h1>ADMISSION ENQUIRY FOR THE SESSION 2024-25</h1>
                            <form>
                                <input className="formInput" type="text" placeholder="Type your Name"></input>
                                <input className="formInput" type="text" placeholder="Enter Father Email"></input>

                                <div className="InputGroup"><input className="formInput" type="tel" placeholder="Enter Class"></input>
                                <input className="formInput" type="text" placeholder="Enter PIN"></input>
                                </div>
                                
                                <input className="formInput" type="text" placeholder="How Did you hear about us"></input>
                                
                            </form>
                            <button className="SubmitButton" type="submit">SUBMIT</button>
                    </div>
                </div>
                <button onClick= {handleClickRight} className="Carousel__ButtonRight CarouselButton">
                    <ArrowForwardIosIcon style={{fontSize:"4em",color:'lightgrey'}}/>
                </button>
            </div>
    );

    }

export default Carousel;
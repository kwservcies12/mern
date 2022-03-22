import React  from "react";
import "./ToolsPage.css";
import Project1 from './images/redStaple.jpg';
import Project2 from './images/bandsaw.jpg';
import Project3 from './images/DewaltChordeddrill.jpg';
import Project4 from './images/grinder.jpg';


function Project() {
return (
    <div className="project component__space" id="Portfolio">
       <div className="container5">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                        <h5 className="project__text">Stapler 18v</h5>
                        <h4 className="project__text">Milwalki</h4>
                        <a href="/LoginForm" className="project__btn1">
                             Buy/Details
                        </a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Daily Smarty</h5>
                     <h4 className="project__text">Milwalki</h4>
                     <a href="/LoginForm" className="project__btn1" >Buy/Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                        <h5 className="project__text">Electric Drill</h5>
                        <h4 className="project__text">Dewalt</h4>
                        <a href="/LoginForm" className="project__btn1">Buy/Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                        <h5 className="project__text">Electric Grinder 4 1/2"</h5>
                        <h4 className="project__text">Milwalki</h4>
                        <a href="/LoginForm" className="project__btn1">Buy/Details</a>
                     </div>
                 </div>
             </div>
           </div>
       </div>
    </div>
  );
}

export default Project;
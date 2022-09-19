import React from "react";
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import './Megamenus.scss'
import { PopularCourse,Courses } from "../data";
import {IoIosArrowDroprightCircle} from 'react-icons/io' 

const Course = () =>{
return(
    <div className="nav-megamenu course-megamenu" >
        <div className="menu-links">
            <h5><FormattedMessage id = 'Cat' defaultMessage = 'Categories' /></h5>
            <div className="inner-links">
                {Courses.map((props) => {
                    return(
                        <Link  to={props.to} className='menu-main-link'>
                           
                                <div className="icon-container">
                                    <div className="icon" style={{content: `url(${props.icon})`}}></div>
                                    <div className="bg " style={{border: `${props.bg}`}}></div>
                                    
                                    
                                </div>
                                
                                <div className="block">
                                    <h4>{props.title}</h4>
                                    <p>{props.text}</p>
                                   </div>
                                    
      
                                   
                        </Link> 
                         
               
                    )
                   
                
                
                    })}
                    
                    
            </div>
            <div className="Categorie">
                   <h4><FormattedMessage id='course' defaultMessage='View all Catregories'/><IoIosArrowDroprightCircle/></h4>
                 </div>

        </div> 
        <div className="right"> 
       <h5><FormattedMessage id="Popular" defaultMessage="Popular Courses"/></h5>
        <h5 className="View"><FormattedMessage id="View" defaultMessage="View All"/> </h5>
        
        <div className="SVG"></div>
        </div>

       
        {/*<div className="inside-link">
          
            {PopularCourse.map ((props) => {
                return(
                    <Link to={props.to} className ="main-link">
                        <div className="Geners-Course">
                            < div className="SVG" ></div>  
                        </div>
                        <div className="Block">
                            <h7>{props.title}</h7>
                            <h4>{props.text}</h4>
                        </div>
                    </Link>

                )

                })}
        
        </div>
            </div> */}
       

     





    </div>
)

     

}




export default Course
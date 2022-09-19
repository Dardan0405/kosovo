import React from 'react'
import './Megamenus.scss'
import { Link } from 'react-router-dom'
import { Resource } from "../data";

const Resources = () =>{
    return(
        <div className='nav-megamenus Resources-megamenu'>
            <div className='inner-link'>
                {Resource.map((props) => {
                    return(
                        <Link to={props.to} className='menu-main-links '>
                          <div className='bgr' style={{background: `${props.bg}`}}></div>
                          <div className='mains'>
                            <div className='icon-contnierr'>
                                <div className='iconn'>{props.icon}</div>
                            </div>
                            <div className='borderr' style={{borderColor:`${props.border}`}}></div>
                            <div className='bllock'>
                                <h5>{props.title}</h5>
                            </div>
                            </div>
                        </Link>
 
                    )
                })}
            </div>
        </div>
    )
}
export default Resources
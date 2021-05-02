import React from 'react';
import dev from '../../Images/undraw_Web_developer_re_h7ie.svg'
import { FaGithub,FaLinkedin } from 'react-icons/fa';
import './info.css'
const Info = () => {
    return (
       <section id="about" className='info'>
           <div className='container'>
           <div className='row mt-3'>
               <div className='col-md-7'>
                   <img src={dev} className="dev-icon" alt=""/>
               </div>
               <div className='col-md-5'>
             <h2 style={{color:'#2A2A2A'}}>Rokonuzzaman Robin</h2>
             <h4 className='mt-3'>I'm a Passionate <span style={{color:'#E54B4B'}}>Web Developer</span></h4>
                   <br/>
                   <p className='text-secondary'>A passionate web developer with versatile skills and experience. Developer with over six plus of full MERN
                                Stack project. To achieve an objective fully prepared to show my honesty, hard work, patience, and
                                sufficient confidence. Looking for opportunities to make the best use of my skills and create great things.</p>
                   <a style={{color:'black'}} className='m-2' href="https://github.com/ZmnRobin"><FaGithub size={30}/></a><a style={{color:'black'}} className='m-1' href="https://www.linkedin.com/in/rokonuzzaman-robin-2a9721186/"><FaLinkedin size={30}/></a>   
                   <br/>
                  <a href="#projects"><button className='btn btn-danger mt-3'>View Portfolio</button></a> 
               </div>
           </div>
           </div>
       </section>
    );
};

export default Info;
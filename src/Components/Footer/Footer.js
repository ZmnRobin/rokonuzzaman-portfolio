import React from 'react';
import './footer.css'
import { FaGithub,FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div id='contact' style={{backgroundColor:'#2f2f30'}}>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <div className='footer text-white'>
                        <h3 className='p-2'>ROKONUZZAMAN</h3>
                         <a style={{color:'white'}} className='m-3' href="https://github.com/ZmnRobin"><FaGithub size={30}/></a><a style={{color:'white'}} className='m-3' href="https://www.linkedin.com/in/rokonuzzaman-robin-2a9721186/"><FaLinkedin size={30}/></a>
                        <p className='p-2'>Copyright © 2021 by Rokonuzzaman || All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import img from '../../Images/circle-cropped.png'
import './Header.css'
import { FaDownload } from 'react-icons/fa';
import Typical from 'react-typical'
import Aos from "aos"

const Header = () => {

    useEffect(() => {
        Aos.init({duration:5000});
    }, [])
    
    return (
        <section className="header">
            <div>
                <Navbar/>
                <div className='container'>
                    <div className='row mt-5 mb-5'>
                        <div className='col-md-7 mt-5 left-colum'>
                         <h5 className='text-white mt-4'>Looking for a Developer..!</h5>
                         <h1 className='text-white mt-5'>I'm <span style={{color:'#dff1c6'}}><Typical
                                steps={
                                    ['Rokonuzzaman Robin',2000,
                                    'Web Developer',2000,
                                    'Programmer',2000,
                                    ]}
                                loop={Infinity}
                                wrapper="p"
                            /></span></h1>
                         <p className='text-white'>I'm a passionate MERN Stack Developer.Developer with versatile skill and experience.Experienced with all stages of MERN Stack development cycle for dynamic web projects.</p>
                            <a href="https://drive.google.com/uc?export=download&id=1BiQNO9chXczyP5Sk7QWl3jfEcDwjceNp"  target="_blank"><button className='btn btn-danger mt-4'>Download CV <FaDownload/></button></a> 
                         </div>
                         <div className='col-md-5 mb-5'>
                            <img data-aos="zoom-in-left" className='mt-5 ml-5 img' src={img} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
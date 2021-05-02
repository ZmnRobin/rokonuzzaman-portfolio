import React, { useEffect } from 'react';
import './Hobbies.css'
import desktop from '../../Images/desktop.png'
import music from '../../Images/music.png'
import movie from '../../Images/clapperboard.png'
import game from '../../Images/console.png'
import program from '../../Images/web-programming.png'
import sports from '../../Images/running.png'
import design from '../../Images/sketch.png'
import coffee from '../../Images/coffee-cup.png'
import robot from '../../Images/robot.png'
import phone from '../../Images/smartphone.png'
import travel from '../../Images/traveler.png'
import linux from '../../Images/linux.png'
import Aos from "aos"

const Hobbies = () => {

    useEffect(() => {
        Aos.init({duration:1500});
    }, [])

    const hobbies=[
        {name:'Developing',icon:desktop},
        {name:'Linux',icon:linux},
        {name:'Robotics',icon:robot},
        {name:'Programming',icon:program},
        {name:'Coffee',icon:coffee},
        {name:'Movie',icon:movie},
        {name:'Music',icon:music},
        {name:'Designing',icon:design},
        {name:'Sports',icon:sports},
        {name:'Android',icon:phone},
        {name:'Traveling',icon:travel},
        {name:'Gaming',icon:game},
    ]
    return (
        <section style={{backgroundColor:'#181818'}}>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                   <h5 className='text-center text-white hobby-text'>Hobbies {'&'} Interests</h5>
                 </div>
                <div className='row hobbby'>
                    {
                        hobbies.map(hobby=>{
                            return(
                                <div data-aos="fade-up" className='col-md-3' >
                                    <div className='d-flex mt-4 hobby'>
                                        <div className='p-2'><img style={{height:'39px'}} src={hobby.icon} alt=""/></div>
                                        <div style={{borderLeft:'1px solid gray'}} className='p-2'>
                                        <h5 className='mt-1'>{hobby.name}</h5>
                                        </div>  
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};
export default Hobbies;
import React, { useEffect } from 'react';
import './Project.css'
import classicMotor from '../../Images/classicMotor.png'
import dailyMart from '../../Images/dailymart.png'
import hungry from '../../Images/hungry.PNG'
import slider from '../../Images/slider.PNG'
import english from '../../Images/english.PNG'
import pick from '../../Images/pick.PNG'
import Aos from 'aos';

const Projects = () => {

    useEffect(() => {
        Aos.init({duration:2000});
    }, [])

    const projects=[
        {
            name:'Classic Motor Repair',
            tittle:'Built a responsive MERN stack web application with a dynamic service section and feedback section.',
            img: classicMotor,
            liveLink: "https://classic-motor.web.app/",
            github: "https://github.com/ZmnRobin/Classic-Motor-Repair-Client",
            usedTech: "React.js, REST API, React Router, Firebase, Node.js,Express.js, MongoDB, Bootstrap, Heroku."
        },
        {
            name:'Daily-Mart E Commerce',
            tittle:'Built a responsive MERN stack e-commerce web application with dynamic admin section and product.',
            img: dailyMart,
            liveLink: "https://daily-mart-38.web.app/",
            github: "https://github.com/ZmnRobin/Daily-Mart-Ecommerce-Client",
            usedTech: "React.js, REST API, React Router, Firebase, Node.js,Express.js, MongoDB, Bootstrap,Heroku."
        },
        {
            name:'Pick-Me React Auth',
            tittle:'Developed an application with ride options for users and showing various type of vehicle.Also applied firebase authentication and email password also',
            img: pick,
            liveLink: "https://react-auth-project-a8235.web.app/",
            github: "https://github.com/ZmnRobin/PIck-Me-React-Firebase-Authentication",
            usedTech: "React.js, React Router, Firebase Authentication,Googel Map,Bootstrap,"
        },
        {
            name:'English Premier League',
            tittle:'In this application u find all the club in english premier league and when u click one of them u find their detail info.',
            img: english,
            liveLink: "https://englishpremierleague.netlify.app/",
            github: "https://github.com/ZmnRobin/English-Premier-React-Router",
            usedTech: "React.js, REST API, React Router, Bootstrap, Netlify"
        },
        {
            name:'Fancy Slider',
            tittle:'Its a slider making application where you can search for your favorite image and select them and make a fancy slider.',
            img: slider,
            liveLink: "https://zmnrobin.github.io/Fancy-Slider/",
            github: "https://github.com/ZmnRobin/Fancy-Slider",
            usedTech: "HTML,CSS,JavaScript,REST API"
        },
        {
            name:'Hungry Monster',
            tittle:'This is a food searching application where u can search your favorite food by its name or keywords',
            img: hungry,
            liveLink: "https://zmnrobin.github.io/Hungry-Monster-assignment/",
            github: "https://github.com/ZmnRobin/Hungry-Monster-assignment",
            usedTech: "HTML,CSS,JavaScript,REST API"
        },
    ]

    return (
        <section id="projects" style={{backgroundColor:'#2f2f30',marginTop:'-30px'}}>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                   <h5 style={{width:'300px',textAlign:'center', borderBottom:'2px solid #2187e7',padding:'5px',marginTop:'-48px'}} className='text-center text-white'>Projects</h5>
                </div>
                <div className="row">
                    {
                        projects.map(project=>{
                            return(
                                <div className='col-md-4'>
                                    <div data-aos="zoom-out-left" className='project-card'>
                                        <img className='project-img' src={project.img} alt=""/>
                                        <h4>{project.name}</h4>
                                        <p>{project.tittle}</p>
                                        <h5>Technology Used:</h5>
                                        <p>{project.usedTech}</p>
                                        <div className='d-flex justify-content-center'>
                                            <a href={project.liveLink}><button className='btn btn-danger m-2'>Website</button></a>
                                            <a href={project.github}><button className='btn btn-danger m-2'>Github</button></a>
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

export default Projects;
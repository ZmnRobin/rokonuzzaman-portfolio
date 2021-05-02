import Aos from 'aos';
import React, { useEffect } from 'react';
import './Skill.css'

const Skills = () => {

    useEffect(() => {
        Aos.init({duration:1500});
    }, [])
    return (
        <div style={{backgroundColor:'#2f2f30'}}>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                 <h5 className='mt-5 p-1 text-white' style={{width:'300px',textAlign:'center', borderBottom:'2px solid #2187e7'}}>Skills</h5>
                </div>
                <div className='row text-center text-white'>
                    <div className='col-md-4'>
                        <h5>Comfortable</h5>
                        <div data-aos="fade-right" style={{marginTop:'-60px'}} className='row text-start skill'>
                           <li>
                             {/* <p style={{float:'right'}}>90%</p> */}
                              <p>React.js</p> <span className='bar'><span className='react'></span></span>
                           </li>
                          <li>
                            <p>JavaScript</p><span className='bar'><span className='javaScript'></span></span>
                          </li>
                          <li>
                             <p>Rest Api</p><span className='bar'><span className='restApi'></span></span>
                          </li> 
                          <li>
                             <p>MongoDb</p><span className='bar'><span className='mongoDb'></span></span>
                          </li> 
                          <li>
                             <p>HTML</p><span className='bar'><span className='html'></span></span>
                          </li> 
                          <li>
                             <p>CSS</p><span className='bar'><span className='css'></span></span>
                          </li> 
                          <li>
                             <p>Bootstrap</p><span className='bar'><span className='bootstrap'></span></span>
                          </li> 
                          <li>
                             <p>React Bootstrap</p><span className='bar'><span className='react-bootstrap'></span></span>
                          </li> 
                        </div>
                    </div>
                    <div className='col-md-4 '>
                        <h5>Familiar</h5>
                        <div data-aos="fade-up" style={{marginTop:'-60px'}} className='row text-start skill'>
                            <li>
                             <p>Node.js</p><span className='bar'><span className='node'></span></span>
                           </li>
                           <li>
                             <p>Express.js</p><span className='bar'><span className='node'></span></span>
                           </li>
                           <li>
                             <p>SASS</p><span className='bar'><span className='sass'></span></span>
                           </li>
                           <li>
                             <p>Material UI</p><span className='bar'><span className='node'></span></span>
                           </li>
                           <li>
                             <p>JSON</p><span className='bar'><span className='react'></span></span>
                           </li>
                           <li>
                             <p>JAVA</p><span className='bar'><span className='sass'></span></span>
                           </li>
                           <li>
                             <p>OOP</p><span className='bar'><span className='sass'></span></span>
                           </li>
                           <li>
                             <p>C/C++</p><span className='bar'><span className='react'></span></span>
                           </li>
                        </div>
                    </div>
                    <div className='col-md-4 '>
                        <h5>Tools</h5>
                        <div data-aos="fade-left" style={{marginTop:'-60px'}} className='row text-start skill'>
                           <li>
                             <p>VS Code</p><span className='bar'><span className='html'></span></span>
                           </li>
                           <li>
                             <p>Git</p><span className='bar'><span className='react'></span></span>
                           </li>
                           <li>
                             <p>Chrome Dev Tool</p><span className='bar'><span className='react'></span></span>
                           </li>
                           <li>
                             <p>Firebase</p><span className='bar'><span className='react'></span></span>
                           </li>
                           <li>
                             <p>Netlify</p><span className='bar'><span className='react'></span></span>
                           </li>
                           <li>
                             <p>Heroku</p><span className='bar'><span className='react'></span></span>
                           </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Skills;
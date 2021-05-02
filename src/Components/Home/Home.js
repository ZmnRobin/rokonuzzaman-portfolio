import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hobbies from '../Hobbies/Hobbies';
import Info from '../Info/Info';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';


const Home = () => {
    return (
        <div>
           <Header/>
           <Info/>
           <Hobbies/>
           <Skills/>
           <Projects/>
           <ContactForm/>
           <Footer/>
        </div>
    );
};

export default Home;
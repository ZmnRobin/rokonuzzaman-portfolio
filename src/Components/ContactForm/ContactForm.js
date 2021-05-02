import React from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';

const ContactForm = () => {

    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_m0u7ugs', 'template_cry2byb', e.target, 'user_xydGkHaBEK80FXtVtNZ9N')
          .then((result) => {
              if (result) {
                alert('Your message send successfully,Thank you.!')
              }
          }, (error) => {
              console.log(error.text);
          });
         e.target.reset(); 
      }

    return (
        <div className='form-container'>
            <div className='container '>
                <div className='d-flex justify-content-center'>
                    <h5 className='mt-5 p-1 text-white' style={{width:'300px',textAlign:'center', borderBottom:'2px solid #2187e7'}}>Get In Touch</h5>
                </div>
                    <form onSubmit={sendEmail}>
                      <div className='d-flex justify-content-center parent'>
                        <div className='contact-form'>
                         <div class="mb-3">
                            <input type="name" name="name" class="form-control" id="exampleFormControlInput1" placeholder="Your name"/>
                         </div>
                         <div class="mb-3">
                            <input type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>
                         </div>
                         <div class="mb-3">
                            <input type="text" name="subject" class="form-control" id="exampleFormControlInput1" placeholder="Subject"/>
                         </div>
                         <div class="mb-3">
                            <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3" placeholder="Your message..."></textarea>
                         </div>
                         <button type="submit" className='btn btn-danger send-button'>Send Message</button> 
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
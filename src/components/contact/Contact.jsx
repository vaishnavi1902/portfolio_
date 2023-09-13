import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yhi91td', 'template_s7g3akt', form.current, 'PdkMODgZAb256JYJB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact' className='container contact__container'>
      <h5>Send a message</h5>
       <h2>Contact Me!</h2>
      <div className="contact">
          <article className='email'>
              <AiOutlineMail/>
              <h5>Email</h5>
              <h6 className="text-light">kumbhakarna.vaishnavi01@gmail.com</h6>
              <a href="mailto:kumbhakarna.vaishnavi01@gmail.com">Send Mail</a>
          </article>
      
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name="message" placeholder='Message' required></textarea>
        <button className='btn btn-primary' type='submit'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact
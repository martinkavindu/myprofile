import React from 'react';
import './Contact.css';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_sx6a06f', 'template_98m7ktd', form.current, '08mPFcjipVydQw64F')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='contact-form'>
    <div className='w-left'>
        <div className='awesome'>
            <span>Get in touch</span>
            <span>Contact Me</span>
            <div className='blur s-blur1'
            style={{
                background: "#ABF1FF94"
            }}></div>
        </div>
    </div>
    <div className='c-right'>
        <form  ref={form} onSubmit={sendEmail} >
            <input type='text'name ="user_name" className='user' placeholder='Name'/>
            <input type='email' name='user_email'className='user' placeholder='Email'/>
            <textarea name="message" className='user' placeholder='Message'/>
            <input type='submit'value="send" className='button'/>
<div className='blur c-blur1'
style={{background:"var(--purple)"}}>
</div>
        </form>
    </div>

    </div>
  )
}

export default Contact
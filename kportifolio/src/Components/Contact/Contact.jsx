import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  useEffect(() => {
    emailjs.init('YOUR_USER_ID');
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pj9cbxo', 'template_98m7ktd', form.current, '08mPFcjipVydQw64F')
      .then((result) => {
        console.log(result.text);
        setDone(true);
        form.current.reset(); // Reset the form fields
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='contact-form'>
      <div className='w-left'>
        <div className='awesome'>
          <span style={{color:darkMode? 'white':''}}>Get in touch</span>
          <span>Contact Me</span>
          <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
        </div>
      </div>
      <div className='c-right'>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='user_name' className='user' placeholder='Name' required />
          <input type='email' name='user_email' className='user' placeholder='Email' required />
          <textarea name='message' className='user' placeholder='Message' required />
          <input type='submit' value='Send' className='button' />
          <span>{done && 'Thanks for your email'}</span>
          <div className='blur c-blur1' style={{ background: 'var(--purple)' }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

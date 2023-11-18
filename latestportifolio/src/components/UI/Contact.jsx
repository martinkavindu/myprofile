import React, { useRef, useEffect, useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
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
        form.current.reset(); 
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact" className="mt-16 mb-16">
      <div className="container">
        <h2 className="text-white font-[700] text-[2.4rem] mb-9">
          Let's Talk <span className="text-red-600">Business</span>
        </h2>
      
          <div className="md:flex items-center justify-between">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
            title="goggle maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.828617064196!2d39.849088474456394!3d-3.62659364266165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183fdd705dd56ff7%3A0x56126f4bed0c4a55!2sNgao%20Chemist!5e0!3m2!1sen!2ske!4v1699781940348!5m2!1sen!2ske"
           className="w-full border-0 h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
            <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
              <form className="w-full" ref={form} onSubmit={sendEmail}>
             <div className="mb-5">
                    <input 
                    required
                    type="text"
                    name="user_name"
                    placeholder="Enter your name"
                    className="w-full p-3 focus:outline-none rounded-[5px]"/>
                </div>
                <div className="mb-5">
                    <input 
                    required
                    name="user_email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 focus:outline-none rounded-[5px]"/>
                </div>
                <div className="mb-5">
                    <input 
                    required
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full p-3 focus:outline-none rounded-[5px]"/>
                </div>
                <div className="mb-5">
                    <textarea
                    required
                    type="text"
                    name="message"
                    placeholder="write message"
                    rows={3}
                    className="w-full p-3 focus:outline-none rounded-[5px]"/>
                </div>
                {done ? (
          <div className="text-green-500 font-semibold mb-4">
            Message sent successfully! We'll get back to you soon.
          </div> ):(
                <button
                  type="submit"
                  className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white
                  hover:bg-headingColor text-center ease-linear duration-150"
                >
                  Send Message
                </button>
          )}
              </form>
            </div>
          </div>
     
      </div>
    </section>
  );
};

export default Contact;

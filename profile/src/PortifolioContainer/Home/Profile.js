import React from 'react';
import Typical from "react-typical";
import  "./Profile.css"
export default function 
() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>

                   
                    <a href='#'>
                        <i className='fa fa-facebook-square'> </i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-goggle-plus-square'> </i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-instagram'> </i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-youtube-square'> </i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-twitter'> </i>
                    </a>
                    </div>

                </div>
            
            <div className='profile-details-name'>
                <span className='primary-text'>
                    {""}
                    Hello, I'M <span className='highlighted-text'> Martin Mutuku</span>
                </span>
            </div>
            <div className='profile-details-role'>
                <span className='primary-text'>
                    {""}
                    <h1>
                    <Typical
loop={Infinity}
steps={[
    "Ethusiastic Dev😘",1000,
    "Front-end Developer 💻",1000,
    "Cross Platform dev 🌐",1000,
    "reactjs Dev📱",1000,

]}/>
                    </h1>
                    <span className='profile-role-tagline'>
                I am a reactjs &Bootsrap Developer at heart and create features that are best suited for the job at hand.
                </span>
            </span>
            </div>
            <div className='profile-options'>
            <button className='btn primary-btn'>
{""}
Hire Me
{""}
  </button>
            <a href='resume.pdf'download="mutuku.pdf">
                <button className='btn highlighted-btn'> Get resume</button>
            </a>
            </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>

    </div>
  )
}

import React from "react";
import html from "../../assets/images/html.webp";
import css from "../../assets/images/css.webp";
import javascript from "../../assets/images/javascript.webp";
import tailwind from "../../assets/images/tailwind.webp";
import reactimg from "../../assets/images/react.webp";
import mysql from "../../assets/images/mysql.jpeg";
import node from "../../assets/images/node.png";
import github from "../../assets/images/github.png";
import codeigniter from "../../assets/images/codeigniter.png";
import laravel from "../../assets/images/laravel.png"

const Technologies = () => {

    const techs = [
        {
        id:"1",
        src:html,
        title:"HTML",
        style:"shadow-orange-500"
    },
    {
        id:"2",
        src:css,
        title:"CSS",
        style:"shadow-blue-500"
    },
    {
        id:"3",
        src:javascript,
        title:"Javascript",
        style:"shadow-yellow-500"
    },
    {
        id:"4",
        src:reactimg,
        title:"React",
        style:"shadow-blue-600"
    },
    {
        id:"5",
        src:tailwind,
        title:"Tailwind css",
        style:"shadow-sky-400"
    },
    {
        id:"6",
        src:node,
        title:"NodeJs",
        style:"shadow-green-400"
    },
    {
        id:"7",
        src:mysql,
        title:"MySQL",
        style:"shadow-green-600"
    },
    {
        id:"8",
        src:github,
        title:"Github",
        style:"shadow-gray-400"
    },
    {
      id:"9",
      src:codeigniter,
      title:"codeigniter",
      style:"shadow-red-400"
  },
  {
    id:"10",
    src:laravel,
    title:"laravel",
    style:"shadow-orange-400"
},
]
  return (
    <section id="skills">
    <div className="mt-16"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-full text-white"
      >
             <div className="mb-7 sm:mb-0">
            <h3 className="text-white text-[1.8rem] font-bold">
            Skills
            </h3>
    
            <p className="text-white text-[18px]">
            These are the <span className="text-green-600 font-semibold">Technologies</span> i have experience with:
            </p>
          </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3
        gap-8 text-center py-8 px-12 sm:px-0">

            {
                techs.map(({id,src,title,style})=>(
                    <div
                    key ={id} className={`shadow-lg hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt=""  className="w-20 mx-auto" />
                    <p className="mt-4">{title}</p>
                  </div>

                ))
            }
        
        </div>
      </div>
    </div>
    </section>
  );
};

export default Technologies;

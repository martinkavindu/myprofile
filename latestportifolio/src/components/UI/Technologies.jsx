import React from "react";
import html from "../../assets/images/html.webp";
import css from "../../assets/images/css.webp";
import javascript from "../../assets/images/javascript.webp";
import tailwind from "../../assets/images/tailwind.webp";
import reactimg from "../../assets/images/react.webp";
import mongodb from "../../assets/images/mongodb.png";
import node from "../../assets/images/node.png";
import github from "../../assets/images/github.png"

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
        src:mongodb,
        title:"Mongo DB",
        style:"shadow-green-600"
    },
    {
        id:"8",
        src:github,
        title:"Github",
        style:"shadow-gray-400"
    },
]
  return (
    <section id="skills">
    <div className="mt-16"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-full text-black"
      >
        <div>
          <p className="text-4xl font-bold p-2 inline ">
            Technologies
          </p>
          <p className="py-6">These are the Technologies i have experience with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3
        gap-8 text-center py-8 px-12 sm:px-0">

            {
                techs.map(({id,src,title,style})=>(
                    <div
                    key ={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
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

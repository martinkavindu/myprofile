import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import profile from "../../assets/images/kavindu.JPG";
const Profile = () => {

  const[yearsOfExperience,setYearsOfExperience] = useState(3);

  useEffect (()=>{
    const interval = setInterval(()=>{
      setYearsOfExperience(yearsOfExperience +1);
    },365*24*60*60*1000);

    return()=>clearInterval(interval);
  },[yearsOfExperience])
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2">
            <h4
              data-aos="fade-right"
              data-aos-duration="2000"
              className="text-white font-[600] text-[16px]"
            >
              Hello There 👋
            </h4>
            <h1
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-white font-[800] text-[1.8rem] sm:text-[40px] leading-[35px]
                sm:leading-[46px] mt-5"
            >
              I'm Mutuku Kavindu <br />
              <span className="text-red-600">Full Stack Developer</span>
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="/developer cv.pdf" download="mutuku.pdf">
                <button
                  className="bg-primaryColor text-white font-[500] flex items-center gap-2
                    hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
                >
                   Download Resume
                </button>
              </a>
              <a
                href="#portifolio"
                className="text-gray-400 font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See Portifolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-gray-200 font-[500] text-[15px] leading-7 mt-14 sm:pl-14 sm:pr-10"
            >
              I am a Certified full-stack developer proficient in developing
              backends using PHP frameworks like Laravel and CodeIgniter, as
              well as JavaScript with Node.js. Additionally, I am
              well-versed in modern frontend Stacks such as React, Tailwind CSS,HTML,Javascript
              CSS, and Bootstrap. I am always eager to explore emerging
              technologies
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-blue-600 text-[15px] font-[600]">
                Follow:
              </span>
              <span>
                {" "}
                <a
                  href="https://github.com/martinkavindu"
                  className="text-gray-400 text-[16px] font-[600] border border-red-500 p-1 rounded-full"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span>
                {" "}
                <a
                  href="tel:+254741934896"
                  className="text-gray-400 text-[16px] font-[600] border border-red-500 p-1 rounded-full"
                >
                  <i class="ri-phone-fill"></i>
                </a>
              </span>

              {/* <span>
                {" "}
                <a
                  href="https://www.facebook.com/"
                  className="text-gray-400 text-[16px] font-[600] border border-red-500 p-1 rounded-full"
                >
                  <i class="ri-facebook-circle-fill"></i>
                </a>
              </span> */}
              <span>
                {" "}
                <a
                  href="https://twitter.com/intent/follow?screen_name=fallenherro1"
                  className="text-gray-400 text-[16px] font-[600] border border-red-500 p-1 rounded-full"
                >
                  <i className="ri-twitter-x-fill"></i>
                </a>
              </span>

              <span>
                {" "}
                <a
                  href="https://wa.me/254741934896"
                  className="text-gray-400 text-[16px] font-[600] border border-red-500 p-1 rounded-full"
                >
                  <i class="ri-whatsapp-fill"></i>
                </a>
              </span>
            </div>
          </div>

          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center ">
              <img src={profile} alt="" className="rounded-full " />
            </figure>
          </div>

          <div
            className="md:basis-1/5  flex justify-between text-center mt-10  flex-wrap gap-3 md:mt-0
md:flex-col md:justify-end md:text-end"
          >
            <div className="mb-10">
              <h2 className="text-gray-400 font-[700] text-[32px]">
                <CountUp start={0} end={yearsOfExperience} duration={1} suffix="+" />{" "}
              </h2>

              <h4 className="text-white font-[600] text-[18px]">
               
                Years of Experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-gray-400 font-[700] text-[32px]">
                <CountUp start={0} end={98} duration={1} suffix="%" />{" "}
              </h2>

              <h4 className="text-white font-[600] text-[18px]">
                {" "}
                Success role{" "}
              </h4>
            </div>

            <div className="mb-10">
              <h2 className="text-gray-400 font-[700] text-[32px]">
                <CountUp start={0} end={20} duration={1} suffix="+" />{" "}
              </h2>

              <h4 className="text-white font-[600] text-[18px]">
                {" "}
                Projects Done{" "}
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-gray-400 font-[700] text-[32px]">
                <CountUp start={0} end={99} duration={1} suffix="%" />{" "}
              </h2>

              <h4 className="text-white font-[600] text-[18px]">competence</h4>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  
  );
};

export default Profile;

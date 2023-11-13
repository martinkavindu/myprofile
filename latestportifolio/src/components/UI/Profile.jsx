import React from "react";
import CountUp from "react-countup";
import profile from "../../assets/images/kavindu.JPG";
const Profile = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2">
            <h4
              data-aos="fade-right"
              data-aos-duration="2000"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello Welcome 👋
            </h4>
            <h1
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px]
                sm:leading-[46px] mt-5"
            >
              I'm Mutuku Kavindu <br /> Software Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button
                  className="bg-primaryColor text-white font-[500] flex items-center gap-2
                    hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
                >
                  <i class="ri-mail-open-line"></i> Hire Me
                </button>
              </a>
              <a
                href="#portifolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See Portifolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor font-[500] text-[15px] leading-7 mt-14 sm:pl-14 sm:pr-10"
            >
              <span>
                <i class="ri-apps-fill"></i>
              </span>{" "}
              I am a passionate full stack developer majoring in
              Javascript/Nodejs technologies. I can proficiently develop
              backends in Nodejs,Express.js and MongoDb. I am well-versed in
              modern frontend frameworks such as React, Tailwind CSS ,bootstrap
              and i am always eager to explore emaerging technologies.
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow:
              </span>
              <span>
                {" "}
                <a
                  href="#github"
                  className="text-smallTextColor text-[15px] font-[600]"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>

              <span>
                {" "}
                <a
                  href="#facebook"
                  className="text-smallTextColor text-[15px] font-[600]"
                >
                  <i class="ri-facebook-circle-fill"></i>
                </a>
              </span>
              <span>
                {" "}
                <a
                  href="#twitter"
                  className="text-smallTextColor text-[15px] font-[600]"
                >
                  <i class="ri-twitter-x-fill"></i>
                </a>
              </span>
              <span>
                {" "}
                <a
                  href="#whatsapp"
                  className="text-smallTextColor text-[15px] font-[600]"
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
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={3} duration={1} suffix="+" />{" "}
              </h2>

              <h4 className="text-headingColor font-[600] text-[18px]">
                {" "}
                Years of Experience{" "}
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={1} suffix="%" />{" "}
              </h2>

              <h4 className="text-headingColor font-[600] text-[18px]">
                {" "}
                Success role{" "}
              </h4>
            </div>

            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={20} duration={1} suffix="+" />{" "}
              </h2>

              <h4 className="text-headingColor font-[600] text-[18px]">
                {" "}
                Projects Done{" "}
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={99} duration={1} suffix="%" />{" "}
              </h2>

              <h4 className="text-headingColor font-[600] text-[18px]">
                competence
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

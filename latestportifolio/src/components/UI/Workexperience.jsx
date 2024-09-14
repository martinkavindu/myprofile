import React from "react";

const Workexperience = () => {
  return (
    <section id="workexperience">
      <div className="mt-16">
        <div
          className="max-w-screen-lg mx-auto p-4 w-full h-full "
        >
          <div className="mb-7 sm:mb-0">
            <h3 className="text-white text-[1.8rem] font-bold">WORK EXPERIENCE</h3>
          </div>

          <p className="text-white text-[18px]">
            I've Worked with Some  <span className="text-green-600 font-semibold">Amazing </span> Companies:
            </p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3
        gap-8 text-center  ">
            
  <div className="">
    <h2 className="text-gray-600 text-[48px] mt-5">0 1</h2>
    <p className="text-white text-[18px]">
      <span className="text-green-600 font-semibold">Cyfras Technologies</span>, Full Stack Developer
    </p>
    <p className="text-white text-[15px]">
      Currently working as a Full Stack Software Developer. Stack includes React, Laravel, CodeIgniter, and Microsoft Dynamics.
    </p>
  </div>
  <div className="">
    <h2 className="text-gray-600 text-[48px] mt-5">0 2</h2>
    <p className="text-white text-[18px]">
      <span className="text-blue-600 font-semibold">Freelancer</span>, Software Developer
    </p>
    <p className="text-white text-[15px]">
      I work on a variety of projects as a freelancer. Stack includes Laravel, React, Tailwind CSS, and Bootstrap.
    </p>
  </div>
  <div className="">
    <h2 className="text-gray-600 text-[48px] mt-5">0 3</h2>
    <p className="text-white text-[18px]">
      <span className="text-orange-600 font-semibold">Dapa Company</span>, IT Officer
    </p>
    <p className="text-white text-[15px]">
      I work on a variety of projects as a freelancer. Stack includes HTML, CSS, and JavaScript.
    </p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Workexperience;

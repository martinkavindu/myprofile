import React from "react";
import frontend from "../../assets/images/frontend.png";
import backend from "../../assets/images/backend.jpeg";
import database from "../../assets/images/database.jpeg";
import project from "../../assets/images/project.png";
const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-7">
        <div className="text-center">
          <h2 className="text-white font-[800] text-[2.4rem] mb-5">
            My awesome <span className="text-red-600">Services</span>
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-gray-400 font-[500] text-[16px] leading-7">
            Developing and mantaining web applications using PHP frameworks and Javascript 
            and other related modern techonologies. . Implementing responsive
            design and ensuring cross-browser compatibility
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full  py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className=" flex items-center  flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in  duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
group-hover:font-[600] text-xl"
                        >
                          Frontend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          A experienced developer adopt at bringing forth
                          expertise in design,finctionality and maintenance of
                          scalable and responsive web applicationsn and
                          techonologies with latest dev tools
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 
    absolute left-1/2 transform -translate-x-1/2
    -translate-y-4 sm:translate-y-4 flex items-center justify-center"
                  >
                    <figure>
                      <img src={frontend} alt="" className="rounded-full" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className=" flex items-center  flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in  duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
group-hover:font-[600] text-xl"
                        >
                          Database design
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          I have a strong understanding of the database design
                          process and I can build any database from scratch. I
                          have experience with MongoDB and MySQL.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 
    absolute left-1/2 transform -translate-x-1/2
    -translate-y-4 sm:translate-y-4 flex items-center justify-center"
                  >
                    <figure>
                      <img src={database} alt="" className="rounded-full" />
                    </figure>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className=" flex items-center  flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in  duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
group-hover:font-[600] text-xl"
                        >
                          Project Management
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Management of IT projects that is required for the
                          successful implementation of the projects. Good team
                          work to ensure successful operationalization of IT
                          projects
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 
    absolute left-1/2 transform -translate-x-1/2
    -translate-y-4 sm:translate-y-4 flex items-center justify-center"
                  >
                    <figure>
                      <img src={project} alt="" className="rounded-full" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className=" flex items-center  flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in  duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
group-hover:font-[600] text-xl"
                        >
                          Backend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          I possess a solid grasp of backend development
                          processes and can construct websites from the scratch.
                          I have hands-on experience with  Laravel ,Codeigniter and Node.JS
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 
    absolute left-1/2 transform -translate-x-1/2
    -translate-y-4 sm:translate-y-4 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backend} alt="" className="rounded-full"/>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

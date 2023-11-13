import React from "react";
import { useEffect, useState } from "react";
import data from "../../assets/data/portifolioData";
import Mode from "./Mode";
const Portifolio = () => {

    const [nextItems, setNextItems] = useState(6)
    const[portifolios,setPortifolios] = useState(data)
    const[selectTab, setSelectTab] = useState('all');
  const [showMode, setShowMode] = useState(false)
  const[activeId, setActiveId] = useState(null)


    const loadMoreHandler = ()=>{
        setNextItems(prev => prev +3)

    }
    const showModeHandler = (id) => {
        setShowMode(true);
        setActiveId(id); 
      };
    useEffect(()=>{
        
        if(selectTab === 'all'){
            setPortifolios(data)
        }
        if(selectTab === 'Full-stack'){
            const filteredData = data.filter(item=>item.category === 'Full-stack')
            setPortifolios(filteredData)
        }
        if(selectTab === 'Frontend'){
            const filteredData = data.filter(item=>item.category === 'Frontend')
            setPortifolios(filteredData)
        }

    },[selectTab])

  return (
    <section id="portifolio">
      <div className="container">
        <div className=" flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[1rem] font-[400]">
              MY WORK
            </h3>
            <h1 className="text-green-600 text-[2rem] font-bold ">
              Recent Projects
            </h1>
            <p className="text-primaryColor text-[15px]">
              Here are some projects I've worked on.
            </p>
          </div>

          <div className=" flex gap-3">
            <button onClick={()=> setSelectTab('all')} className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
              All
            </button>
            <button onClick={()=> setSelectTab('Full-stack')}
             className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
              Full-stack
            </button>
            <button onClick={()=> setSelectTab('Frontend')}
            className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
              Frontend
            </button>
          </div>
        </div>

        <div className=" flex items-center  gap-4 flex-wrap mt-12  rounded-[8px] ">
          {portifolios?.slice(0, nextItems)?.map((Portifolio, index) => (

            <div 
            key={index}
            data-aos="fade-zoom-in"
            data-aos-delay ="50"
            data-aos-duration="1000"
            className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
              <figure>
                <img src={Portifolio.imgUrl} alt="" className={`rounded-[5px] w-[3000] h-[2000] shadow hover:scale-105 duration-500 py-2 ${Portifolio.style}`} />
              </figure>
              <div
                className="w-full h-full 
                bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5]
                hidden group-hover:block"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <button
                  onClick={()=>showModeHandler(Portifolio.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-300
"
                  >
                    {" "}
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
{
    nextItems <portifolios.length && data.length> 6 &&(
        <button onClick={loadMoreHandler}
        className="text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-300
"
      >
        Load More
      </button> 
    )
}
        </div>
      </div>
      {
        showMode && <Mode  setShadowModal={setShowMode} activeID={activeId}/>
      }
    </section>
  );
};

export default Portifolio;

import React from 'react';
import portfolios from '../../assets/data/portifolioData';

const Mode = ({ activeID, setShadowModal }) => {
  const portifolio = portfolios.find((portifolio) => portifolio.id === activeID);

  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
      <div className="w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div>
          <figure>
            <img src={portifolio.imgUrl} alt=""  className='rounded-[8px]'/>
          </figure>
          <div>
            <h2 className='text-2xl text-headingColor font-[700] my-5'> {portifolio.title}</h2>
            <p className='text-[15px] leading-7 text-smallTextColor'>
                {portifolio.description}
            </p>

            <div className='mt-5 flex items-center gap-3 flex-wrap'>
                <h4 className='text-headingColor text-[18px] text-[700]'>
                    Technologies:
                </h4>
                {
                    portifolio.technologies.map((item,index)=>(
                        <span key={index}
                        className='bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0'>
                            {item}
                        </span>
                    ))
                }
            </div>

            <a href={portifolio.siteUrl}>
                <button className='bg-primaryColor text-white py-2 px-4 my-8 mx-8 rounded-[8px] font-[500]
                hover:bg-headingColor ease-in duration-300'>
                    Site
                </button>
            </a>
            <a href={portifolio.siteUrl}>
                <button className='bg-green-600 text-white py-2 px-4 my-8 rounded-[8px] font-[500]
                hover:bg-primaryColor ease-in duration-300'>
                    Code
                </button>
            </a>
          </div>

<button 
onClick={()=>setShadowModal(false)}
className='w-[1.8rem] h-[1.8rem]  bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px]
flex items-center justify-center rounded-[3px] leading-0 cursor-pointer'>
    &times;

</button>
        </div>
      </div>
    </div>
  );
};

export default Mode;

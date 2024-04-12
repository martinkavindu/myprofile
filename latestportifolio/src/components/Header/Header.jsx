import React from "react";
import {  useRef } from "react";
const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute ("href");
    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };
  const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu')
  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between  sticky">
        <div className="flex items-center gap-[10px] ml-0">
  <span
    className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500]
    rounded-full flex items-center justify-center"
  >
    MK
  </span>

  <div className="leading-[20px]">
    <h2 className="text-xl text-gray-300 font-[700]">Mutuku</h2>
    <p className="text-gray-400 text-[16px]">Kavindu</p>
  </div>
</div>

          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className="text-gray-400 font-[600] hover:text-orange-600"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-gray-400 font-[600] hover:text-orange-600"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-gray-400 font-[600] hover:text-orange-600"
                  href="#portifolio"
                >
                  Portifolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-gray-400 font-[600] hover:text-orange-600"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-gray-400 font-[600] hover:text-orange-600"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className=" flex items-center gap-4">
            <a href="#contact">
            <button
              className="flex items-center gap-2 text-blue-600 font-[609] border border-solid
    border-gray py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor
    hover:text-white hover:font-[500] ease-in duration-300"
            >
              <i class="ri-mail-send-fill"></i> Get in touch
            </button>
            </a>
            
            <span onClick={toggleMenu}
            className="text-xl text-gray-300 md:hidden cursor-pointer">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

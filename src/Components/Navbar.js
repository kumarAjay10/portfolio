import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { LOGO_URL } from "../Utilis/link";
import {Link} from "react-scroll";
import { IoMdHome } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";




const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] bg-opacity-10 text-gray-300">
      <div>
        <img
          src={LOGO_URL}
          alt="logo-img"
          style={{ width: "50px" }}
          className="img"
        />
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li><Link className="flex items-center" to="home" smooth={true} duration={500}><IoMdHome className="mx-1" />Home</Link></li>
        <li><Link className="flex items-center" to="about" smooth={true} duration={500}><IoPersonOutline className="mx-1" />About</Link></li>
        <li><Link className="flex items-center" to="skills" smooth={true} duration={500}><GiSkills className="mx-1" />Skills</Link></li>
        <li><Link className="flex items-center" to="project" smooth={true} duration={500}><AiOutlineFundProjectionScreen className="mx-1" />Projects</Link></li>
        <li><Link className="flex items-center" to="contact" smooth={true} duration={500}><IoMdContact className="mx-1"/>Contact Us</Link></li>
      </ul>

      {/* hamberg */}
      <div onClick={handleClick} className="md:hidden z-10">
       {!nav ? <FaBars /> : <FaXmark /> }
      </div>
      {/* mobile view */}
      <div
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <ul>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="project" smooth={true} duration={500}>Projects</Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick}   to="contact" smooth={true} duration={500}>Contact Us</Link></li>
        </ul>
      </div>
      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
            <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                <a className="flex justify-between items-center w-[full] text-gray-300" href="https://www.linkedin.com/in/ajay-kumar-319a0028b/" target="_blank" >
                   Linkedin <FaLinkedin className="size-8 ml-7"/>
                </a>
            </li>
            <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                <a className="flex justify-between items-center w-[full] text-gray-300" href="https://github.com/kumarAjay10" target="_blank" >
                   Github <FaSquareGithub className="size-8 ml-[37px]"/>
                </a>
            </li>
            <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                <a className="flex justify-between items-center w-[full] text-gray-300" href="ajaykumar11141997@gmail.com" target="_blank" >
                   Email <MdEmail className="size-8 ml-[46px]"/>
                </a>
            </li>
            <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                <a className="flex justify-between items-center w-[full] text-gray-300" href="/" >
                   Resume <FaUser className="size-8 ml-7"/>
                </a>
            </li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;



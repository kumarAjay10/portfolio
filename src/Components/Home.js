

import { FaArrowRight } from "react-icons/fa6";
import {Link} from "react-scroll";


const Home = ()=>{

    return(
        <div name='home' className="w-full h-screen flex items-center justify-between">
          <div className="max-w-[1000px] mx-auto  px-8 flex flex-col justify-center h-full">
       <p className="text-gray-600 text-3xl font-medium ">Hi There!  👋🏻 </p>
       <h1 className="text-4xl sm:text-5xl font-bold text-[#ccdef6] font-serif mt-4">I'M Ajay Kumar</h1>
    
          </div>
          <div className="w-[500px] mr-36 mt-8">
            <img src="https://raw.githubusercontent.com/soumyajit4419/Portfolio/24d955cf6cd4ce5ff8a9a8071f0c87dfa4aaacec/src/Assets/home-main.svg"/>
          </div>
        </div>
    )
}

export default Home;
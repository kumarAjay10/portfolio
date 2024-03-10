


const Projects = ()=>{
    return(
        <div name='project' className="w-full md:h-screen text-gray-300 ">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Projects</p>
                    <p className="py-6">Check out my some recent project</p>
                </div>
                <div  
                className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div style={{backgroundImage:`url("https://etimg.etb2bimg.com/photo/84847436.cms")`}}
                     className="shadow-lg shadow-[] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div>
                           <span className="text-2xl font-bold text-gray-700 tracking-wider">
                           FOod Delivery App
                           </span>
                            <div className="pt-8 text-center">
                                <a href="" target="_blank" >
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="" target="_blank">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                               
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url("https://nordicapis.com/wp-content/uploads/How-to-Build-an-API-Driven-Weather-App.png")`}}
                    className="shadow-lg shadow-[] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div>
                           <span className="text-2xl font-bold text-gray-700 tracking-wider">
                           Weather App
                           </span>
                            <div className="pt-8 text-center">
                                <a href="https://kumarajay10.github.io/weather-app/" target="_blank" >
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/kumarAjay10/weather-app" target="_blank" >
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                               
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url("https://cdn.dnaindia.com/sites/default/files/2023/04/19/2585701-blinkit.png?im=FitAndFill=(1200,900)")`}}
                    className="shadow-lg shadow-[] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div>
                           <span className="text-2xl font-bold text-gray-700 tracking-wider">
                           Blinkit Clone
                           </span>
                            <div className="pt-8 text-center">
                                <a href="https://kumarajay10.github.io/blinkit-clone/" target="_blank" >
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/kumarAjay10/blinkit-clone" target="_blank" >
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Projects;
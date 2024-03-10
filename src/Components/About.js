

const About = () => {
    return (
      <div name="about" className="w-full h-screen text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full ">
          <div className="m-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="m-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right font-bold text-4xl font-serif">
              <p>Hi. I'm Ajay Kumar,Please take a look around..</p>
            </div>
            <div>
              <p className="text-xl">I have done B.tech in 
Electronics & Communication Engineering (ECE) from JSSATE Institute of Technology Bangalore. I am currently Learning front-end web development. and learning new technologies. I love the feeling of finally getting that red squibbly line out of the way. I am always looking to learn new technologies. I am currently looking for a full-time position as a software developer.
</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;

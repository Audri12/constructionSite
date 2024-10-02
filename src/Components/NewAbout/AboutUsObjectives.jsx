import { MdOutlineSettings } from "react-icons/md";

const AboutUsObjectives= () => {
  return (
    <div>
      <div className="container mx-auto px-[5%] pb-[80px] bg-gray-100 pt-16">
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 p-4">
          {/* Card 1 - Skilled Workers with hover effect and background SVG */}

          <div className="group relative">
            <div className="relative flex flex-cols-3   bg-white  group-hover:bg-[#41815c] p-[30px] border border-gray-100 shadow-sm">
              <div className="group-hover:stroke-white col-span-1   h-44">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8  text-[#41815c] group-hover:text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>
              </div>
              <div className="col-span-2 ml-3 z-10">
                <h2 className="text-2xl font-rajdhani font-bold text-[#41815c] mb-[15px] group-hover:text-white transition-all duration-300">
                Mission
                </h2>
                <p className="text-gray-600 text-base font-normal group-hover:text-white transition-all duration-300">
                In order to fulfill our mission to deliver high-quality, reliable services, we strive to stay on top of current industry trends and practices.
</p>
              </div>
            </div>

            {/* Hide on hover */}
            <div
              className="absolute top-14 right-16 text-[#41815c] opacity-20 z-0 animate-ping text-7xl group-hover:hidden"
              style={{
                animationDuration: "3s",
                animationTimingFunction: "ease-in-out",
              }}
            >
              <MdOutlineSettings />
            </div>

            {/* Hidden by default and only visible on hover */}
            <div
              className="absolute top-14 right-16 text-[#41815c] z-0 hidden group-hover:block group-hover:animate-spin text-7xl"
              style={{
                animationDuration: "3s",
                animationTimingFunction: "ease-in-out",
              }}
            >
              <MdOutlineSettings />
            </div>
          </div>
          {/* Card 2 - Modern Buildings with no hover effect and background SVG */}
          <div className="relative">
            <div
              className="relative flex flex-cols-3 bg-[#41815c] p-[30px] border border-gray-100 shadow-sm">
             
              <div className="relative col-span-1  h-44">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8  text-white group-hover:text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
              </div>
              <div className="relative col-span-2 ml-3 z-10">
                <h2 className="text-2xl font-rajdhani font-bold text-white mb-[15px]">
                Vision
                </h2>
                <p className="text-white text-base font-normal">
                In order to fulfill our mission to deliver high-quality, reliable services, we strive to stay on top of current industry trends and practices.
                </p>
              </div>
            </div>
            <div
              className="absolute top-14 right-16 text-[#41815c] z-0 animate-spin text-7xl"
              style={{
                animationDuration: "3s", // Set your desired duration here
                animationTimingFunction: "ease-in-out", // Optional: Change the timing function
              }}
            >
              <MdOutlineSettings />
            </div>
          </div>

          {/* Card 3 - Quality Service with hover effect and background SVG */}
          <div className="group relative">
            <div className="relative flex flex-cols-3   bg-white  group-hover:bg-[#41815c] p-[30px] border border-gray-100 shadow-sm">
              <div className="group-hover:stroke-white col-span-1  h-44">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8  text-[#41815c] group-hover:text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
              </div>
              <div className="col-span-2 ml-3 z-10">
                <h2 className="text-2xl font-rajdhani font-bold text-[#41815c] mb-[15px] group-hover:text-white transition-all duration-300">
                Objectives
                </h2>
                <p className="text-gray-600 text-base font-normal group-hover:text-white transition-all duration-300">
                The primary objectives of Farees Construction Limited were drawn up encompassing the development of rural industry.
                </p>
              </div>
            </div>

            {/* Hide on hover */}
            <div
              className="absolute top-14 right-16 text-[#41815c] opacity-20 z-0 animate-ping text-7xl group-hover:hidden"
              style={{
                animationDuration: "3s",
                animationTimingFunction: "ease-in-out",
              }}
            >
              <MdOutlineSettings />
            </div>

            {/* Hidden by default and only visible on hover */}
            <div
              className="absolute top-14 right-16 text-[#41815c] z-0 hidden group-hover:block group-hover:animate-spin text-7xl"
              style={{
                animationDuration: "3s",
                animationTimingFunction: "ease-in-out",
              }}
            >
              <MdOutlineSettings />
            </div>
          </div>


         


          
        </div>


        
      </div>
    </div>
  )
}

export default AboutUsObjectives


import { MdOutlineSettings } from "react-icons/md";

const WhatWEBuild = () => {
  return (
    <div>
      <div className="container mx-auto px-[5%] pb-[80px] bg-gray-100 pt-16">
        <h1 className="font-bold text-5xl font-rajdhani text-[#41815c] pb-6">What We Build</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 p-4">
          {/* Card 1 - Skilled Workers with hover effect and background SVG */}

          <div className="group relative">
            <div className="relative flex flex-cols-3   bg-white  group-hover:bg-[#41815c] p-[30px] border border-gray-100 shadow-sm">
              <div className="group-hover:stroke-white col-span-1   h-44">
               <img src="https://media.istockphoto.com/id/1269785368/vector/road-construction-logo-road-maintenance-creative-sign-concept-paving-design-template-vector.jpg?s=612x612&w=0&k=20&c=nsHUDbyjIO1rFRpkgsug51nz-39zPx470CF6vIlcsg8=" className="h-14 w-32 "></img>
              </div>
              <div className="col-span-2 ml-3 z-10">
                <h2 className="text-2xl font-rajdhani font-bold text-[#41815c] mb-[15px] group-hover:text-white transition-all duration-300">
                Highway Expansion
                </h2>
                <p className="text-gray-600 text-base font-normal group-hover:text-white transition-all duration-300">
                Expansion of the main highway with two additional lanes to improve traffic flow and include updated signals and sound barriers.
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
                <img src="https://cdn.vectorstock.com/i/500p/35/81/bridge-construction-transportation-partnership-vector-47213581.jpg"className="w-32 h-14"></img>
              </div>
              <div className="relative col-span-2 ml-3 z-10">
                <h2 className="text-2xl font-rajdhani font-bold text-white mb-[15px]">
                Bridge Construction
                </h2>
                <p className="text-white text-base font-normal">
                Completion of a 500-meter suspension bridge, enhancing connectivity over the river and providing a crucial link for the local transportation network.
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
               <img src="https://png.pngtree.com/template/20191014/ourmid/pngtree-building-and-construction-logo-design-template-image_317780.jpg"className="w-32 h-14"></img>
              </div>
              <div className="col-span-2 ml-3 z-10">
                <h2 className="text-2xl font-rajdhani font-bold text-[#41815c] mb-[15px] group-hover:text-white transition-all duration-300">
                  Quality Service
                </h2>
                <p className="text-gray-600 text-base font-normal group-hover:text-white transition-all duration-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero natus voluptatibus ea repudiandae vero?
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

{/* card-4 */}
          <div className="group relative">
            <div className="relative flex flex-cols-3   bg-white  group-hover:bg-[#41815c] p-[30px] border border-gray-100 shadow-sm">
              <div className="group-hover:stroke-white col-span-1  h-44">
               <img src="https://media.istockphoto.com/id/1330212296/vector/way-logo-vector-icon-design-illustration.jpg?s=612x612&w=0&k=20&c=aLz-15PCLMUYpKBHqEmXLSlQR81OIOpuQmSo4RSWIGs=" className="h-14 w-32 "></img>
              </div>
              <div className="col-span-2 ml-3 z-10">
                <h2 className="text-2xl font-rajdhani font-bold text-[#41815c] mb-[15px] group-hover:text-white transition-all duration-300">
                Road Construction
                </h2>
                <p className="text-gray-600 text-base font-normal group-hover:text-white transition-all duration-300">
                Our construction services are designed to create beautiful, functional, and sustainable homes with a high level of safety and comfort.
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


          {/* card-5 */}
          <div className="group relative">
            <div className="relative flex flex-cols-3   bg-white  group-hover:bg-[#41815c] p-[30px] border border-gray-100 shadow-sm">
              <div className="group-hover:stroke-white col-span-1  h-44">
              <img src="https://t3.ftcdn.net/jpg/02/89/21/22/360_F_289212263_3U2UQ0o6ugFGzrBOj0Swe1U4SK0WdAlW.jpg"className="w-32 h-14"></img>
              </div>
              <div className="col-span-2 ml-3 z-10">
                <h2 className="text-2xl font-rajdhani font-bold text-[#41815c] mb-[15px] group-hover:text-white transition-all duration-300">
                Drainage & Sewerage System Construction
                </h2>
                <p className="text-gray-600 text-base font-normal group-hover:text-white transition-all duration-300">
                Our construction services are designed to create beautiful, functional, and sustainable homes with a high level of safety and comfort.

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

export default WhatWEBuild

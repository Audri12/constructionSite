import React from 'react'
import '../../Components/Hero/HomeBanner.css'

const HomeLayout1 = () => {
  return (
    <div className=' HomeBanner flex  items-start justify-center '>
        {/* <div
        className=" bg-auto  bg-no-repeat py-10 w-screen
         h-full"
        style={{ backgroundImage: "url('https://i.postimg.cc/WbsmRGqL/banner3.png')" }}
      > */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-self-start w-full h-full ">

         <div className='px-[17%] py-52'>
          <h1 className='text-white font-semibold text-lg font-rajdhani underline pb-3.5  '>Farees Construction limited (FCL)</h1>
         <h1 className='font-extrabold text-[55px] text-white pb-6 tracking-wide leading-tight mb-3'>For a <span className='text-[#0ba852]'>Green Future</span> With <br />Trust and Quality </h1>
    <p className='text-white text-xl font-normal font-roboto pb-5 mb-3 ' > Commitment to build on a tradition of trust through dedication, collaboration,<br /> customer satisfaction, and value creation for a green future.

</p>
    
    
  <div>
  <button className='bg-[#0ba852] text-lg font-roboto text-white px-16	py-4 my-6 border-2 border-[#0ba852] hover:bg-[#0ba852] rounded-md mr-5'>Recent Works</button>
  <button className='text-lg font-roboto text-white px-16  border-2 border-white hover:border-[#0ba852] py-4 my-6 hover:bg-[#0ba852] rounded-md'>Managing Director</button>
  </div>
         </div>
      </div>
    
   
</div>
  )
}

export default HomeLayout1
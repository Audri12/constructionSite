import React, { useEffect, useState } from 'react'

const Activities = () => {
    const [cards,setCards]=useState([]);
    

    useEffect(()=>{
        fetch('AreaOfActivites.json')
        .then(res=>res.json())
        .then(data =>{
            setCards(data);
        })
    },[])
  return (
    <div>
        
        <div className='container mx-auto p-5 px-[5%] py-[2%]' >
        <h1 className="font-bold font-rajdhani text-5xl text-[#41815c] pb-12">Recent Activities        </h1>
                <div className="grid gap-8 row-gap-5 mb-8 bg-[#F9F9F9] sm:grid-cols-2 lg:grid-cols-3 sm:mx-auto justify-center ">
                    {cards.map((card) => (
                        <div key={card.id} className="relative group shadow-lg">
                            {/* Group class at the card level */}
                            <div className="relative w-full overflow-hidden rounded shadow-lg">
                                {/* Image */}
                                <img
                                    src={card.image}
                                    className="object-cover w-full h-96 transition-transform duration-500 group-hover:scale-110"
                                    alt={card.name}
                                />

                             
                               
                            </div>

                            <div className="p-6 ">
                                <p className="transition-colors duration-500 font-rajdhani hover:text-[#41815c] font-bold text-[28px] leading-8 pb-3 py-4">
                                    {card.title}
                                </p>
                             
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
<div className=''>
<button className="bg-[#0ba852] text-lg font-roboto text-white rounded p-2 px-4" onClick={()=>document.getElementById('my_modal_1').showModal()}>View Details</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
  <img
     src={card.image}
      className="object-cover w-full transition-transform duration-500 group-hover:scale-110"
      alt={card.name}
                                />
    <h3 className="font-bold text-lg pt-10"> {card.title}</h3>
    <p className="py-4"> {card.description}</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>
</div>
                            
                        </div>
                    ))}
                </div>
            </div>

    </div>
  )
}

export default Activities
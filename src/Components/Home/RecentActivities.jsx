import React, { useEffect, useState } from 'react'

const RecentActivities = () => {
    const [cards,setCards]=useState([]);
    

    useEffect(()=>{
        fetch('Activities.json')
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

                                {/* Date with hover translate effect */}
                                <div className="absolute top-8  bg-[#41815c] h-10 w-28  p-2 rounded-br-full rounded-tr-[3994px] text-white text-sm font-normal transform transition-transform duration-700 group-hover:delay-150  group-hover:-translate-y-4 z-20 group-hover:rounded-br-[3994px] group-hover:rounded-tr-full group-hover:w-[120px]">
                                    {card.date_of_publication}
                                </div>
                            </div>

                            <div className="p-6 ">
                                <p className="transition-colors duration-500 font-rajdhani hover:text-[#41815c] font-bold text-[28px] leading-8 pb-3 py-4">
                                    {card.title}
                                </p>
                                <p className='font-roboto'>{card.description}</p>
                                <a
                                        href="#"
                                        className="text-[#41815c] underline pt-4 "
                                    >
                                        Learn more
                                </a>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>

    </div>
  )
}

export default RecentActivities
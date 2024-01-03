import React from 'react'
import WorkItem from './WorkItems.jsx'

const data =[
        {
          "year": 2022,
          "title": "The Adventure Begins",
          "duration": "2 hours 30 minutes",
          "details": "An epic journey of discovery and self-realization."
        },
        {
          "year": 2019,
          "title": "Mysteries of the Cosmos",
          "duration": "1 hour 45 minutes",
          "details": "Exploring the wonders and enigmas of the universe."
        },
        {
          "year": 2021,
          "title": "Infinite Horizons",
          "duration": "2 hours 10 minutes",
          "details": "A cinematic exploration of boundless possibilities and dreams."
        },
        {
          "year": 2023,
          "title": "Tech Revolution: A Documentary",
          "duration": "1 hour 55 minutes",
          "details": "Unveiling the technological advancements shaping our future."
        },
        {
          "year": 2020,
          "title": "Wildlife Chronicles",
          "duration": "2 hours",
          "details": "A breathtaking journey into the heart of the world's most diverse ecosystems."
        }
      
]

const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {data.map((item, idx)=>
                <WorkItem 
                key={idx}
                year={item.year}
                title={item.title}
                duration={item.duration}
                details={item.details}
                />
            )}
        </div>
    )
}

export default Work

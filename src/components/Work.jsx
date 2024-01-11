import React from 'react'
import WorkItem from './WorkItems.jsx'

const data =[
        {
          "year": 2019,
          "title": "Received my Diploma",
          "duration": "4 years",
          "details": "I successfully completed my college education."
        },
        {
          "year": 2019,
          "title": "Technical Support within the HR division.",
          "duration": "6 Months",
          "details": "I recently graduated and have now secured my first position, specializing in Technical Support"
        },
        {
          "year": 2020,
          "title": "Technical Support within the Finance division.",
          "duration": "6 months",
          "details": "Transfer in the finance division, providing technical support with a primary focus on data consolidation using Python."
        },
        {
          "year": 2020,
          "title": "Technical Support within the ICT division.",
          "duration": "2 years",
          "details": " involves providing assistance, troubleshooting, and solutions for various technical issues related to information and communication systems."
        },
        {
          "year": 2023,
          "title": "System data analyst within the ICT division.",
          "duration": "1 year",
          "details": "Analyzing and managing data to support organizational decision-making and improve system efficiency."
        }
      
]

const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>School and Work Experience</h1>
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

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {FaTwitter,FaFacebook, FaInstagram} from 'react-icons/fa';

const Mains = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-center' src='../assets/background.png' alt='Background'/>
            <div className='w-full h-screen absolute top-0 left-0 bg-white/15'>
                <div className='max-w-[700px] m-auto w-full h-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Robinson Domingo</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I love 
                    <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'innovation',
                        1000, // wait 1s 
                        'collaboration',
                        1000,
                        'problem-solving',
                        1000,
                        'creativity',
                        1000,
                        'continuous improvement',
                        1000
                    ]}
                    wrapper="div"
                    style={{ fontSize: '1em', paddingLeft: '5px' }}
                    repeat={Infinity}
                    cursor={true}
                    />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaTwitter className='cursor-pointer' size={20}/>
                        <FaFacebook className='cursor-pointer' size={20}/>
                        <FaInstagram className='cursor-pointer' size={20}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mains;

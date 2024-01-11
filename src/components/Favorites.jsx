import React from 'react'
import FavoritesItem from './FavoritesItems';
import CookiesImg from '../assets/Cookies.jpg';
import DotaImg from '../assets/Dota2.jpg';
import HxhImg from '../assets/Hxh.jpg';
import PythonImg from '../assets/Python.jpg';


const Favorites = () => {
    return (
        <div id='favorites' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Favorites</h1>
            <p className='text-2xl text-center pt-2 pb-5'>
            "I enjoy savoring cookies as I immerse myself in my favorite anime, 
            Hunter x Hunter. When it comes to my college days, Dota stands out 
            as my favorite game. I'm passionate about creating automated 
            projects and scripting tools, and Python is my go-to language for 
            bringing these ideas to life. Additionally, I delve into frontend 
            web development using React, a framework through which I crafted 
            my portfolio."
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <FavoritesItem img={CookiesImg} title='Favorite Food' NameFavorite='Cookies'/>
                
                <FavoritesItem img={DotaImg} title='Favorite Game' NameFavorite='Dota 2'/>
                
                <FavoritesItem img={HxhImg} title='Favorite Anime' NameFavorite='Hunter X Hunter'/>
                
                <FavoritesItem img={PythonImg} title='Favorite Programming Language' NameFavorite='Python'/>
             
            </div>
        </div>
    )
}

export default Favorites

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
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Porro illum enim ex obcaecati ratione debitis soluta molestias dolores nihil voluptates sunt 
                nulla impedit fugiat provident, commodi dolorem! Similique, itaque nulla.
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

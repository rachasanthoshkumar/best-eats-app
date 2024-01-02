"use client"
import  { React, useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose,AiFillTag } from "react-icons/ai";
import { IoCart } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import {MdFavorite,MdHelp} from 'react-icons/md'
import {FaWallet,FaUserFriends} from 'react-icons/fa'
const Navbar = () => {
    const [nav,setNav] = useState(false)
  return (
    <>
    <div className="container mx-auto w-screen flex justify-between items-center p-2">
      {/* Left section*/}
      <div className="flex items-center justify-between gap-3">
        <div>
        <AiOutlineMenu onClick={()=>setNav(!nav)} size={20} className="cursor-pointer" />
        </div>
        <h1 className="text-2xl sm:text-xl lg:text-2xl">
            Best<span className="font-bold">Eats</span>
        </h1>
      <div className="hidden md:flex md:text-[13px]  items-center justify-between bg-gray-200 rounded-full">
            <p className="bg-black text-white rounded-full px-2 py-1 ">Delivery</p>
            <p className="ml-2 mr-1">Pickup</p>
        </div>
        
      </div>
      {/*middle section*/}
      <div className=" w-[200px] sm:w-[400px] lg:w-[500px] flex items-center justify-start bg-gray-200 rounded-full px-2 py-1 gap-1">
        <div className="">
            <AiOutlineSearch size={20} />
        </div>
        <input className="bg-transparent text-[13px] focus:outline-none" type="text" name="" id="" placeholder="search foods..."/>
      </div>

      {/*Right section*/}
      
      
      <button className="hidden sm:flex gap-1 items-center justify-between rounded-full bg-black text-white px-2 py-1 text-[13px]"><IoCart />Cart</button>
      

      {/*Menu section*/}
      {/*outlay*/}
      
    </div>
    <div className={nav?"bg-black/80 w-full h-screen fixed top-0 left-0 z-10 duration-300":''}>
      </div>
        {/*Menu*/}
      <div className={nav?"bg-white w-[300px] h-screen fixed top-0 left-0 z-10 duration-300":"bg-white w-[300px] h-screen fixed top-0 left-[-100%] z-10 duration-500"}>
        <AiOutlineClose onClick={()=>setNav(!nav)}  className="cursor-pointer absolute top-4 right-4" size={30}/>
        <h2 className="text-2xl p-4">Best<span className="font-bold">Eats</span></h2>
        <nav>
            <ul className="flex flex-col text-gray-800 p-4">
                <li className="flex items-center text-xl py-4"><TbTruckDelivery size={25} className="mr-4"/>Orders</li>
                <li className="flex items-center text-xl py-4"><MdFavorite size={25} className="mr-4"/>Favorites</li>
                <li className="flex items-center text-xl py-4"><FaWallet size={25} className="mr-4"/>Wallet</li>
                <li className="flex items-center text-xl py-4"><MdHelp size={25} className="mr-4"/>Help</li>
                <li className="flex items-center text-xl py-4"><AiFillTag size={25} className="mr-4"/>Promotions</li>
                <li className="flex items-center text-xl py-4"><FaUserFriends size={25} className="mr-4"/>Invite Friends</li>
            </ul>
        </nav>
      </div>
    </>
    
  );
};

export default Navbar;

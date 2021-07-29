import React, { memo } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { RiNotification2Line } from "react-icons/ri";
import { logout } from "../api/auth";


import Button from "./Button/Button";
interface Props{
}
const Navbar: React.FC<Props> = (props) => {

  return (
    <div>
    <div className="flex flex-col w-full">
    <div className=" flex flex-row justify-between bg-gray-900 w-full  h-14">
        <div className="flex flex-row">
            <a href="\"> 
            <img className= " w-9  lg:w-8 py-2  " src="https://designreset.com/cork/ltr/demo4/assets/img/logo.svg" />
            </a>
                <a hidden href="\" className="lg:block md:block text-3xl font-semibold  pl-5 py-2  text-white">CORK</a>
            <div className="pl-16 h-10 py-2">
            <form hidden className="md:block lg:block">
                <input type="text" placeholder="search" className="px-3 bg-gray-800 rounded-xl border-none h-9 w-4/5 text-white " ></input> 
            </form>
            </div>
            </div>
            
         
            <div className=" flex flex-row space-x-2 justify-center py-2 px-5">
                <a href="\"><img className=" py-1" src="https://designreset.com/cork/ltr/demo4/assets/img/ca.png"></img></a>
               <a href="\" className="text-white"><FaRegEnvelope className=" h-10 w-5"></FaRegEnvelope></a>
                <a href="\" className="text-white"><RiNotification2Line className=" h-10 w-5"></RiNotification2Line></a>
               <a href="\"><img className=" h-10 " src="https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png"></img></a> 
            
                
            </div>

        </div>
        
        <div className="h-14 border-b shadow-md px-5  flex justify-between ">
            <ul className="flex flex-row space-x-4 py-5 ">
            <li><a ><FiMenu className="w-5 h-5 text-gray-800" ></FiMenu></a></li>
               
            <li><a href="\" className=" text-gray-500 ">Dashboard</a></li>
           </ul>
           <Button theme="primary" buttonType="solidify" onClick={() =>{
         logout();
         window.location.href = "/login";
        }}>
          Logout</Button>
         
        </div>
       
       
        </div>
       

        </div>
 
);
};

Navbar.defaultProps = {
}

export default memo(Navbar);
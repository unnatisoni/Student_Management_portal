import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { memo } from "react";
import { logout } from "../api/auth";
import { sidebarSelector } from "../selectors/sidebar.selector";
import { useAppSelector } from "../store";


import Button from "./Button/Button";
import SidebarElement from "./SidebarElement";
interface Props{
}


const Sidebar: React.FC<Props> = () => {
  const sidebarOpen = useAppSelector(sidebarSelector);

  return (
    
    <Transition
    as= {Fragment}
    show={sidebarOpen}
    enter="transition ease-in-out duration-1000 transform"
    enterFrom="-translate-x-full"
    enterTo="translate-x"
    entered="translate-x"
    leave="transition ease-in-out duration-1000 transform"
    leaveFrom="translate-x "
    leaveTo="-translate-x-full"
  >
  
      <div className = "fixed z-50 top-28 bottom-0 flex flex-col items-center w-1/16 bg-gray-800 pt-6 min-h-screen  ">
      <SidebarElement goto="./dashboard">Dashboard</SidebarElement>
      <SidebarElement goto="/recordings">Recordings</SidebarElement>
      <SidebarElement goto="/grouplist">Group List</SidebarElement>

      <Button className=" w-80 shadow-none" theme="primary" buttonType="solidify" onClick={() =>{
         logout();
         window.location.href = "/login";
        }}>
          Logout</Button> 
          </div>
        
      </Transition>
  
    
   
);
};

Sidebar.defaultProps = {
}

export default memo(Sidebar);

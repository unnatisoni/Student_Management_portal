import React from "react";
import { memo } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../api";
import Button from "./Button/Button";
interface Props{
  isOpen : boolean;
}
const Sidebar: React.FC<Props> = ({isOpen}) => {
 const history = useHistory();
  return (
    
   
      <div className={" relative  h-screen top-0 bottom-0 transition-transform transform left-0 ease-in-out duration-1000 bg-gray-700  w-3/12 " + (isOpen ? " translate-x-full" : "  ")}>
      This is sidebar component
      <Button theme="primary" buttonType="solidify" onClick={() =>{
         logout();
         window.location.href = "/login";
        }}>
          Logout</Button>
          </div>
    
   
);
};

Sidebar.defaultProps = {
}

export default memo(Sidebar);
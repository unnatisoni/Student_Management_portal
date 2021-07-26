import React from "react";
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri"


interface Props{
  alertType: 'primary' | 'success' | 'Warning' | 'Error' | 'Info'  ;
  theme : 'Default' | 'Outline' ;
  
  children : string,

}
const Alert: React.FC<Props> = ({children , theme , alertType}) => {

  const [open, setOpen] = useState(true);
  
var defaultColor=' ', outlineColor=' ' , themedesign=' ';
if(alertType === 'primary'){
  defaultColor= ' bg-blue-100 text-blue-400';
  outlineColor= ' border-blue-500';
}
else if(alertType === 'success'){
  defaultColor= ' bg-green-100 text-green-400';
  outlineColor= ' border-green-500';
}
else if(alertType === 'Warning'){
  defaultColor= ' bg-yellow-100 text-yellow-400';
  outlineColor= ' border-yellow-500';
}
else if(alertType === 'Error'){
  defaultColor= ' bg-red-100 text-red-400';
  outlineColor= ' border-red-500';
}
else if(alertType === 'Info'){
  defaultColor= ' bg-indigo-100 text-indigo-400';
  outlineColor= ' border-indigo-500';
}

if(theme === 'Default'){
    themedesign = defaultColor;
}
else{
  themedesign = 'border border-solid text-gray-400 bg-white '+ outlineColor ;
}



  return (
    <div className={'flex flex-row w-full rounded-md '+ themedesign +  (open ? '  ' : " hidden ")  }>
        <div className="w-11/12  px-3  py-3">
           {children}
        </div>
        <RiCloseFill onClick={() => setOpen(!open)} className=" w-1/12 self-center" /> 
    </div>
);
};

Alert.defaultProps = {
  alertType : "primary",
  theme : "Default",
}

export default Alert;
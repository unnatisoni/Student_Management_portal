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
  
var color=' ' , themedesign=' ';
if(alertType === 'primary'){
  color = 'blue';
}
else if(alertType === 'success'){
  color = 'green';
}
else if(alertType === 'Warning'){
  color = 'yellow';
}
else if(alertType === 'Error'){
  color = 'red';
}
else if(alertType === 'Info'){
  color = 'indigo';
}

if(theme === 'Default'){
  themedesign = ' bg-'+color+'-100 text-'+color+'-400';
}
else{
  themedesign = 'border border-solid border-'+color+'-500 text-gray-400 bg-white';
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
import React, { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";
interface Props extends InputHTMLAttributes<HTMLInputElement>{
    touched? : boolean;
    error? : string;
    Icon? : IconType;
    Iconclass? : string;
}
const Input: React.FC<Props> = ({touched, error, Iconclass, className, Icon , placeholder, id , ...rest}) => {
  return (

   
<div className=" relative mb-1 "> 

<div className="pt-3 pb-4">
       { Icon && ( <Icon className={" absolute h-6 w-6 text-blue-600 fill-blue " + Iconclass } /> )}

        {id && placeholder && (
          <label htmlFor={id} className="sr-only">
            {placeholder}
          </label>
          )}
             
                <input
                   {...rest}
                   id={id}
                   placeholder={placeholder}
                   className={" pl-8 w-full placeholder-gray-300 pb-4  border-gray-200 border-b outline-none   "+ className }
                ></input>
                <div className="h-2">
                {touched && error && <div className="text-xs text-red-500 border-t border-red-500">{ error }</div> } </div>
               </div>
              </div>          
            
              
);
};

Input.defaultProps = {
}

export default Input;
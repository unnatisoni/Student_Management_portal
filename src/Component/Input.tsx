import React, { InputHTMLAttributes } from "react";


interface Props extends InputHTMLAttributes<HTMLInputElement>{
    touched? : boolean;
    error? : string;
}
const Input: React.FC<Props> = ({touched, error, className, placeholder, id , ...rest}) => {
  return (
   
        <div className="relative pt-3  pb-6 flex flex-col w-full "> 

        {id && placeholder && (
          <label htmlFor={id} className="sr-only">
            {placeholder}
          </label>
          )}
             
                <input
                   {...rest}
                   id={id}
                   placeholder={placeholder}
                   className={" pl-3 w-full placeholder-gray-300 pb-4  border-gray-200 border-b outline-none  "+ className }
                ></input>
                <div className="h-2">
                {touched && <div className="text-xs text-red-500">{ error }</div> } </div>
               
              </div>          
            
              
);
};

Input.defaultProps = {
}

export default Input;
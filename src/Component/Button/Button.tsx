import React from "react";
import { ButtonHTMLAttributes } from "react";


interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme: 'primary' | 'success' | 'Warning' | 'Danger' | 'Secondary' | 'Dark'  ;
    buttonType : 'solidify' | 'outline' ;
    children : string;
   

}
const Button: React.FC<Props> = ({children, buttonType,className, type, theme, ...rest}) => {

let forsolidify = ' ', foroutline = ' ', buttonTheme = " ";
if(theme === 'primary'){
  forsolidify = ' bg-blue-500 shadow-blue ';
  foroutline = " text-blue-700 border-blue-700 hover:shadow-blue hover:bg-blue-700 ";
}
else if(theme === 'success'){
  forsolidify = ' bg-green-500 shadow-green ';
  foroutline = " text-green-700 border-green-700 hover:shadow-green hover:bg-green-700 "
}
else if(theme === 'Warning'){
  forsolidify = ' bg-yellow-500 shadow-yellow ';
  foroutline = " text-yellow-700 border-yellow-700 hover:shadow-yellow hover:bg-yellow-700 "
}
else if(theme === 'Danger'){
  forsolidify = ' bg-red-500 shadow-red ';
  foroutline = " text-red-700 border-red-700 hover:shadow-red hover:bg-red-700 "
}
else if(theme === 'Secondary'){
  forsolidify = ' bg-indigo-500 shadow-indigo ';
  foroutline = " text-indigo-700 border-indigo-700 hover:shadow-indigo hover:bg-indigo-700 "
}
else{
  forsolidify = ' bg-gray-500 shadow-gray ';
  foroutline = " text-gray-700 border-gray-700 hover:shadow-gray hover:bg-gray-700 "
}

if(buttonType === "solidify"){
buttonTheme = ' text-white hover:shadow-none ' + forsolidify
}else{
buttonTheme = ' bg-white border  hover:text-white ' + foroutline
}
  

  return (

    <div className="mt-2">
            <button
                 {...rest}
                 
                  className={' px-5 py-by text-base rounded-md disabled:cursor-not-allowed  '+ buttonTheme + className }
                   >
                 {children}
                </button>
                
        
    </div>
);
};

Button.defaultProps = {
 children : "sign in",
 type : 'submit',
 buttonType : 'solidify',
 theme : 'primary',
}

export default Button;



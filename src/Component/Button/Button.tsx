import React from "react";
import { ButtonHTMLAttributes } from "react";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme: 'primary' | 'success' | 'Warning' | 'Danger' | 'Secondary' | 'Dark'  ;
    buttonType : 'solidify' | 'outline' ;
    children : string;
   

}
const Button: React.FC<Props> = ({children, buttonType,className, type, theme, ...rest}) => {

let color="" , themedesign = " ";
if(theme=='primary'){
  color = "blue"
}
else if (theme == "success"){
  color = "green"
}
else if(theme == "Warning"){
  color = "yellow"
}
else if(theme == "Danger"){
  color = "red"
}
else if(theme == "Secondary"){
  color = "indigo"
}
else{
  color="gray"
}

if ( buttonType == "solidify"){
  themedesign = "bg-"+color+"-500" + " " + "text-white shadow-"+color + " "+ "hover:shadow-none";
}
else{
  themedesign = "bg-white text-"+color+"-700 border border-"+color+"-400 hover:shadow-"+color + " " + "hover:bg-"+color+"-700" + " "+ "hover:text-white"
}


     
    

  return (

    <div className="mt-2">
            <button
                 {...rest}
                 
                  className={" transition-shadow px-5 py-by text-base rounded-md disabled:cursor-not-allowed " + " " +  themedesign + " " +className}
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


// 
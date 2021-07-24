import React from "react";

interface Props{
    isOnline? : boolean;
    imageLink : string;
    className : string;
}
const Avatar: React.FC<Props> = ({ isOnline, imageLink, className }) => {

    let background = " ";
     
     if(isOnline === true){
         background =  'border-2 bg-green-600'
     }
     else if (isOnline === false) {
         background = "border-2 bg-gray-400"
     }
     else{
         background = " "
     }

  return (
  
       
    <div className={'relative ' + className}>
    <img className="object-cover w-16 h-16 rounded-full border border-white"
        src={imageLink} alt="avatar" />
    <span className={'absolute w-4 h-4 border-white rounded-full bottom-1 left-12 '+ background}></span>
</div>
        
 
);
};

Avatar.defaultProps = {
    
    imageLink : "https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png",

}

export default Avatar;

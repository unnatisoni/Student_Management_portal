import React from "react";
import { useEffect } from "react";
interface Props{
}
const AuthHero: React.FC<Props> = (props) => {

    console.log("AuthHero rendering");
    useEffect(() => {
        console.log("AuthHero Rendering for thr first time");
    },[]);

  return (
     
    <div className=" flex bg-black w-1/2 h-screen text-white items-center ">
    <div className="flex justify-center">
        <img src="https://cdn.pixabay.com/photo/2015/12/10/16/39/shield-1086703_960_720.png"  className=" w-3/4 h-4/5 "/>
    </div>
        
    </div>
);
};

AuthHero.defaultProps = {
}

export default AuthHero;
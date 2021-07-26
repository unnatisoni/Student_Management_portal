import React from "react";

interface Props{
  performance : number;
}
const Progressbar: React.FC<Props> = ({ performance}) => {
let color=" ";

if( performance > 85){
  color = "bg-gray-600"
}
else if(performance > 70){
  color = "bg-indigo-600"
}
else if(performance > 55){
  color = "bg-red-600"
}
else if(performance > 40){
  color = "bg-yellow-600"
}
else if(performance > 25){
  color = "bg-green-600"
}
else{
  color = "bg-blue-600"
}


  return (
    <div className=" relative h-3 w-full m-3 bg-gray-300 rounded-full ">
        <div  className={" absolute rounded-full h-3 w-96" + " " + color + (performance === 100 ? "  w-full " : " ")}  >

        </div>
    </div>
);
};

Progressbar.defaultProps = {
  performance : 50,
}

export default Progressbar;
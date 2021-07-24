import React from "react";
import { number } from "yup";
interface Props{
  performance : number;
}
const Progressbar: React.FC<Props> = ({ performance}) => {
let color=" ", status= "";
if(performance > 85){
  color = "gray"
}
else if ( performance > 70 ){
  color = "indigo"
}
else if ( performance > 55){
  color = "red"
}
else if ( performance > 40 ){
  color = "yellow"
}
else if (performance > 25){
  color = "green"
}
else{
  color = "blue"
}

status = "bg-"+color+ "-600"
  return (
    <div className=" relative h-3 w-full m-3 bg-gray-300 rounded-full ">
        <div  className={" absolute rounded-full h-3 w-"+ String(~~(performance/10))+"/12" + " " + status + (performance ===100 ? " w-full" : "")}  >

        </div>
    </div>
);
};

Progressbar.defaultProps = {
  performance : 50,
}

export default Progressbar;
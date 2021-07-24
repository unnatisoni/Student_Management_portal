import React from "react";
import Avatar from "../Avatar/Avatar";
interface Props{
    usersNumber : number,
    imageLinkArary : Array<string>,
}
const StackAvatar: React.FC<Props> = ({usersNumber, imageLinkArary}) => {
    let n=0;
    const users = usersNumber;
    if(usersNumber>4){
        n=usersNumber-4
    }

    
  return (
    <div className="flex flex-row -space-x-4">
        { users>=1 && <Avatar className="hover:-translate-y-3 duration-500 transform" imageLink={ imageLinkArary[0]}></Avatar>}
       { users>=2 &&  <Avatar className="hover:-translate-y-3  duration-500  transform" imageLink={ imageLinkArary[1]}></Avatar> }
       { users>=3 &&  <Avatar className="hover:-translate-y-3 duration-500  transform" imageLink={imageLinkArary[2]}></Avatar> }
       { users>=4 &&  <Avatar className="hover:-translate-y-3 duration-500  transform" imageLink={imageLinkArary[3]}></Avatar> }
        { n!==0 && <div className=" relative bg-white text-blue-600 rounded-full border shadow-2xl w-max my-5 px-3 h-7 mr-2 hover:-translate-y-3 transform duration-500  "> +{n} more </div> }
    </div>
);
};

StackAvatar.defaultProps = {
    usersNumber : 10,
    imageLinkArary : ["https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png", "https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png", "https://tse3.mm.bing.net/th?id=OIP.iw53k-ga1S9n1RfugeT5VgHaFj&pid=Api&P=0&w=221&h=166", "https://tse3.mm.bing.net/th?id=OIP.5KVQhGk5168xQI3er3UbJgHaHa&pid=Api&P=0&w=300&h=300" ],
    
    
}

export default StackAvatar;
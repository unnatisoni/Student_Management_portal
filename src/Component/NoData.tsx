import React from "react";
interface Props{
}
const NoData: React.FC<Props> = (props) => {
  return (
    <div className=" flex justify-center mx-auto">
      
       <img src="http://blog.justperfect.co.za/wp-content/uploads/2013/10/DataNotFound.jpg" />
    </div>
);
};

NoData.defaultProps = {
}

export default NoData;
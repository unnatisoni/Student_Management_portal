import React, { memo } from "react";
import Navbar from "../../Component/Navbar";
interface Props{
}
const Recordings: React.FC<Props> = (props) => {
  return (
    <div className="w-full">
      <Navbar></Navbar>
      this is recording page
    </div>
);
};

Recordings.defaultProps = {
}

export default memo(Recordings);
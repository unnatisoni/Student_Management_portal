import {FC, memo} from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";

interface Props{
}
const Dashboard: React.FC<Props> = (props) => {
  return (
    <div className=" w-full">
      <Navbar></Navbar>
       <p className="text-black top-36"> this is dashboard page</p>
        <Link to="/recordings"><span className="text-blue-700">Lecture recording</span></Link>
    </div>
);
};

Dashboard.defaultProps = {
}

export default memo(Dashboard);
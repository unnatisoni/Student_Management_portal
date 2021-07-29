import { useState } from "react";
import { useEffect } from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../api";
import Navbar from "../Component/Navbar";
import Card from "../Component/Card";
import Input from "../Component/Input/Input";
import { FiSearch } from "react-icons/fi";



interface Props {}
const Dashboard: React.FC<Props> = (props) => {
  const [query, setquery] = useState<String>();
  const [usergroup, setusergroup] = useState<any>(
    []
  );

  useEffect(() => {
    fetchGroups({
      status: "all-groups",
      query: query,
    }).then((response) => {
      console.log(response);
      setusergroup(response);
    });
  }, [query]);

  const search = (val: any) => {
    val = val.currentTarget.value;
    setquery(val);
  };

  return (
    <div className=" flex flex-col w-full">
      <Navbar />

     
      <Link to="/recordings">
        <span className="text-blue-700">
          Lecture recording
        </span>
      </Link>
  

      <div className=" self-center w-10/12 lg:w-1/3 md:w-1/3  ">
        <Input
          onChange={search}
          type="text"
          id="search"
          placeholder="Search for the group"
          Icon={FiSearch}
          Iconclass=" my-2 right-3 "
          className=" border-2 border-black shadow-lg h-10 py-3"
        ></Input>
      </div>

      {usergroup.map((u: any) => (
        <Card
          Name={u.name}
          description={u.description}
          imageLink={u.group_image_url}
          firstname={u.creator.first_name}
          lastname={u.creator.last_name}
        ></Card>
      ))}
    </div>
    
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);

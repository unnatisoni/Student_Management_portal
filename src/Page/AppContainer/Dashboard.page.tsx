import { useEffect } from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar";
import Card from "../../Component/Card";
import Input from "../../Component/Input/Input";
import { FiSearch } from "react-icons/fi";
import { fetchGroups } from "../../api/groups";
import { useDispatch } from "react-redux";
import {  useAppSelector } from "../../store";



interface Props {
 
}
const Dashboard: React.FC<Props> = () => {
 const user = useAppSelector((state) => state.me)
 const query = useAppSelector((state) => state.groupQuery);
 const groups = useAppSelector((state) => { 
const groupsIds = state.groupQueryMap[state.groupQuery] || [];
const groups = groupsIds.map((id) => state.groups[id]);
return groups;
});
const dispatch = useDispatch();  


  useEffect(() => {
    fetchGroups({
      status: "all-groups",
      query: query,
    }).then((groups) => {
      console.log(groups);
      dispatch({type: "groups/query_completed", payload: {groups : groups, query: query},
    });
    });
  }, [query]);

console.log("group data " , groups)

  const search = (val: any) => {
    val = val.currentTarget.value;
    dispatch({type : "groups/query", payload : val});
  };

  return (
    <div className=" flex flex-col w-full">
      <Navbar />
      
<div className="text-2xl font-bold py-8 text-center" >{user!.first_name}</div>
     
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
      
      {groups.map((group) => (
        <Card
          Name={group.name}
          description={group.description}
          imageLink={group.group_image_url}
         
        ></Card>
      ))}
    </div>
    
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);

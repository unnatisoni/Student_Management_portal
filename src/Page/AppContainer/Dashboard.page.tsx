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
import { groupActions } from "../../actions/groups.actions";
import { groupsSelector } from "../../selectors/groups.selectors";



interface Props {
 
}
const Dashboard: React.FC<Props> = () => {
 const userFirstName = useAppSelector((state) => state.users.byId[state.auth.id!].first_name)
 const query = useAppSelector((state) => state.groups.query);
 const groups = useAppSelector(groupsSelector);



  useEffect(() => {
    fetchGroups({
      status: "all-groups",
      query: query,
    }).then((groups) => {
      console.log(groups);
      groupActions.queryCompleted(query,groups)
    });
  }, [query]);

  const search = (val: any) => {
    val = val.currentTarget.value;
    groupActions.query(val);
  };

  return (
    <div className=" flex flex-col w-full">
      <Navbar />
      
<div className="text-2xl font-bold py-8 text-center" >{userFirstName}</div>
     
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

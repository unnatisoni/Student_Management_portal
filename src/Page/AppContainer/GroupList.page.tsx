import { useEffect } from "react";
import { memo } from "react";
import Card from "../../Component/Card";
import Input from "../../Component/Input/Input";
import { FiSearch } from "react-icons/fi";
import { useAppSelector } from "../../store";
import { queryAction } from "../../actions/groups.actions";
import { groupQuerySelector, groupsLoadingSelector, groupsSelector } from "../../selectors/groups.selectors";
import { sidebarSelector } from "../../selectors/sidebar.selector";
import { FaSpinner } from "react-icons/fa";
import NoData from "../../Component/NoData";
import { useDispatch } from "react-redux";


interface Props {}
const GroupList: React.FC<Props> = () => {
  const userFirstName = useAppSelector(
    (state) =>
      state.users.byId[state.auth.id!].first_name
  );

  const query = useAppSelector(groupQuerySelector);
  const groups = useAppSelector( groupsSelector);
  const loading = useAppSelector(groupsLoadingSelector);
  const dispatch = useDispatch(); 

 

  const search = (val: any) => {
     dispatch(queryAction(val.target.value))
     val.preventDefault();
  };

  const sidebarOpen = useAppSelector(
    sidebarSelector
  );

  return (
    <div
      className={
        " relative px-10 lg:px-40 w-11/12 lg:max-w-6xl justify-center mx-auto items-center justify-items-center " +
        " " +
        (sidebarOpen
          ? "transform  lg:translate-x-36 duration-1000 "
          : "tranform  lg:-translate-x-36 duration-1000")
      }
    >
      <div className="text-2xl font-bold py-8 text-center ">
        {userFirstName}
      </div>

      <div className=" flex flex-row md:pr-20 w-full sm:w-full lg:w-full sm:px-1 lg:px-40 md:px-20 mb-5 ">
        <Input
          onChange={search}
          type="text"
          id="search"
          placeholder="Search for the group"
          Icon={FiSearch}
          Iconclass=" hidden sm:block md:block  lg:block md:block sm:block my-2 right-3 "
          className="border-2 border-black shadow-lg h-10 py-3"
        ></Input>
        { loading && <FaSpinner className=" my-auto mx-2 animate-spin" ></FaSpinner>}
      </div>

      {groups.map((group : any) => (
        <Card
          Name={group.name}
          description={group.description}
          imageLink={group.group_image_url}
        ></Card>
      ))}
      {!loading && groups.length === 0 &&  <NoData /> }
    </div>
  );
};

GroupList.defaultProps = {};

export default memo(GroupList);

import { useEffect } from "react";
import { memo } from "react";
import Card from "../../Component/Card";
import Input from "../../Component/Input/Input";
import { FiSearch } from "react-icons/fi";
import { fetchGroups } from "../../api/groups";
import { useAppSelector } from "../../store";
import { groupActions } from "../../actions/groups.actions";
import { groupsSelector } from "../../selectors/groups.selectors";
import { sidebarSelector } from "../../selectors/sidebar.selector";

interface Props {}
const GroupList: React.FC<Props> = () => {
  const userFirstName = useAppSelector(
    (state) =>
      state.users.byId[state.auth.id!].first_name
  );
  const query = useAppSelector(
    (state) => state.groups.query
  );
  const groups = useAppSelector(groupsSelector);

  useEffect(() => {
    fetchGroups({
      status: "all-groups",
      query: query,
    }).then((groups) => {
      console.log(groups);
      groupActions.queryCompleted(query, groups);
    });
  }, [query]);

  const search = (val: any) => {
    val = val.currentTarget.value;
    groupActions.query(val);
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

      <div className="md:pr-20 w-full sm:w-full lg:w-full sm:px-1 lg:px-40 md:px-20 mb-5 ">
        <Input
          onChange={search}
          type="text"
          id="search"
          placeholder="Search for the group"
          Icon={FiSearch}
          Iconclass=" hidden sm:block md:block  lg:block md:block sm:block my-2 right-3 "
          className="border-2 border-black shadow-lg h-10 py-3"
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

GroupList.defaultProps = {};

export default memo(GroupList);

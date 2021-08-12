import { memo } from "react";
import { useAppSelector } from "../../store";
import { groupsSelector } from "../../selectors/groups.selectors";
import { sidebarSelector } from "../../selectors/sidebar.selector";

interface Props {}
const Dashboard: React.FC<Props> = () => {
  const userFirstName = useAppSelector(
    (state) =>
      state.users.byId[state.auth.id!].first_name
  );
  const query = useAppSelector(
    (state) => state.groups.query
  );
  const groups = useAppSelector(groupsSelector);

  const sidebarOpen = useAppSelector(
    sidebarSelector
  );

  return (
    <div
      className={
        " relative w-full max-w-6xl px-10" +
        " " +
        (sidebarOpen
          ? " transform translate-x-1/4 duration-1000 "
          : "tranform -translate-x-1/4 duration-1000")
      }
    >
      This is Dashboard page
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);

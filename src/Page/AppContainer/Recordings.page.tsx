import React, { memo } from "react";
import { sidebarSelector } from "../../selectors/sidebar.selector";
import { useAppSelector } from "../../store";
interface Props {}
const Recordings: React.FC<Props> = (props) => {
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
      this is recording page
    </div>
  );
};

Recordings.defaultProps = {};

export default memo(Recordings);

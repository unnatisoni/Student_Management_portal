import React from "react";
import { useState } from "react";
interface Props {
  toggleText: string;
}
const ToggleSwitch: React.FC<Props> = (props) => {
  const [isToggle, setToggle] = useState(false);

  const onToggle = () =>
    setToggle((isToggle) => !isToggle);

  console.log(isToggle);

  return (
    <div className=" w-full ">
      <label
        htmlFor="toggle"
        className="flex items-center cursor-pointer"
      >
        <div className="mr-3 text-gray-900">
          {props.toggleText}
        </div>

        <div
          onClick={onToggle}
          className="relative"
        >
          <input
            type="checkbox"
            className="sr-only"
          />

          <div
            className={
              "block w-10 h-5 rounded-full" +
              " " +
              (isToggle
                ? "bg-blue-700"
                : "bg-gray-300")
            }
          ></div>

          <div
            className={
              "absolute left-1 top-0.5  w-4 h-4 rounded-full transition ease-in-out duration-200 " +
              " " +
              (isToggle
                ? "bg-white transform translate-x-full "
                : "bg-blue-700 transform ")
            }
          ></div>
        </div>
      </label>
    </div>
  );
};

ToggleSwitch.defaultProps = {};

export default ToggleSwitch;

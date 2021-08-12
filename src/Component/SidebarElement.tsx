import { Link } from "react-router-dom"


interface Props{
    goto : string;
}
const SidebarElement: React.FC<Props> = (props) => {
  return (
    <div className=" w-11/12 mx-1 mb-3 h-10 text-center py-2 bg-gray-200 rounded-lg hover:bg-white">
        <Link to={props.goto}>
        {props.children}
        </Link>
    </div>
);
};

SidebarElement.defaultProps = {
}

export default SidebarElement;
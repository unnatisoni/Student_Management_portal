import Avatar from "./Avatar";
import "../../index.css";

const xyz = {
    title : "Avatar",
    component : Avatar,
}

const Template = (args : any) => <Avatar {...args} ></Avatar>
export const Main : any = Template.bind({});
Main.args = {
    imageLink : "https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png",
    

}

export default xyz;
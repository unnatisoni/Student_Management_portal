import StackAvatar from "./StackAvatar";

import "../../index.css";


const xyz = {
    title : "Stacking Avatar",
    component : StackAvatar ,
    
    
}
    
const Template =  (args : any) => <StackAvatar {...args} ></StackAvatar>

export const Main: any = Template.bind({});
Main.args = {

  

};



export default xyz;




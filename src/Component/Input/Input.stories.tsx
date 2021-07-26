import Input from "../Input/Input";
import "../../index.css";
import { FiUser, FiLock, FiAtSign, } from "react-icons/fi";

const icons = { FiUser, FiLock, FiAtSign  };

const xyz = {
  title: 'Form Input',
  component : Input,
  argTypes : {
  Icon : {
    options: Object.keys(icons),
    mapping: icons,
    control: {
        type: "select",
        labels:{   
        FiUser : "username",
        FiAtSign : "email",
        FiLock : "password",
   
  } ,
},
  },
},
};

const Template = (args : any) => <Input {...args} ></Input>

export const Main: any = Template.bind({});
Main.args = {
    touched : false,
    error : "invalid",
    Icon : FiUser,
    className : "",    
    placeholder: "Username",
  

};


export default xyz;





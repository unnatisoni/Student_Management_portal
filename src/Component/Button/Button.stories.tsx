import Button from "./Button";
import "../../index.css";

const Xyz = {
    title : "My button",
    component : Button,
    argTypes : {
        theme : {
            control : {type : 'select' },
        }
    }

}

const Template = (args : any) => <Button {...args} ></Button>

export const solidifiy : any = Template.bind({});
solidifiy.args = {
    children : "sign in",
    type : "submit",
    className : "",
    disabled : false,

};

export const outline : any = Template.bind({});
outline.args = {
    children : "sign in",
    className : "",
    disabled : false,
    buttonType : "outline",

};


export default Xyz;
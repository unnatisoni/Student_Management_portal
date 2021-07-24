import Alert from "./Alert";
import "../../index.css";


const xyz = {
    title : "Alert Component",
    component : Alert,
    argTypes : {
        alertType : {
           control: {
              type: "select",
            },
    },
},
    

};

const Template = ( args : any ) => <Alert {...args} ></Alert>

export const Default : any = Template.bind({});
Default.args = {
 className : "",
 children : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et soluta omnis assumenda itaque temporibus dolore officiis iste commodi "

};

export const Outline: any = Template.bind({});
Outline.args = {
    className : "",
     children : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et soluta omnis assumenda itaque temporibus dolore officiis iste commodi ",
     theme : "Outline",
     
     
}


export default xyz;
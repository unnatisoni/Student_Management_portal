import Progressbar from "./Progressbar";
import "../../index.css";

const xyz = {
    title : "Progress Bar",
    component : Progressbar,
    argTypes: {
    performance : {
        control : {
            type : 'range',
            min : 10,
            max : 100,
        }
    
}
    }
}

const Template =  (args : any) => <Progressbar {...args} ></Progressbar>

export const Main: any = Template.bind({});
Main.args = {
  
  

};



export default xyz;












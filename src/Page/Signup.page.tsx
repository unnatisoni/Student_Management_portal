import React from "react";
import { memo } from "react";
import { Link, useHistory } from "react-router-dom";
import {  useFormik } from "formik";
import * as yup from "yup";
import { FaSpinner } from "react-icons/fa";
import Input from "../Component/Input/Input";
import {FiAtSign, FiLock, FiUser} from "react-icons/fi"
import ToggleSwitch from "../Component/ToggleSwitch";


interface Props{
}
const Signup: React.FC<Props> = (props) => {

  const history = useHistory();

  const {handleSubmit, getFieldProps, touched , isSubmitting, errors, isValid } = useFormik({
    initialValues : {
      Username :"",
      email : " ",
      password : "",
    },
    validationSchema : yup.object().shape({
      Username : yup.string().required().min(5),
      email : yup.string().required().email(),
      password : yup.string().required().min(8,({min}) => "Atleast "+ min + " character!!! ")
    }),

    onSubmit :(data, {setSubmitting}) => {
      console.log("form submiting ",data);
      setTimeout(() => {
        console.log("form submit successfully ");
        history.push("/dashboard");
      }, 5000);
      
    },
     
    })


  return (

    <div className=" flex  justify-center text-gray-700 font-sans w-full lg:w-1/2 min-h-screen   ">
    <div className="flex flex-col align-center justify-center max-w-md px-2 ">
      <div className="text-left pl-3">
    
        <div className="pl-2">
          <h1 className=" text-2.5 tracking-wider mb-2">
          Get started with a free account
          </h1>
          <p className="text-sm font-medium mb-12 tracking-wider">
          Already have an account?
            <Link
              to="/login"
              className="text-blue-600 border-b border-blue-500"
            >
              Log in
            </Link>
          </p>
        </div>


        <form 
        onSubmit = {handleSubmit}
        >
        
        <div className="pl-3">
  
           <Input 
           Icon={FiUser}
           id="Username"
           type="Username"
           autoComplete="Username"
           placeholder="Username"
           required
           touched={touched.Username}
           error= {errors.Username}
           {...getFieldProps("Username")}
           
          />
  
       <Input 
          Icon={FiAtSign}
          id="email"
          type="email"
          autoComplete="email"
          placeholder="Email"
          required
          touched={touched.email}
          error= {errors.email}
          {...getFieldProps("email")}
          
         />   
      
        <Input 
          Icon={FiLock}
           id="password"
           type="password"
           autoComplete="password"
           placeholder="Password"
           required
           touched={touched.password}
           error= {errors.password}
           {...getFieldProps("password")}
           
          />
    
      </div>

          <div className=" pl-3">
              <label className="text-sm  text-textgray tracking-wider">
                <input
                  type="checkbox"
                  className="pb-2 pl-9 w-4 h-4 mr-3"
                />
                I agree to the <Link className="text-blue-700" to="/"> terms and conditions </Link>
              </label>
        </div>

    <div className="flex flex-row pl-3 pt-8 ">
      

    <ToggleSwitch toggleText="Show Password"></ToggleSwitch>
           
          <div className="flex flex-row w-full justify-end">
          <button
                disabled={!isValid}
                type="submit"
                className="bg-blue-600 text-white shadow-blue transition-shadow hover:shadow-none px-5 py-by text-base rounded-md disabled:cursor-not-allowed "
              >
                Get Started!
              </button>
      
              <div className="w-4">
              {isSubmitting &&  <FaSpinner className="animate-spin mt-3 ml-2"></FaSpinner> }</div>
            </div>
    </div>
          
  
    </form>

    <div>
        <p className="text-sm tracking-wider font-medium text-gray-500 pt-16  ">
          © 2020 All Rights Reserved.
          <a href="/" className="text-blue-600">
            CORK
          </a>
          is a product of Designreset.
          <a href="/" className="text-blue-600">
            Cookie Preferences, Privacy
          </a>
          , and
          <a href="/" className="text-blue-600">
            Terms.
          </a>
        </p>
    </div>


      </div>
    </div>
  </div>

    
);
};

Signup.defaultProps = {
}

export default memo(Signup);
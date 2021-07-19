import React, { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { ErrorMessage, useFormik, validateYupSchema } from "formik";
import * as yup from "yup";
import { FaSpinner } from "react-icons/fa";
import Input from "../Component/Input";
import {FiLock, FiUser} from "react-icons/fi"


interface Props {}
const Login: React.FC<Props> = (props) => {

  const history = useHistory();


  const {handleSubmit, getFieldProps, touched , isSubmitting, errors, isValid } = useFormik({
    initialValues : {
      email : " ",
      password : "",
    },
    validationSchema : yup.object().shape({
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
    <div className=" flex  justify-center text-gray-700 font-sans w-1/2 min-h-screen   ">
      <div className="flex flex-col max-w-md px-2 justify-center">
        <div className="text-left pl-3">
      
          <div className="pl-2">
            <h1 className="text-2.5 mb-3">
              Log In to
              <a href="/" className="text-blue-600 font-medium"> CORK
              </a>
            </h1>
            <p className="text-sm font-medium mb-12 tracking-wider">
              New Here?
              <Link
                to="/signup"
                className="text-blue-600 border-b border-blue-500"
              >
                Create an account
              </Link>
            </p>
          </div>
          
          
      <form 
          onSubmit = {handleSubmit}
      
          >
    <div className=" mb-6">
    
        <div className=" inline-flex  w-full  ">
         
          <FiUser className=" mt-3 h-6 w-6 text-blue-600 fill-blue " />
           
          <Input 
             id="email"
             type="email"
             autoComplete="email"
             placeholder="Username"
             required
             touched={touched.email}
             error= {errors.email}
             {...getFieldProps("email")}
             
            />

            </div>
          
        
     

        <div className=" inline-flex  w-full  ">
          <FiLock className=" mt-3 h-6 w-6 text-blue-600 fill-blue" />
          <Input 
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
      </div>

            <div className="flex flex-row pl-2 ">

            <div className=" flex flex-row min-w-max" >
  
                <h2 className="pr-2 text-sm  text-gray-900 tracking-wider" >Show Password</h2>
                <div className="w-8 h-4 flex items-center bg-gray-200  rounded-full py-1 duration-300 ease-in-out"  >
                <div className="bg-blue-600 w-3 h-3 rounded-full shadow-md transform duration-300 ease-in-out"  >
                </div>
                </div>
            </div>
             
            <div className="flex flex-row w-full justify-end">
              
                <button
                  disabled={!isValid}
                  type="submit"
                  className="bg-blue-600 text-white shadow-blueshadow transition-shadow hover:shadow-none px-5 py-by text-base rounded-md disabled:cursor-not-allowed "
                >
                  Log in
                </button>
                <div className="w-4">
                {isSubmitting &&  <FaSpinner className="animate-spin mt-3 ml-2"></FaSpinner> }</div>
              </div>
           </div>

          <div className=" mt-16 text-center">
                <label className="text-sm  text-textgray tracking-wider">
                  <input
                    type="checkbox"
                    name="keepsignIn"
                    className="pb-2 w-4 h-4 mr-3"
                  />
                  keep me logged in
                </label>
          </div>

          <div className="text-center pl-7 mt-5 leading-tight">
                <Link to="/ForgotPAssword" className="text-blue-600 text-md tracking-widest font-medium ">
                  Forgot password ?
                </Link>
          </div>    
          </form>

          <div className=" pt-16 pl-4 ">
          <p className="text-sm tracking-wider font-medium text-gray-500 ">
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

Login.defaultProps = {};

export default memo(Login);




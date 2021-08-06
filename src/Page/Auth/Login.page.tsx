import React, {  memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { FaSpinner } from "react-icons/fa";
import Input from "../../Component/Input/Input";
import {FiLock, FiUser} from "react-icons/fi"
import ToggleSwitch from "../../Component/ToggleSwitch";
import { login } from "../../api/auth";
import { useDispatch } from "react-redux";
import { authActions } from "../../actions/auth.actions";







interface Props {

 
}
const Login: React.FC<Props> = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const {handleSubmit, getFieldProps, touched , isSubmitting, errors, isValid } = useFormik({
    initialValues : {
      email : " ",
      password : "",
    },
    isInitialValid : false,
    validationSchema : yup.object().shape({
      email : yup.string().required().email(),
      password : yup.string().required().min(8,({min}) => "Atleast "+ min + " character!!! ")
    }),

    onSubmit :(data) => {
      console.log("form submiting ",data);
      login(data).then((u) =>
      {
        authActions.login(u);
        history.push("/dashboard");
      });
    },
  });

  
  return (
    <div className=" flex  justify-center text-gray-700 font-sans lg:w-1/2 min-h-screen  w-full  ">
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
          className="pl-3"
      >

          <div>
     
         <Input 
             Icon={FiUser}
             id="email"
             type="email"
             autoComplete="email"
             placeholder="Username"
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
             

      <div className=" flex flex-row mt-2">

            <ToggleSwitch toggleText="Show Password"></ToggleSwitch>
             
            <div className="flex flex-row  w-full justify-end">     
             
            <button
                disabled={!isValid}
                type="submit"
                className="bg-blue-600 text-white shadow-blue transition-shadow hover:shadow-none px-5 py-by text-base rounded-md disabled:cursor-not-allowed "
              >
                Sign in
              </button>
  
                <div className="w-4">
                     {isSubmitting &&  <FaSpinner className="animate-spin mt-3 ml-2"></FaSpinner> }
                </div>
            </div>
       </div>

      <div className=" mt-14 text-center  "  >
         <label className="text-sm  text-textgray tracking-wider">
          <input
            type="checkbox"
            name="keepsignIn"
            className="pb-2 w-4 h-4 mr-3 "
            />
           keep me logged in
         </label>
      </div>

      <div className="text-center pl-6 mt-5 leading-tight">
          <Link to="/ForgotPAssword" className="text-blue-600 font-sans text-base tracking-widest font-medium ">
              Forgot Password ?
          </Link>
      </div>   


    </form>

    <div className=" pt-20 pl-4 ">
          <p className="text-sm tracking-wider font-normal  text-gray-900 ">
            © 2020 All Rights Reserved.
            <a href="/" className="text-blue-600 font-medium">
              CORK
            </a>
            is a product of Designreset.
            <a href="/" className="text-blue-600 font-medium">
              Cookie Preferences, Privacy
            </a>
            , and
            <a href="/" className="text-blue-600 font-medium">
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





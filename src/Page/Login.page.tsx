import React, { FC, memo } from "react";
import {
  Link,
  useHistory,
} from "react-router-dom";
import { ErrorMessage, useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { FaSpinner } from "react-icons/fa";
interface Props {}
const Login: React.FC<Props> = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const [submitting, setSubmitting] =
    useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    setTouched({
      ...touched,
      [event.target.name]: true,
    });
  };

  let emailError = "";
  let passwordError = "";

  const formValidator = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  });

  console.log(
    "form valid ",
    formValidator.isValidSync(data)
  );

  if (!data.email) {
    emailError = "email is required";
  } else if (!data.email.endsWith("@gmail.com")) {
    emailError =
      "please enter a valid email error";
  }

  if (!data.password) {
    passwordError = "password is required";
  } else if (data.password.length < 8) {
    passwordError =
      "password should be atleast of 8 characters";
  }

  const history = useHistory();

  return (
    <div className=" flex justify-center text-gray-700 font-sans w-1/2  ">
      <div className="flex flex-col align-center self-center w-7/12 pt-9">
        <div className="text-left">
          <div>
            <h1 className="text-2.5 mb-7">
              Log In to
              <a
                href="/"
                className="text-blue-600 font-medium"
              >
                {" "}
                CORK
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
            onSubmit={(event) => {
              event.preventDefault();
              if (emailError || passwordError) {
                console.log("form submit failed");
                return;
              } else {
                setSubmitting(true);
                setTimeout(() => {
                  console.log(
                    "login successfull"
                  );
                  console.log(
                    "login with data ",
                    data
                  );
                  history.push("/dashboard");
                }, 5000);
              }
            }}
          >
            <div className=" text-left px-3">
              <div className="relative pt-3 pb-7 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-blue-600 fill-blue top-3 absolute"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                    ></circle>
                  </svg>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={data.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder="Username"
                    className="inline-block pl-9 pb-4 placeholder-gray-300 w-full border-gray-200 border-b  outline-none  "
                  ></input>
                  {touched.email && (
                    <div className="text-xs text-red-500">
                      {emailError}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative pt-3 pb-8 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-blue-600 fill-blue top-3 absolute"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="inline-block placeholder-gray-300 pl-9 pb-4 w-full border-gray-200 border-b  outline-none "
                ></input>
                {touched.password && (
                  <div className="text-xs text-red-500">
                    {passwordError}
                  </div>
                )}
              </div>

              <div className="flex flex-row w-full justify-end">
                <button
                  disabled={
                    !formValidator.isValidSync(
                      data
                    )
                  }
                  type="submit"
                  className="bg-blue-600 text-white shadow-blueshadow transition-shadow hover:shadow-none px-5 py-by text-base rounded-md disabled:cursor-not-allowed "
                >
                  Log in
                </button>
                {submitting && (
                  <FaSpinner className="animate-spin mt-3 ml-2"></FaSpinner>
                )}
              </div>
              <div className=" mt-20 text-center">
                <label className="text-sm ml-8 text-textgray tracking-wider">
                  <input
                    type="checkbox"
                    name="keepsignIn"
                    className="pb-2 pl-9"
                  />
                  <span className="top-1 pr-2 " />
                  keep me logged in
                </label>
              </div>
              <div className="text-center pl-7 mt-7 leading-tight">
                <Link
                  to="/ForgotPAssword"
                  className="text-blue-600 text-md tracking-widest font-medium "
                >
                  Forgot password ?
                </Link>
              </div>
            </div>
          </form>
          <p className="text-sm tracking-wider font-medium text-gray-500 pt-20 ">
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
  );
};

Login.defaultProps = {};

export default memo(Login);

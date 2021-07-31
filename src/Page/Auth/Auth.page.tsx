import React, { memo } from "react";
import AuthHero from "../../Component/AuthHero"
import LoginPage from './Login.page';
import {  Route , Switch } from 'react-router-dom';
import SignupPage from "./Signup.page";
import { User } from "../../models/Users";

interface Props{
  onLogin : (user : User) => void;
}
const Auth: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-row justify-between">
        <Switch>
        <Route path="/login">
          <LoginPage onLogin={(u) => {
            props.onLogin(u);
            console.log("user obj in auth page ",u);
          }}></LoginPage>
          
        </Route>
        <Route path="/signup">
          <SignupPage></SignupPage>
        </Route>

        </Switch>
        <AuthHero></AuthHero>
        
    </div>
);
};

Auth.defaultProps = {
}

export default memo(Auth);
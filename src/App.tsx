import { useState } from 'react';
import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route , Redirect, Switch } from 'react-router-dom';
import { me } from './api/auth';
import { LS_AUTH_TOKEN } from './api/Base';
import { User } from './models/Users';
import AppContainerPageLazy from './Page/AppContainer/AppContainer.lazy';
import AppContainerPage from './Page/AppContainer/AppContainer.page';
import AuthPageLazy from './Page/Auth/Auth.lazy';
import AuthPage from './Page/Auth/Auth.page';
import NotFoundPage from './Page/NotFound.page';
import {ImSpinner3} from "react-icons/im"


function App() { 

  const [user, setuser ] = useState<User>()
  const token = localStorage.getItem( LS_AUTH_TOKEN );

  useEffect(() => {
    if(!token) {
      return;
    }
    me().then((u) => setuser(u));
  },[]);

if(!user && token){
  return <ImSpinner3 className=" h-32 w-32 m-auto my-48 animate-spin text-gray-500 " />
}

  return (
    <Suspense fallback = {<ImSpinner3 className=" h-32 w-32 m-auto my-48 animate-spin text-gray-500 " ></ImSpinner3>  } >
     <BrowserRouter>
      <Switch>
       <Route path="/" exact>
         {user ? <Redirect to= "/dashboard"></Redirect> : <Redirect to="/login"></Redirect>}
      </Route>
       <Route path={["/Login", "/Signup"]} exact>
         { user ? <Redirect to="/dashboard" /> :  <AuthPageLazy onLogin={setuser} /> }
       </Route>
       <Route path={["/dashboard", "/recordings", "/batch/:batchNumber/lecture/:lectureNumber"]} exact>
        { user ? <AppContainerPageLazy user={user!} /> : <Redirect to="/login" /> }
       </Route>
        <Route>
          <NotFoundPage />

        </Route>
      
      </Switch>
      </BrowserRouter>
      </Suspense>
      
  );
}

export default App;

import { BrowserRouter, Route , Redirect, Switch } from 'react-router-dom';
import AppContainerPage from './Page/AppContainer.page';
import AuthPage from './Page/Auth.page';
import NotFoundPage from './Page/NotFound.page';
import { LS_LOGIN_TOKEN } from "./api";


function App() { 
  const token = localStorage.getItem( LS_LOGIN_TOKEN );
  return (
    <BrowserRouter>
      <Switch>
       <Route path="/" exact>
         {token ? <Redirect to= "./dashboard"></Redirect> : <Redirect to="/login"></Redirect>}
      </Route>
       <Route path={["/Login", "/Signup"]} exact>
         <AuthPage></AuthPage>
       </Route>
       <Route path={["/dashboard", "/recordings", "/batch/:batchNumber/lecture/:lectureNumber"]} exact>
         <AppContainerPage></AppContainerPage>
       </Route>
        <Route>
          <NotFoundPage />

        </Route>
      
      </Switch>
      </BrowserRouter>
      
  );
}

export default App;

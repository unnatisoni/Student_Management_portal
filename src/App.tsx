import { BrowserRouter, Route , Redirect, Switch } from 'react-router-dom';
import { LS_AUTH_TOKEN } from './api/Base';


import AppContainerPage from './Page/AppContainer.page';
import AuthPage from './Page/Auth.page';
import NotFoundPage from './Page/NotFound.page';


function App() { 
  const token = localStorage.getItem( LS_AUTH_TOKEN );
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

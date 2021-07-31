import React, { memo } from "react";
import { Route, Switch } from "react-router-dom";
import { User } from "../../models/Users";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import RecordingsPage from "./Recordings.page";
interface Props{
    user : User;
}
const AppContainer: React.FC<Props> = ({user}) => {
  return (
    <div className="flex flex-row">
       
      
        <Switch>
            <Route path="/dashboard">
                <DashboardPage user = {user}></DashboardPage>
            </Route>
            <Route path="/recordings">
                <RecordingsPage></RecordingsPage>
            </Route>
            <Route path= "/batch/:batchNumber/lecture/:lectureNumber">
                <LecturePage />
            </Route>

        </Switch>
    </div>
   
);
};

AppContainer.defaultProps = {
}

export default memo(AppContainer);
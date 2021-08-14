import React, { memo } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../../Component/Navbar";
import Sidebar from "../../Component/Sidebar";
import AccountSetting from "./AccountSetting.page";
import DashboardPage from "./Dashboard.page";
import GroupListPage from "./GroupList.page";
import LecturePage from "./Lecture.page";
import RecordingsPage from "./Recordings.page";
interface Props{
 
}
const AppContainer: React.FC<Props> = () => {



  return (
    <div className="flex flex-col">
        <Navbar></Navbar>
        <div className="flex flex-row ">       
        <Sidebar />
        <Switch>
            <Route path="/dashboard">
                <DashboardPage ></DashboardPage>
            </Route>
            <Route path="/recordings">
                <RecordingsPage></RecordingsPage>
            </Route>
            <Route path= "/batch/:batchNumber/lecture/:lectureNumber">
                <LecturePage />
            </Route>
            <Route path="/grouplist">
                <GroupListPage></GroupListPage>
            </Route>
            <Route path="/accountsetting">
                <AccountSetting></AccountSetting>
            </Route>

        </Switch>
        </div>
    </div>
   
);
};

AppContainer.defaultProps = {
}

export default memo(AppContainer);
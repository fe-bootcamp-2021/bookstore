import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/homepage/HomePage";
import AdminPage from "../pages/adminpage/AdminPage";
import Cards from "../Cards/Cards";
import IncDec from "../Cards/IncDec";


const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/admin" children={<AdminPage />} />
      <Route exact path="/" children={<HomePage />} />
      <Route exact path="/cards" children={<Cards />} />
      <Route exact path ='/inc'  children={<IncDec />} />
    </Switch>
  );
};

export default Routes;

import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/homepage/HomePage";
import AdminPage from "../pages/adminpage/AdminPage";
import AboutPage from "../pages/about/about";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/admin" children={<AdminPage />} />
      <Route exact path="/" children={<HomePage />} />
      <Route exact path="/about" children={<AboutPage />} />
    </Switch>
  );
};

export default Routes;

import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/homepage/HomePage";
import AdminPage from "../pages/adminpage/AdminPage";

import AboutPage from "../pages/about/about";
import BookInfo from "../pages/bookInfoPage/infoPage";
import SignUp from "../pages/auth/SignUp";
import SignIn from '../pages/auth/SignIn';

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/admin" children={<AdminPage />} />
      <Route exact path="/about" children={<AboutPage />} />
      <Route exact path="/signUp" children={<SignUp />} />
      <Route exact path="/signIn" children={<SignIn />} />
      <Route path="/books/:bookId" children={<BookInfo />} />
      <Route exact path="/" children={<HomePage />} />
    </Switch>
  );
};

export default Routes;

import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { adminIds } from "../pages/AuthPage/AdminIds";

import HomePage from "../pages/HomePage/HomePage";
import AdminPage from "../pages/AdminPage/AdminPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import BookDetailPage from "../pages/BookDetailPage/BookDetailPage";
import News from "../pages/News/News";
import Cart from "../components/Cart/Cart";
import AboutPage from "../pages/About/About";
import * as constants from "../constants/constants";
import BookCart from "../components/BookCart/BookCart";

const Routes = (props) => {
  const currentUser = useSelector((state) => state.users.currentUser);

  return (
    <Switch>
      <Route exact path={constants.adminPageUrl}>
        {currentUser &&
        currentUser.isAdmin &&
        adminIds.includes(currentUser.localId) ? (
          <AdminPage />
        ) : (
          () => <h3>You must be admin to view this page</h3>
        )}
      </Route>
      <Route exact path={constants.homePageUrl}>
        <HomePage />
      </Route>
      <Route path={constants.authPageUrl}>
        <AuthPage />
      </Route>
      <Route path={constants.newsPageUrl}>
        <News />
      </Route>
      <Route path={constants.booksPageUrl}>
        <BookDetailPage />
      </Route>
      <Route path={constants.aboutPageUrl}>
        <AboutPage />
      </Route>
    </Switch>
  );
};

export default Routes;

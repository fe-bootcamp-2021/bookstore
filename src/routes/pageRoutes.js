import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { adminIds } from "../pages/authpage/adminIds";

import HomePage from "../pages/homepage/HomePage";
import AdminPage from "../pages/adminpage/AdminPage";
import AuthPage from "../pages/authpage/AuthPage";
import BookDetailPage from "../pages/bookdetailpage/BookDetailPage";

import News from "../pages/news/News";
import Cart from "../components/Cart/Cart";
import AboutPage from "../pages/about/about";

const Routes = (props) => {
  const currentUser = useSelector((state) => state.users.currentUser);

  return (
    <Switch>
      <Route exact path="/admin">
        {currentUser &&
        currentUser.isAdmin &&
        adminIds.includes(currentUser.localId) ? (
          <AdminPage />
        ) : (
          () => <h3>You must be admin to view this page</h3>
        )}
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/auth">
        <AuthPage />
      </Route>
      <Route path="/news">
        <News />
      </Route>
      <Route path="/book/:id">
        <BookDetailPage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
    </Switch>
  );
};

export default Routes;

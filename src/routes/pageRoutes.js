import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/homepage/HomePage';
import AdminPage from '../pages/adminpage/AdminPage';

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/admin' children={<AdminPage/>} />
            <Route exact path='/' children={<HomePage/>} />
        </Switch>
    )
}

export default Routes;
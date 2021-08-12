import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage';

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/' children={<HomePage/>} />
        </Switch>
    )
}

export default Routes;
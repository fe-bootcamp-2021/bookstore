import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/pageRoutes';

const BookStore = (props) => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}

export default BookStore;
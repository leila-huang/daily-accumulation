import App from "../App";
import React from 'react';

import {createMemoryRouter} from 'react-router';
import {
    createBrowserRouter,
} from "react-router-dom";
import MenuTree from '../menuTree';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/MenuTree",
        element: <MenuTree/>,
    },
]);

export default router

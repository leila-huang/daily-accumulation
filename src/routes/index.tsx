import App from "../App";
import React from 'react';

import {createMemoryRouter} from 'react-router';
import {
    createBrowserRouter,
} from "react-router-dom";
import MenuTree from '../pages/MenuTree';
import AllWithSelect from '../pages/AllWithSelect'
import DeepOperation from '../pages/DeepOperation'
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/MenuTree",
        element: <MenuTree/>,
    },
    {
        path: "/AllWithSelect",
        element: <AllWithSelect/>,
    },
    {
        path: "/DeepOperation",
        element: <DeepOperation/>,
    },
]);

export default router

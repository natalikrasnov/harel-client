import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'

import { Edit } from '../pages/Edit.component'
import { Home } from '../pages/Home.component'
import { Login } from '../pages/login.component'
import { NotFound } from '../pages/NotFound.component'
import { getCustomers, getCustomerById } from '../service/HTTPrequests'

export function MainRouter({ }) {
  
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
            errorElement: <NotFound />
        },
                {
                    path: "/home",
                    element: <Home />,
                    loader: async () => {
                        return getCustomers();
                    },
                    errorElement: <NotFound />

                },
                {
                    path: "/edit/:id",
                    element: <Edit />,
                    loader: async (args) => {
                        return getCustomerById(args.params?.id);
                    },
                    errorElement: <NotFound />
                }
           

    ]);

    return <RouterProvider
        router={router}
        fallbackElement={<NotFound />}
    />
    
}
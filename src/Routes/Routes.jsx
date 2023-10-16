import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Home/Home';
import Contact from '../Home/Contact';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "contact",
                element: <Contact></Contact>
            }
        ]
    }
])

export default router;
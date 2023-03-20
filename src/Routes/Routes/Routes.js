import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ResetPassword from "../../Pages/Login/ResetPassword";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/appointment',
                element: <Appointment />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/reset',
                element: <ResetPassword />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
        ]
    }
])
export default router;
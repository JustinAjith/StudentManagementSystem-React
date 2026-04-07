import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Students from "../pages/Students";
import StudentForm from "../pages/StudentForm";
import Courses from "../pages/Courses";
import App from "../App";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true, // This handles the base '/' path
                element: <Navigate to="/home" replace />, 
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/students',
                element: <Students />,
            },
            {
                path: '/students/create-student',
                element: <StudentForm />,
            },
            {
                path: '/courses',
                element: <Courses />,
            }
        ]
    },
    
]);
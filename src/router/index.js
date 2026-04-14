import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Students from "../pages/Students";
import StudentForm from "../pages/StudentForm";
import Courses from "../pages/Courses";
import GuestRoute from "./GuestRoute";
import ProtectedRoute from "./ProtectedRoute";
import MainAppLayout from "../layouts/MainAppLayout";


export const router = createBrowserRouter([
    {
        path: '',
        element: <Navigate to="/home" replace />, 
    },
    {
      element: <GuestRoute />,
      children: [
        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
    {
      element: <ProtectedRoute />,
      children: [
        {
          element: <MainAppLayout />,
          children: [
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
          ],
        }
      ]
    },
    
]);
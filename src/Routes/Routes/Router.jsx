import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register"
import Instructors from "../../Pages/Instructors/Instructors";
import Classes from "../../Pages/Classes/Classes";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import AdminHome from "../../Pages/DashBoard/Admin/AdminHome";
import ManageUsers from "../../Pages/DashBoard/Admin/ManageUsers";
import ManageClasses from "../../Pages/DashBoard/Admin/ManageClasses";
import InstructorHome from "../../Pages/DashBoard/Instructor/InstructorHome";
import Protected from "../ProtectedRoutes/Protected";
import UserHome from "../../Pages/DashBoard/User/UserHome";
import EnrolledClass from "../../Pages/DashBoard/User/EnrolledClass";
import PaymentHistory from "../../Pages/DashBoard/User/PaymentHistory";
import SelectedClass from "../../Pages/DashBoard/User/SelectedClass";
import AddedClass from "../../Pages/DashBoard/Instructor/AddedClass";
import AddCourse from "../../Pages/DashBoard/Instructor/AddCourse";
import ManageSelectedClass from "../../Pages/DashBoard/Admin/ManageSelectedClass";

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/instructors',
            element: <Instructors></Instructors>,
         },
         {
            path: '/classes',
            element: <Classes></Classes>,
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         },

      ]
   },
   {
      path: 'dashboard',
      element: <Protected><DashBoard></DashBoard></Protected>,
      children: [

         //user dashboard route
         {
            path: 'user-home',
            element: <UserHome></UserHome>
         },
         {
            path: 'selected-class',
            element: <SelectedClass></SelectedClass>
         },
         {
            path: 'enrolled-class',
            element: <EnrolledClass></EnrolledClass>
         },
         {
            path: 'payment-history',
            element: <PaymentHistory></PaymentHistory>
         },

         //instructors routes
         {
            path: 'instructor-home',
            element: <InstructorHome></InstructorHome>
         },
         {
            path: 'add-course',
            element: <AddCourse/>
         },
         {
            path: 'added-classes',
            element: <AddedClass></AddedClass>
         },

         //admin routes
         {
            path: 'admin-home',
            element: <AdminHome></AdminHome>
         },
         {
            path: 'manage-users',
            element: <ManageUsers></ManageUsers>
         },
         {
            path: 'manage-course',
            element: <ManageClasses></ManageClasses>
         },
         {
            path: 'manage-selected-classes',
            element: <ManageSelectedClass></ManageSelectedClass>
         },
      ]
   }

])
export default router;
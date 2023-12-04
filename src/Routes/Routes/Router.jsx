import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register"
import Instructors from "../../Pages/Instructors/Instructors";
import Classes from "../../Pages/Classes/Classes";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import AdminHome from "../../Pages/DashBoard/Admin/AdminHome";
import InstructorHome from "../../Pages/DashBoard/Instructor/InstructorHome";
import Protected from "../ProtectedRoutes/Protected";
import UserHome from "../../Pages/DashBoard/User/UserHome";
import EnrolledClass from "../../Pages/DashBoard/User/EnrolledClass";
import PaymentHistory from "../../Pages/DashBoard/User/PaymentHistory";
import ErrorPage from "../../ErrrorPage/ErrorPage";
import AddCourse from "../../Pages/DashBoard/Instructor/AddCourseForm/AddCourse";
import AddedClass from "../../Pages/DashBoard/Instructor/Course/AddedClass";
import ManageUsers from "../../Pages/DashBoard/Admin/userManagement/ManageUsers";
import ViewDetails from "../../Pages/ViewDetails/ViewDetails";
import SelectedClass from "../../Pages/DashBoard/User/SelectedCourse/SelectedClass";
import ManageSelectedClass from "../../Pages/DashBoard/Instructor/SelectedManage/ManageSelectedClass";
import ManageClasses from "../../Pages/DashBoard/Admin/manageCourse/ManageCourses";

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/instructors',
            element: <Protected><Instructors /></Protected>,
         },
         {
            path: '/classes',
            element: <Protected><Classes /></Protected>,
         },
         {
            path: '/course/details/:id',
            element: <Protected><ViewDetails /></Protected>,
            loader: ({ params }) => fetch(`http://localhost:5000/course/details/${params.id}`)
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
            element: <AddCourse />
         },
         {
            path: 'added-course',
            element: <AddedClass></AddedClass>
         },
         {
            path: 'manage-selected-classes',
            element: <ManageSelectedClass></ManageSelectedClass>
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
         
      ]
   }

])
export default router;
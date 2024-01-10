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
import ManageClasses from "../../Pages/DashBoard/Admin/manageCourse/ManageCourses";
import InstructorRoutes from "../InstructorRoutes/InstructorRoutes";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import Payment from "../../Pages/DashBoard/DashBoard/Payment/Payment";
import EnrolledCourses from "../../Pages/DashBoard/Admin/allEnrolledCourses/enrolledCourses";
import UsersEnrolledCourse from "../../Pages/DashBoard/Instructor/UsersEnrolled/UsersEnrolledCourse";
import Update from "../../Pages/DashBoard/Instructor/UpdateCourse/Update";

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
         // User dashboard routes
         { path: 'students-home', element: <UserHome /> },
         { path: 'selected-class', element: <SelectedClass /> },
         { path: 'enrolled-class', element: <EnrolledClass /> },
         { path: 'payment-history', element: <PaymentHistory /> },
         { path: 'payment/:id', element: <Payment /> },

         // Instructor routes
         { path: 'instructor-home', element: <InstructorRoutes><InstructorHome /></InstructorRoutes> },
         { path: 'add-course', element: <InstructorRoutes><AddCourse /></InstructorRoutes> },
         { path: 'added-course', element: <InstructorRoutes><AddedClass /></InstructorRoutes> },
         { path: 'update/:id', element: <InstructorRoutes><Update /></InstructorRoutes> },
         { path: 'enrolled-courses', element: <InstructorRoutes><UsersEnrolledCourse /></InstructorRoutes> },

         // Admin routes
         { path: 'admin-home', element: <AdminRoutes><AdminHome /></AdminRoutes> },
         { path: 'manage-users', element: <AdminRoutes><ManageUsers /></AdminRoutes> },
         { path: 'manage-course', element: <AdminRoutes><ManageClasses /></AdminRoutes> },
         { path: 'all-enrolled-courses', element: <AdminRoutes><EnrolledCourses /></AdminRoutes> },
      ]
   }

])
export default router;
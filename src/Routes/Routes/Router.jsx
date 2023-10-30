import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register"
import Instructors from "../../Pages/Instructors/Instructors";
import Classes from "../../Pages/Classes/Classes";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import UserHome from "../../Pages/DashBoard/UserHome/UserHome";
import SelectedClass from "../../Pages/DashBoard/SelectedClass/SelectedClass";
import EnrolledClass from "../../Pages/DashBoard/EnrolledClass/EnrolledClass";
import PaymentHistory from "../../Pages/DashBoard/PaymentHistory/PaymentHistory";

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
            loader: () => fetch('http://localhost:5000/instructors')
         },
         {
            path: '/classes',
            element: <Classes></Classes>,
            loader: () => fetch('http://localhost:5000/classes')
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
      element: <DashBoard></DashBoard>,
      children: [
         {
            path: 'userHome',
            element: <UserHome></UserHome>
         },
         {
            path:'selectedClass',
            element: <SelectedClass></SelectedClass>
         },
         {
            path:'enrolledClass',
            element: <EnrolledClass></EnrolledClass>
         },
         {
            path: 'paymentHistory',
            element: <PaymentHistory></PaymentHistory>
         }
      ]
   }

])
export default router;
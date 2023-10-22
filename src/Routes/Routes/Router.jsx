import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register"
import Instructors from "../../Pages/Instructors/Instructors";

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
            element: <Instructors></Instructors>
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
   }
])
export default router;
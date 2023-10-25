import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register"
import Instructors from "../../Pages/Instructors/Instructors";
import Classes from "../../Pages/Classes/Classes";

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
            loader: ()=> fetch('http://localhost:5000/instructors')
         },
         {
            path: '/classes',
            element: <Classes></Classes>,
            loader: ()=>fetch('http://localhost:5000/classes')
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
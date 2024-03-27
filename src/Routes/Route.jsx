import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "./Errorpage/Error";
import Home from "../Component/Pages/Home/H/Home";
import Donation from "../Component/Pages/Donation deatils/Donation";
import Donationdeatils from "../Component/Pages/Donation deatils/Donationdeatils";
import Statistics from "../Component/Pages/statistics/Statistics";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/donation",
            element: <Donation></Donation>
        },
        {
            path:"/donation_details/:id",
            element: <Donationdeatils></Donationdeatils>
        },
        {
          path:"/statistics",
          element:<Statistics></Statistics>
        }
      ]
      
    },
  
  
  
  ]);
  export default router;
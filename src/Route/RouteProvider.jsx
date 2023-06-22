import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../MainLayout/HomePageLayout";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import SIngleDetails from "../COmponents/SingleDetails/SIngleDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminDashboard from "../MainLayout/AdminDashboard";
import AddItem from "../Pages/DashBoard/AddITem/AddItem";
import { getRoom } from "../API/rooms";
import MyListing from "../Pages/DashBoard/AddITem/myListing";
import MyBooking from "../Pages/DashBoard/MyBooking";
import Pyment from "../COmponents/Payment/Pyment";

const router = createBrowserRouter([
           {
            path:'/',
            errorElement:<Error></Error>,
            element:<HomePageLayout></HomePageLayout>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/register',
                    element:<Register></Register>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/details/:id',
                    element:<PrivateRoute><SIngleDetails></SIngleDetails></PrivateRoute>,
                    loader: ({ params }) => getRoom(params.id),
                },
            ]
           },
           {
            path:'/admin-dashboard',
            element:<AdminDashboard></AdminDashboard>,
            children:[
                {
                    path:'add-room',
                    element:<AddItem></AddItem>
                },
                {
                    path:'my-listings',
                    element:<MyListing></MyListing>
                },
                
                {
                    path:'my-bookings',
                    element:<MyBooking></MyBooking>
                },
                {
                    path:'payment/:id',
                    element:<Pyment></Pyment>
                },
            ]
           }
])

export default router;
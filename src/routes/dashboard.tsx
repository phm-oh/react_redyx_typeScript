import { RouteObject, redirect } from "react-router-dom";
import DLayout from "../pages/dashboard/d-layout";
import DHome from "../pages/dashboard/d-home";
import DRoom from "../pages/dashboard/d-room";
import { getProfile } from "../services/auth.service";




const routeDashboard: RouteObject[] = [
    {
        path: "/dashboard",
        element: <DLayout />,
        loader: async()=>{
             const response = await getProfile();
             if(!response?.data.data.user){
               throw redirect('/login');
             } 

             return response.data.data.user;
        },
        children:[
          {
            path: "",  //localhost:5173/dashboard
            element: <DHome />
          },
          {
            path: "room", //localhost:5173/dashboard/room
            element: <DRoom />
          }
        ]
      },
]

export default routeDashboard;
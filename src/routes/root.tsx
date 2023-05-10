import { createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/home-page";
import About from "../pages/about-page";
import Login from '../pages/login-page.tsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  export default router;
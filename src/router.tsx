import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/user/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

export default router;

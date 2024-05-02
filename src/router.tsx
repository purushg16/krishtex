import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/user/LandingPage";
import AdminLayout from "./layouts/AdminLayout";
import ProductPage from "./pages/admin/ProductPage";
import CategoriesPages from "./pages/admin/CategoriesPages";
import OrdersPage from "./pages/admin/OrdersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <></>,
    children: [
      { index: true, path: "products", element: <ProductPage /> },
      { path: "categories", element: <CategoriesPages /> },
      { path: "orders", element: <OrdersPage /> },
      { path: "reviews", element: <OrdersPage /> },
      { path: "blogs", element: <OrdersPage /> },
    ],
  },
]);

export default router;

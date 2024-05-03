import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/user/LandingPage";
import AdminLayout from "./layouts/AdminLayout";
import ProductPage from "./pages/admin/ProductPage";
import CategoriesPages from "./pages/admin/CategoriesPages";
import OrdersPage from "./pages/admin/OrdersPage";
import AddProductsPage from "./pages/admin/AddProductsPage";
import AddOrEditLayout from "./layouts/AddOrEditLayout";
import SingleOrderPage from "./pages/admin/SingleOrderPage";

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
      {
        path: "products",
        element: <AddOrEditLayout />,
        children: [
          { index: true, element: <ProductPage /> },
          { path: "add", element: <AddProductsPage /> },
          { path: "edit/:productId", element: <AddProductsPage /> },
        ],
      },
      { path: "categories", element: <CategoriesPages /> },
      { path: "orders", element: <OrdersPage /> },
      { path: "orders/:orderId", element: <SingleOrderPage /> },
      { path: "reviews", element: <OrdersPage /> },
      { path: "blogs", element: <OrdersPage /> },
    ],
  },
]);

export default router;

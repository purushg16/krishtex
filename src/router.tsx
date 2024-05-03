import { Outlet, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/user/LandingPage";
import AdminLayout from "./layouts/AdminLayout";
import ProductPage from "./pages/admin/ProductPage";
import CategoriesPages from "./pages/admin/CategoriesPages";
import OrdersPage from "./pages/admin/OrdersPage";
import AddProductsPage from "./pages/admin/AddProductsPage";
import AddOrEditLayout from "./layouts/AddOrEditLayout";
import SingleOrderPage from "./pages/admin/SingleOrderPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import UserAccountPage from "./pages/user/UserAccountPage";
import WishlistPage from "./pages/user/WishlistPage";
import CartPage from "./pages/user/CartPage";
import ProductsPage from "./pages/user/ProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <></>,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "account", element: <UserAccountPage /> },
      { path: "wishlist", element: <WishlistPage /> },
      { path: "cart", element: <CartPage /> },
    ],
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

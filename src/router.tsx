import { Navigate, createBrowserRouter } from "react-router-dom";
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
import UserAccountLayout from "./layouts/UserAccountLayout";
import WishlistPage from "./pages/user/WishlistPage";
import CartPage from "./pages/user/CartPage";
import ProductsPage from "./pages/user/ProductsPage";
import UserLayout from "./layouts/UserLayout";
import ShippingAndDeliveryPage from "./pages/user/policies/ShippingAndDeliveryPage";
import CancellationAndRefundPage from "./pages/user/policies/CancellationAndRefundPage";
import TermsAndConditionsPage from "./pages/user/policies/TermsAndConditionsPage";
import ContactPage from "./pages/user/policies/ContactPage";
import AboutPage from "./pages/user/policies/AboutPage";
import AdminLoginPage from "./pages/admin/auth/AdminLoginPage";
import EditProductPage from "./pages/admin/EditProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    errorElement: <></>,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "wishlist", element: <WishlistPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "TermsAndConditions", element: <TermsAndConditionsPage /> },
      {
        path: "CancellationAndRefundPolicy",
        element: <CancellationAndRefundPage />,
      },
      {
        path: "ShippingAndDeliveryPolicy",
        element: <ShippingAndDeliveryPage />,
      },
      {
        path: "account",
        element: <UserAccountLayout />,
        children: [
          { index: true, element: <CartPage /> },
          { path: "cart", element: <Navigate to="/account" /> },
          { path: "orders", element: <></> },
          { path: "track-order", element: <></> },
          { path: "request-for-cancel", element: <></> },
          { path: "change-password", element: <></> },
        ],
      },
    ],
  },

  { path: "/adminLogin", element: <AdminLoginPage /> },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <></>,
    children: [
      { index: true, element: <Navigate to="/admin/products" /> },
      {
        path: "products",
        element: <AddOrEditLayout />,
        children: [
          { index: true, element: <ProductPage /> },
          { path: "add", element: <AddProductsPage /> },
          { path: "edit/:productId", element: <EditProductPage /> },
        ],
      },
      { path: "categories", element: <CategoriesPages /> },
      { path: "orders", element: <OrdersPage /> },
      { path: "orders/:orderId", element: <SingleOrderPage /> },
      { path: "reviews", element: <OrdersPage /> },
      { path: "blogs", element: <OrdersPage /> },
      { path: "changePassword", element: <AdminLoginPage /> },
    ],
  },
]);

export default router;

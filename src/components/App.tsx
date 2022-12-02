import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CustomerInfoPage from "../pages/CustomerInfoPage";
import CustomersPage from "../pages/CustomersPage";
import DashboardPage from "../pages/DashboardPage";
import SharedLayout from "./sharedLayout/SharedLayout";

const HomePage = lazy(() => import("../pages/HomePage"));
const SuppliersPage = lazy(() => import("../pages/SuppliersPage"));
const SupplierInfoPage = lazy(() => import("../pages/SupplierInfoPage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const ProductInfoPage = lazy(() => import("../pages/ProductInfoPage"));
const OrdersPage = lazy(() => import("../pages/OrdersPage"));
const OrderInfoPage = lazy(() => import("../pages/OrderInfoPage"));
const EmployeesPage = lazy(() => import("../pages/EmployeesPage"));
const EmployeesInfoPage = lazy(() => import("../pages/EmployeesInfoPage"));
const SearchPage = lazy(() => import("../pages/SearchPage"));

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="suppliers" element={<SuppliersPage />} />
          <Route path="suppliers/:supplierId" element={<SupplierInfoPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:productId" element={<ProductInfoPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="orders/:orderId" element={<OrderInfoPage />} />
          <Route path="employees" element={<EmployeesPage />} />
          <Route path="employees/:employeeId" element={<EmployeesInfoPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="customers/:customerId" element={<CustomerInfoPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;

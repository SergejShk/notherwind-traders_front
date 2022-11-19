import { Routes, Route, Navigate } from "react-router-dom";
import CustomersPage from "../pages/CustomersPage";
import DashboardPage from "../pages/DashboardPage";
import EmployeesPage from "../pages/EmployeesPage";
import HomePage from "../pages/HomePage";
import OrdersPage from "../pages/OrdersPage";
import ProductsPage from "../pages/ProductsPage";
import SearchPage from "../pages/SearchPage";
import SuppliersPage from "../pages/SuppliersPage";
import SharedLayout from "./sharedLayout/SharedLayout";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="suppliers" element={<SuppliersPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="employees" element={<EmployeesPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;

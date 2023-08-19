import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
// const Suppliers = lazy(() => import("../pages/suppliers/Suppliers"));
const Suppliers = lazy(() => import("../pages/suppliers-new/Suppliers"));
const SupplierInfo = lazy(() => import("../pages/suppliersInfo/SupplierInfo"));
const Products = lazy(() => import("../pages/products/Products"));
const ProductInfo = lazy(() => import("../pages/productsInfo/ProductInfo"));
const Orders = lazy(() => import("../pages/orders/Orders"));
const OrderInfo = lazy(() => import("../pages/orderInfo/OrderInfo"));
const Employees = lazy(() => import("../pages/employees/Employees"));
const EmployeesInfo = lazy(() => import("../pages/employeeInfo/EmployeesInfo"));
const Customers = lazy(() => import("../pages/customers/Customers"));
const CustomerInfo = lazy(() => import("../pages/customerInfo/CustomerInfo"));
const Search = lazy(() => import("../pages/search/Search"));

export const routes = [
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  // {
  //   path: "suppliers",
  //   element: <Suppliers />,
  // },
  {
    path: "suppliers",
    element: <Suppliers />,
  },
  {
    path: "suppliers/:supplierId",
    element: <SupplierInfo />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "products/:productId",
    element: <ProductInfo />,
  },
  {
    path: "orders",
    element: <Orders />,
  },
  {
    path: "orders/:orderId",
    element: <OrderInfo />,
  },
  {
    path: "employees",
    element: <Employees />,
  },
  {
    path: "employees/:employeeId",
    element: <EmployeesInfo />,
  },
  {
    path: "customers",
    element: <Customers />,
  },
  {
    path: "customers/:customerId",
    element: <CustomerInfo />,
  },
  {
    path: "search",
    element: <Search />,
  },
];

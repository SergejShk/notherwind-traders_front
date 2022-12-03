import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "../shared/sharedLayout/SharedLayout";
import { routes } from "./RoutesHelper";
const Home = lazy(() => import("../pages/home/Home"));

const RoutesComp: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" index element={<Home />} />

        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RoutesComp;

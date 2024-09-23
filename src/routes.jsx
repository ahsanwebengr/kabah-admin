import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loader from "./common/Loader";

const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Umrah = lazy(() => import("./pages/manage-packages/Umrah"));
const Packages = lazy(() => import("./pages/manage-media/packages"));
const Blogs = lazy(() => import("./pages/manage-media/blogs"));
const NotFound = lazy(() => import("./pages/NotFound"));

const routes = [
  { path: "/", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/packages/umrah", element: <Umrah /> },
  { path: "/packages/hajj", element: <Umrah /> },
  { path: "/media/package", element: <Packages /> },
  { path: "/media/blogs", element: <Blogs /> },
  { path: "*", element: <NotFound /> },
];

const Routes = () => {
  const routing = useRoutes(routes);

  return <Suspense fallback={<Loader />}>{routing}</Suspense>;
};

export default Routes;

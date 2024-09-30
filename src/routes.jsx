import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loader from "./common/Loader";
import Hajj from "./pages/manage-packages/Hajj";
import CreateUmrahPackage from "./pages/manage-packages/Umrah/create";
import UpdateUmrahPackage from "./pages/manage-packages/Umrah/update";
import ViewUmrahPackage from "./pages/manage-packages/Umrah/view";
import CreateHajjPackage from "./pages/manage-packages/Hajj/create";
import ManageBlogs from "./pages/manage-blogs";
import UpdateHajjPackage from "./pages/manage-packages/Hajj/update";
import ViewHajjPackage from "./pages/manage-packages/Hajj/view";

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
  { path: "/packages/umrah/create", element: <CreateUmrahPackage /> },
  { path: "/packages/umrah/update/:id", element: <UpdateUmrahPackage /> },
  { path: "/packages/umrah/view/:id", element: <ViewUmrahPackage /> },
  { path: "/packages/hajj", element: <Hajj /> },
  { path: "/packages/hajj/create", element: <CreateHajjPackage /> },
  { path: "/packages/hajj/update/:id", element: <UpdateHajjPackage /> },
  { path: "/packages/hajj/view/:id", element: <ViewHajjPackage /> },
  { path: "/media/package", element: <Packages /> },
  { path: "/media/blogs", element: <Blogs /> },
  { path: "/manage-blogs", element: <ManageBlogs /> },
  { path: "*", element: <NotFound /> },
];

const Routes = () => {
  const routing = useRoutes(routes);

  return <Suspense fallback={<Loader />}>{routing}</Suspense>;
};

export default Routes;

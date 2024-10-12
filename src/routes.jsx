import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loader from "./common/Loader";
import ViewReservationDetail from "./pages/reservation/view";

const Reservation = lazy(() => import("./pages/reservation"));
const Hajj = lazy(() => import("./pages/manage-packages/Hajj"));
const CreateUmrahPackage = lazy(
  () => import("./pages/manage-packages/Umrah/create"),
);
const UpdateUmrahPackage = lazy(
  () => import("./pages/manage-packages/Umrah/update"),
);
const ViewUmrahPackage = lazy(
  () => import("./pages/manage-packages/Umrah/view"),
);
const CreateHajjPackage = lazy(
  () => import("./pages/manage-packages/Hajj/create"),
);
const ManageBlogs = lazy(() => import("./pages/manage-blogs"));
const UpdateHajjPackage = lazy(
  () => import("./pages/manage-packages/Hajj/update"),
);
const ViewHajjPackage = lazy(() => import("./pages/manage-packages/Hajj/view"));
const Contacts = lazy(() => import("./pages/contacts"));
const UpdateContactDetail = lazy(() => import("./pages/contacts/update"));
const ViewContactDetail = lazy(() => import("./pages/contacts/view"));
const CreateBlog = lazy(() => import("./pages/manage-blogs/create"));
const UpdateBlog = lazy(() => import("./pages/manage-blogs/update"));
const ViewBlog = lazy(() => import("./pages/manage-blogs/view"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Umrah = lazy(() => import("./pages/manage-packages/Umrah"));
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
  { path: "/blogs", element: <ManageBlogs /> },
  { path: "/blogs/create", element: <CreateBlog /> },
  { path: "/blogs/update/:id", element: <UpdateBlog /> },
  { path: "/blogs/View/:id", element: <ViewBlog /> },
  { path: "/reservation", element: <Reservation /> },
  { path: "/reservation/view/:id", element: <ViewReservationDetail /> },
  { path: "/reservation/view/:id", element: <ViewReservationDetail /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/contacts/update/:id", element: <UpdateContactDetail /> },
  { path: "/contacts/view/:id", element: <ViewContactDetail /> },
  { path: "*", element: <NotFound /> },
];

const Routes = () => {
  const routing = useRoutes(routes);

  return <Suspense fallback={<Loader />}>{routing}</Suspense>;
};

export default Routes;

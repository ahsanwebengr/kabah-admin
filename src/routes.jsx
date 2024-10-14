import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loader from "./common/Loader";
import ProtectedRoute from "./components/protected-route";

const ViewReservationDetail = lazy(() => import("./pages/reservation/view"));
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
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Umrah = lazy(() => import("./pages/manage-packages/Umrah"));
const NotFound = lazy(() => import("./pages/NotFound"));

const routes = [
  { path: "/", element: <Login /> },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/packages/umrah",
    element: (
      <ProtectedRoute>
        <Umrah />
      </ProtectedRoute>
    ),
  },
  {
    path: "/packages/umrah/create",
    element: (
      <ProtectedRoute>
        <CreateUmrahPackage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/packages/umrah/update/:id",
    element: (
      <ProtectedRoute>
        <UpdateUmrahPackage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/packages/umrah/view/:id",
    element: (
      <ProtectedRoute>
        <ViewUmrahPackage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/packages/hajj",
    element: (
      <ProtectedRoute>
        <Hajj />
      </ProtectedRoute>
    ),
  },
  {
    path: "/packages/hajj/create",
    element: (
      <ProtectedRoute>
        <CreateHajjPackage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/packages/hajj/update/:id",
    element: (
      <ProtectedRoute>
        <UpdateHajjPackage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/packages/hajj/view/:id",
    element: (
      <ProtectedRoute>
        <ViewHajjPackage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/blogs",
    element: (
      <ProtectedRoute>
        <ManageBlogs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/blogs/create",
    element: (
      <ProtectedRoute roles={["ADMIN", "EDITOR"]}>
        <CreateBlog />
      </ProtectedRoute>
    ),
  },
  {
    path: "/blogs/update/:id",
    element: (
      <ProtectedRoute roles={["ADMIN", "EDITOR"]}>
        <UpdateBlog />
      </ProtectedRoute>
    ),
  },
  {
    path: "/blogs/view/:id",
    element: (
      <ProtectedRoute>
        <ViewBlog />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reservation",
    element: (
      <ProtectedRoute>
        <Reservation />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reservation/view/:id",
    element: (
      <ProtectedRoute>
        <ViewReservationDetail />
      </ProtectedRoute>
    ),
  },
  {
    path: "/contacts",
    element: (
      <ProtectedRoute>
        <Contacts />
      </ProtectedRoute>
    ),
  },
  {
    path: "/contacts/update/:id",
    element: (
      <ProtectedRoute>
        <UpdateContactDetail />
      </ProtectedRoute>
    ),
  },
  {
    path: "/contacts/view/:id",
    element: (
      <ProtectedRoute>
        <ViewContactDetail />
      </ProtectedRoute>
    ),
  },
  { path: "*", element: <NotFound /> },
];

const Routes = () => {
  const routing = useRoutes(routes);

  return <Suspense fallback={<Loader />}>{routing}</Suspense>;
};

export default Routes;

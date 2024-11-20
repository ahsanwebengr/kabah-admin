import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loader from "./common/Loader";

const Ramzan = lazy(() => import("./pages/manage-packages/Ramzan"));
const CreateRamzanPackage = lazy(
  () => import("./pages/manage-packages/Ramzan/create"),
);
const UpdateRamzanPackage = lazy(
  () => import("./pages/manage-packages/Ramzan/update"),
);
const ViewRamzanPackage = lazy(
  () => import("./pages/manage-packages/Ramzan/view"),
);
const UpdateReservation = lazy(() => import("./pages/reservation/update"));
const UpdateTestimonials = lazy(() => import("./pages/testimonials/update"));
const CreateTestimonials = lazy(() => import("./pages/testimonials/create"));
const ProtectedRoute = lazy(() => import("./components/protected-route"));
const AdditionalPages = lazy(() => import("./pages/additional-pages"));
const CreateAdditonalPages = lazy(
  () => import("./pages/additional-pages/create"),
);
const UpdateAdditonalPages = lazy(
  () => import("./pages/additional-pages/update"),
);
const Testimonials = lazy(() => import("./pages/testimonials"));
const CreateFlight = lazy(() => import("./pages/flights/create"));
const UpdateFlight = lazy(() => import("./pages/flights/update"));
const Flights = lazy(() => import("./pages/flights"));
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
    path: "/packages/ramzan",
    element: (
      <ProtectedRoute>
        <Ramzan />
      </ProtectedRoute>
    ),
  },
  {
    path: "/packages/ramzan/create",
    element: (
      <ProtectedRoute>
        <CreateRamzanPackage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/packages/ramzan/update/:id",
    element: (
      <ProtectedRoute>
        <UpdateRamzanPackage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/packages/ramzan/view/:id",
    element: (
      <ProtectedRoute>
        <ViewRamzanPackage />
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
      <ProtectedRoute>
        <CreateBlog />
      </ProtectedRoute>
    ),
  },
  {
    path: "/blogs/update/:id",
    element: (
      <ProtectedRoute>
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
    path: "/reservation/update/:id",
    element: (
      <ProtectedRoute>
        <UpdateReservation />
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
  {
    path: "/flights",
    element: (
      <ProtectedRoute>
        <Flights />
      </ProtectedRoute>
    ),
  },
  {
    path: "/flights/create",
    element: (
      <ProtectedRoute>
        <CreateFlight />
      </ProtectedRoute>
    ),
  },
  {
    path: "/flights/update/:id",
    element: (
      <ProtectedRoute>
        <UpdateFlight />
      </ProtectedRoute>
    ),
  },
  {
    path: "/additional-pages",
    element: (
      <ProtectedRoute>
        <AdditionalPages />
      </ProtectedRoute>
    ),
  },
  {
    path: "/additional-pages/create",
    element: (
      <ProtectedRoute>
        <CreateAdditonalPages />
      </ProtectedRoute>
    ),
  },
  {
    path: "/additional-pages/update/:slug/:id",
    element: (
      <ProtectedRoute>
        <UpdateAdditonalPages />
      </ProtectedRoute>
    ),
  },
  {
    path: "/testimonials",
    element: (
      <ProtectedRoute>
        <Testimonials />
      </ProtectedRoute>
    ),
  },
  {
    path: "/testimonials/create",
    element: (
      <ProtectedRoute>
        <CreateTestimonials />
      </ProtectedRoute>
    ),
  },
  {
    path: "/testimonials/update/:id",
    element: (
      <ProtectedRoute>
        <UpdateTestimonials />
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

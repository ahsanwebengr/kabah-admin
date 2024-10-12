import { brand_logo_2 } from "@/assets/images";
import { Spinner } from "@/common";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import api from "@/lib/api";
import config from "@/lib/endpoint";
import LoginSchema from "@/schema/Login";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Cookies from "js-cookie";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const token = Cookies.get("accessToken");
  const location = useLocation();

  const initialValues = {
    email: "admin@example.com",
    password: "Pa$w0rd!",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      const response = await api.post(`${config.admin.login}`, values);
      if (response.status === 200) {
        navigate("/dashboard");
        Cookies.set("accessToken", response?.data?.content?.accessToken);
        toast.success(response?.data?.message || "Logged in successfully");
      }
      return response?.data;
    } catch ({ message, response }) {
      setSubmitting(false);
      toast.error(response?.data?.error || "Failed to Login");
    } finally {
      setSubmitting(false);
    }
  };
  useEffect(() => {
    if (token) {
      const from = location.state?.from?.pathname || "/dashboard";
      navigate(from, { replace: true });
    }
  }, [token, navigate, location]);

  if (token) {
    return null;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <img
          src={brand_logo_2}
          alt="brand logo"
          className="mx-auto my-4 w-40"
        />
        <h2 className="mb-6 text-center text-2xl font-bold text-black">
          Login to your Account
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <Field
                  as={Input}
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 w-full"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email">
                  {(msg) => (
                    <span className="mt-1 text-sm text-red-600">{msg}</span>
                  )}
                </ErrorMessage>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <Field
                  as={Input}
                  type="password"
                  name="password"
                  id="password"
                  className="mt-1 w-full"
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password">
                  {(msg) => (
                    <span className="mt-1 text-sm text-red-600">{msg}</span>
                  )}
                </ErrorMessage>
              </div>

              <Button
                type="submit"
                className="hover:bg-primary-dark w-full bg-primary text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? <Spinner /> : "Login"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;

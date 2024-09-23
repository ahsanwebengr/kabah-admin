import { brand_logo_2 } from "@/assets/images";
import { Spinner } from "@/common";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LoginSchema from "@/schema/Login";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form Data", values);

    setTimeout(() => {
      setSubmitting(false);
      console.log("Form submitted");
    }, 2000);

    navigate("/dashboard");

    toast.success("Logged in Successfully!");
  };

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

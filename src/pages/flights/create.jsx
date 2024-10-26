import { Formik, Form } from "formik";
import { InputField } from "@/components/Umrah";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/common";
import DefaultLayout from "@/layout/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FlightsSchema from "@/schema/Flights";
import { useDispatch } from "react-redux";
import { createFlight } from "@/store/features/flights/service";
import { useNavigate } from "react-router-dom";

const CreateFlight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    airline: "",
    from: "",
    to: "",
    price: "",
    flightsNumber: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true);
      const resultAction = await dispatch(createFlight(values)).unwrap();

      if (resultAction) {
        resetForm();
        navigate("/flights");
      }
    } catch (error) {
      console.error("Failed to create flight:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb />
      <Formik
        initialValues={initialValues}
        validationSchema={FlightsSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleChange, errors, touched }) => (
          <Form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 rounded-lg bg-white px-5 py-10 shadow-xl md:grid-cols-2">
              <InputField
                label="Airline"
                name="airline"
                placeholder="Enter airline name"
                onChange={handleChange}
                error={
                  errors.airline && touched.airline ? errors.airline : null
                }
              />
              <InputField
                label="From"
                name="from"
                placeholder="Origin location"
                onChange={handleChange}
                error={errors.from && touched.from ? errors.from : null}
              />
              <InputField
                label="To"
                name="to"
                placeholder="Destination location"
                onChange={handleChange}
                error={errors.to && touched.to ? errors.to : null}
              />
              <InputField
                label="Price"
                name="price"
                placeholder="Enter price"
                type="number"
                onChange={handleChange}
                error={errors.price && touched.price ? errors.price : null}
              />
              <InputField
                label="Flight Number"
                name="flightsNumber"
                placeholder="Enter flight number"
                type="number"
                onChange={handleChange}
                error={
                  errors.flightsNumber && touched.flightsNumber
                    ? errors.flightsNumber
                    : null
                }
              />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <Spinner /> : "Create"}
            </Button>
          </Form>
        )}
      </Formik>
    </DefaultLayout>
  );
};

export default CreateFlight;

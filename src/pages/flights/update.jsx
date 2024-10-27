import { Formik, Form } from "formik";
import { InputField } from "@/components/Umrah";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/common";
import DefaultLayout from "@/layout/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FlightsSchema from "@/schema/Flights";
import { useDispatch, useSelector } from "react-redux";
import {
  getFlights,
  getSingleFlight,
  updateFlight,
} from "@/store/features/flights/service";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { CurrentFlightData } from "@/store/selector";

const UpdateFlight = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentPage = 1, perPage = 12 } = useSelector(
    (state) => state.pagination,
  );
  const {
    flight: {
      airline = "",
      flightsNumber = "",
      from = "",
      price = "",
      to = "",
    } = {},
  } = useSelector(CurrentFlightData) || {};

  const initialValues = {
    airline,
    from,
    to,
    price,
    flightsNumber,
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true);
      const resultAction = await dispatch(
        updateFlight({ id, values }),
      ).unwrap();

      if (resultAction) {
        resetForm();
        navigate("/flights");
        dispatch(getFlights({ page: currentPage, limit: perPage }));
      }
    } catch (error) {
      console.error("Failed to create flight:", error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(getSingleFlight(id));
    }
  }, [dispatch, id]);

  return (
    <DefaultLayout>
      <Breadcrumb />
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={FlightsSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleChange, errors, touched, values }) => (
          <Form className="space-y-4">
            {console.log(values)}
            <div className="grid grid-cols-1 gap-4 rounded-lg bg-white px-5 py-10 shadow-xl md:grid-cols-2">
              <InputField
                label="Airline"
                name="airline"
                value={values.airline}
                placeholder="Enter airline name"
                onChange={handleChange}
                error={
                  errors.airline && touched.airline ? errors.airline : null
                }
              />
              <InputField
                label="From"
                name="from"
                value={values.from}
                placeholder="Origin location"
                onChange={handleChange}
                error={errors.from && touched.from ? errors.from : null}
              />
              <InputField
                label="To"
                name="to"
                value={values.to}
                placeholder="Destination location"
                onChange={handleChange}
                error={errors.to && touched.to ? errors.to : null}
              />
              <InputField
                label="Price"
                name="price"
                value={values.price}
                placeholder="Enter price"
                type="number"
                onChange={handleChange}
                error={errors.price && touched.price ? errors.price : null}
              />
              <InputField
                label="Flight Number"
                name="flightsNumber"
                value={values.flightsNumber}
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
              {isSubmitting ? <Spinner /> : "Update"}
            </Button>
          </Form>
        )}
      </Formik>
    </DefaultLayout>
  );
};

export default UpdateFlight;

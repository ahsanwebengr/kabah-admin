import * as Yup from "yup";

const FlightsSchema = Yup.object({
  airline: Yup.string().required("Airline is required"),
  from: Yup.string().required("Origin is required"),
  to: Yup.string().required("Destination is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be positive"),
  flightsNumber: Yup.number()
    .required("Flight number is required")
    .integer("Flight number must be an integer"),
});

export default FlightsSchema;

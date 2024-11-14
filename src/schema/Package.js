import * as Yup from "yup";

const PackageSchema = (isUpdate = false) =>
  Yup.object().shape({
    heading: Yup.string().required("Heading is required"),
    price: Yup.number()
      .min(0, "Price cannot be negative")
      .required("Price is required"),
    from_date: Yup.date().when([], {
      is: () => !isUpdate,
      then: (schema) =>
        schema
          .min(new Date(), "From Date cannot be in the past")
          .required("From Date is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    to_date: Yup.date()
      .min(Yup.ref("from_date"), "To Date cannot be before From Date")
      .required("To Date is required"),
    description: Yup.string().required("Description is required"),
    departure_airport: Yup.string().required(
      "Please select a departure airport",
    ),
    transit_hub: Yup.string().required("Transit Hub is required"),
    makkah_hotel: Yup.object().shape({
      hotel_name: Yup.string().required("Makkah hotel name is required"),
      rating: Yup.string().required("Hotel rating is required"),
    }),
    medinah_hotel: Yup.object().shape({
      hotel_name: Yup.string().required("Medinah hotel name is required"),
      rating: Yup.string().required("Hotel rating is required"),
    }),
    visa_included: Yup.boolean(),
  });

export default PackageSchema;

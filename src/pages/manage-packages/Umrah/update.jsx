import { Spinner } from "@/common";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckboxField,
  FormSection,
  InputField,
  SelectField,
} from "@/components/Umrah";
import DefaultLayout from "@/layout/DefaultLayout";
import {
  AirportOptions,
  HotelOptions,
  UMRAH_PARAM,
} from "@/lib/constants/options";
import PackageSchema from "@/schema/Package";
import {
  getSinglePackage,
  updatePackage,
} from "@/store/features/packages/service";
import { SelectedPackage } from "@/store/selector";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUmrahPackage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    heading = "",
    price = "",
    description = "",
    hotels_rating = "",
    visa_included = false,
    flights = false,
    transport = false,
    sharing = false,
    free_ziyarahs = false,
    from_date = "",
    to_date = "",
    departure_airport = "",
    transit_hub = "",
    price_includes = {},
    price_excludes = {},
    complementarities = {},
    makkah_hotel = {},
    medinah_hotel = {},
    what_to_expect = {},
  } = useSelector(SelectedPackage) || {};

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      category: UMRAH_PARAM,
      heading,
      price,
      description,
      hotels_rating,
      visa_included,
      flights,
      transport,
      sharing,
      free_ziyarahs,
      from_date: from_date?.split("T")[0],
      to_date: to_date?.split("T")[0],
      departure_airport,
      transit_hub,
      price_includes,
      price_excludes,
      complementarities,
      makkah_hotel,
      medinah_hotel,
      what_to_expect,
    },
    validationSchema: PackageSchema(true),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        await dispatch(updatePackage({ id: id, data: values })).unwrap();
        navigate("/packages/umrah");
      } catch (error) {
        console.error(values);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const { values, errors, touched, handleChange, handleSubmit, isSubmitting } =
    formik;

  useEffect(() => {
    if (id) {
      dispatch(getSinglePackage(id));
    }
  }, [dispatch, id]);

  return (
    <DefaultLayout>
      <Breadcrumb />

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 rounded-lg bg-white px-5 py-10 shadow-xl md:grid-cols-2">
          <InputField
            label="Heading"
            name="heading"
            value={values.heading}
            onChange={handleChange}
            error={errors.heading && touched.heading ? errors.heading : null}
          />
          <InputField
            label="Price"
            name="price"
            type="number"
            value={values.price}
            onChange={handleChange}
            error={errors.price && touched.price ? errors.price : null}
          />
          <InputField
            label="From Date"
            name="from_date"
            type="date"
            value={values.from_date}
            onChange={handleChange}
            error={
              errors.from_date && touched.from_date ? errors.from_date : null
            }
          />
          <InputField
            label="To Date"
            name="to_date"
            type="date"
            value={values.to_date}
            onChange={handleChange}
            error={errors.to_date && touched.to_date ? errors.to_date : null}
          />
          <SelectField
            label="Hotels Rating"
            name="hotels_rating"
            value={values.hotels_rating}
            onChange={handleChange}
            options={HotelOptions}
          />
          <SelectField
            label="Departure Airport"
            name="departure_airport"
            value={values.departure_airport}
            onChange={handleChange}
            options={AirportOptions}
          />
          <InputField
            label="Transit Hub"
            name="transit_hub"
            value={values.transit_hub}
            onChange={handleChange}
            error={
              errors.transit_hub && touched.transit_hub
                ? errors.transit_hub
                : null
            }
          />
          <div className="md:col-span-2">
            <label
              htmlFor="description"
              className="mb-2 text-sm font-medium md:mb-4 md:text-base"
            >
              Description
            </label>
            <Textarea
              name="description"
              value={values.description}
              onChange={handleChange}
              placeholder="Package Description"
            />
            {errors.description && (
              <span className="text-sm text-red-500">
                {errors.description && touched.description
                  ? errors.description
                  : null}
              </span>
            )}
          </div>
        </div>

        <FormSection title="Features:">
          <CheckboxField
            name="visa_included"
            label="Visa Included"
            checked={values.visa_included}
            onChange={handleChange}
          />
          <CheckboxField
            name="flights"
            label="Flights"
            checked={values.flights}
            onChange={handleChange}
          />
          <CheckboxField
            name="transport"
            label="Transport"
            checked={values.transport}
            onChange={handleChange}
          />
          <CheckboxField
            name="sharing"
            label="Sharing"
            checked={values.sharing}
            onChange={handleChange}
          />
          <CheckboxField
            name="free_ziyarahs"
            label="free_ziyarahs"
            checked={values.free_ziyarahs}
            onChange={handleChange}
          />
        </FormSection>

        <FormSection title="Price Includes:">
          {Object.keys(values.price_includes).map((key) => (
            <CheckboxField
              key={key}
              name={`price_includes.${key}`}
              label={key}
              checked={values.price_includes[key]}
              onChange={handleChange}
            />
          ))}
        </FormSection>

        <FormSection title="Price Excludes:">
          {Object.keys(values.price_excludes).map((key) => (
            <CheckboxField
              key={key}
              name={`price_excludes.${key}`}
              label={key}
              checked={values.price_excludes[key]}
              onChange={handleChange}
            />
          ))}
        </FormSection>

        <FormSection title="Complementarities:">
          {Object.keys(values.complementarities).map((key) => (
            <CheckboxField
              key={key}
              name={`complementarities.${key}`}
              label={key}
              checked={values.complementarities[key]}
              onChange={handleChange}
            />
          ))}
        </FormSection>

        <FormSection title="Makkah Hotel:">
          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <InputField
              name="makkah_hotel.hotel_name"
              label="Hotel Name"
              value={values.makkah_hotel?.hotel_name}
              onChange={handleChange}
              error={
                errors.makkah_hotel?.hotel_name &&
                touched.makkah_hotel?.hotel_name
                  ? errors.makkah_hotel?.hotel_name
                  : null
              }
            />

            <SelectField
              name="makkah_hotel.rating"
              label="Rating"
              value={values.makkah_hotel?.rating}
              onChange={handleChange}
              options={HotelOptions}
            />
          </div>

          {Object.keys(values.makkah_hotel).map((key) => {
            if (
              key !== "hotel_name" &&
              key !== "rating" &&
              key !== "makkah_hotel_images"
            ) {
              return (
                <CheckboxField
                  key={key}
                  name={`makkah_hotel.${key}`}
                  label={key.replace(/_/g, " ")}
                  checked={values.makkah_hotel[key]}
                  onChange={handleChange}
                />
              );
            }
            return null;
          })}
        </FormSection>

        <FormSection title="Madinah Hotel:">
          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <InputField
              name="medinah_hotel.hotel_name"
              label="Hotel Name"
              value={values.medinah_hotel.hotel_name}
              onChange={handleChange}
              error={
                errors.medinah_hotel?.hotel_name &&
                touched.medinah_hotel?.hotel_name
                  ? errors.medinah_hotel?.hotel_name
                  : null
              }
            />

            <SelectField
              name="medinah_hotel.rating"
              label="Rating"
              value={values.medinah_hotel.rating}
              onChange={handleChange}
              options={HotelOptions}
            />
          </div>

          {Object.keys(values.medinah_hotel).map((key) => {
            if (
              key !== "hotel_name" &&
              key !== "rating" &&
              key !== "medinah_hotel_images"
            ) {
              return (
                <CheckboxField
                  key={key}
                  name={`medinah_hotel.${key}`}
                  label={key.replace(/_/g, " ")}
                  checked={values.medinah_hotel[key]}
                  onChange={handleChange}
                />
              );
            }
            return null;
          })}
        </FormSection>

        <FormSection title="What to Expect:">
          {Object.keys(values.what_to_expect).map((key) => (
            <CheckboxField
              key={key}
              name={`what_to_expect.${key}`}
              label={key}
              checked={values.what_to_expect[key]}
              onChange={handleChange}
            />
          ))}
        </FormSection>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Spinner /> : "Update"}
        </Button>
      </form>
    </DefaultLayout>
  );
};

export default UpdateUmrahPackage;

import { alt_img } from "@/assets/images";
import Breadcrumb from "@/components/Breadcrumb";
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
  BASE_URL,
  FOLDER_NAME,
  HotelOptions,
  UMRAH_PARAM,
} from "@/lib/constants/options";
import { getSinglePackage } from "@/store/features/packages/service";
import { SelectedPackage } from "@/store/selector";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewHajjPackage = () => {
  const { id } = useParams();
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
  });

  const { values, errors, touched, handleChange, handleSubmit } = formik;

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
            disabled={true}
            value={values.heading}
            onChange={handleChange}
            error={errors.heading && touched.heading ? errors.heading : null}
          />
          <InputField
            label="Price"
            name="price"
            type="number"
            disabled={true}
            value={values.price}
            onChange={handleChange}
            error={errors.price && touched.price ? errors.price : null}
          />
          <InputField
            label="From Date"
            name="from_date"
            type="date"
            disabled={true}
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
            disabled={true}
            value={values.to_date}
            onChange={handleChange}
            error={errors.to_date && touched.to_date ? errors.to_date : null}
          />
          <SelectField
            label="Hotels Rating"
            name="hotels_rating"
            disabled={true}
            value={values.hotels_rating}
            onChange={handleChange}
            options={HotelOptions}
          />
          <SelectField
            label="Departure Airport"
            name="departure_airport"
            disabled={true}
            value={values.departure_airport}
            onChange={handleChange}
            options={AirportOptions}
          />
          <InputField
            label="Transit Hub"
            name="transit_hub"
            disabled={true}
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
              disabled={true}
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
            disabled={true}
            checked={values.visa_included}
            onChange={handleChange}
          />
          <CheckboxField
            name="flights"
            label="Flights"
            disabled={true}
            checked={values.flights}
            onChange={handleChange}
          />
          <CheckboxField
            name="transport"
            label="Transport"
            disabled={true}
            checked={values.transport}
            onChange={handleChange}
          />
          <CheckboxField
            name="sharing"
            label="Sharing"
            disabled={true}
            checked={values.sharing}
            onChange={handleChange}
          />
          <CheckboxField
            name="free_ziyarahs"
            label="Free Ziyarahs"
            disabled={true}
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
              disabled={true}
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
              disabled={true}
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
              disabled={true}
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
              disabled={true}
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
              disabled={true}
              value={values.makkah_hotel?.rating}
              onChange={handleChange}
              options={HotelOptions}
            />
          </div>

          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {Object.keys(values.makkah_hotel).map((key) => {
              if (
                key !== "hotel_name" &&
                key !== "rating" &&
                key !== "makkah_hotel_images"
              ) {
                return (
                  <CheckboxField
                    key={key}
                    disabled={true}
                    name={`makkah_hotel.${key}`}
                    label={key.replace(/_/g, " ")}
                    checked={values.makkah_hotel[key]}
                    onChange={handleChange}
                  />
                );
              }
              return null;
            })}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-2 md:grid-cols-3">
            {values.makkah_hotel?.makkah_hotel_images?.map((image, index) => (
              <img
                key={index}
                src={`${BASE_URL}/${FOLDER_NAME}/${image}` || alt_img}
                alt={`Makkah Hotel ${index + 1}`}
                className="h-48 w-full rounded-md object-cover"
              />
            ))}
          </div>
        </FormSection>

        <FormSection title="Madinah Hotel:">
          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <InputField
              name="medinah_hotel.hotel_name"
              label="Hotel Name"
              disabled={true}
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
              disabled={true}
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
                  disabled={true}
                  name={`medinah_hotel.${key}`}
                  label={key.replace(/_/g, " ")}
                  checked={values.medinah_hotel[key]}
                  onChange={handleChange}
                />
              );
            }
            return null;
          })}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-2 md:grid-cols-3">
            {values.medinah_hotel?.medinah_hotel_images?.map((image, index) => (
              <img
                key={index}
                src={`${BASE_URL}/${FOLDER_NAME}/${image}` || alt_img}
                alt={`Makkah Hotel ${index + 1}`}
                className="h-48 w-full rounded-md object-cover"
              />
            ))}
          </div>
        </FormSection>

        <FormSection title="What to Expect:">
          {Object.keys(values.what_to_expect).map((key) => (
            <CheckboxField
              key={key}
              name={`what_to_expect.${key}`}
              label={key}
              disabled={true}
              checked={values.what_to_expect[key]}
              onChange={handleChange}
            />
          ))}
        </FormSection>
      </form>
    </DefaultLayout>
  );
};

export default ViewHajjPackage;

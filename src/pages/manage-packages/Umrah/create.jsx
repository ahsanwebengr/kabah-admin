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
import { createPackage } from "@/store/features/packages/service";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateUmrahPackage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      category: UMRAH_PARAM,
      heading: "",
      price: "",
      description: "",
      hotels_rating: "",
      visa_included: true,
      flights: true,
      transport: true,
      sharing: true,
      free_ziyarahs: true,
      from_date: "",
      to_date: "",
      departure_airport: "",
      transit_hub: "",
      price_includes: {
        visa_fee: true,
        return_flight_fares: true,
        days_21_hotel_accommodation: true,
        all_transportation_between_makkah_medinah_airport: true,
        ziyarahs_in_makkah_medinah: true,
        emergency_helpline_24_7: true,
        mina_services_with_ac_tents_mattress_pillow: true,
      },
      price_excludes: {
        extra_meals: true,
        any_private_expenses: true,
      },
      complementarities: {
        flight_refreshments: true,
        e_guide_Umrah_perform: true,
      },
      makkah_hotel: {
        hotel_name: "",
        rating: "",
        wheel_chair_friendly: true,
        walking_from_haram_7_to_10_mins: true,
        city_view: true,
        air_conditioned_rooms: true,
        wifi_available: true,
        breakfast_can_be_included: true,
      },
      medinah_hotel: {
        hotel_name: "",
        rating: "",
        wheel_chair_friendly: true,
        walking_from_haram_7_to_10_mins: true,
        city_view: true,
        air_conditioned_rooms: true,
        wifi_available: true,
        breakfast_can_be_included: true,
      },
      what_to_expect: {
        fly_from_uk_to_jeddah_airport: true,
        makkah_to_medinah_via_same_car: true,
        driver_picks_you_from_jeddah_airport: true,
        reach_medinah_hotel_check_in: true,
        reach_makkah_hotel_check_in: true,
        ziyarahs_in_medinah_private_car: true,
        ziyarahs_in_makkah_private_car_driver: true,
        driver_picks_you_up_back_to_jeddah_airport: true,
      },
    },
    validationSchema: PackageSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        setSubmitting(true);
        await dispatch(createPackage(values)).unwrap();
        resetForm();
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
            if (key !== "hotel_name" && key !== "rating") {
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
            if (key !== "hotel_name" && key !== "rating") {
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
          {isSubmitting ? <Spinner /> : "Submit"}
        </Button>
      </form>
    </DefaultLayout>
  );
};

export default CreateUmrahPackage;

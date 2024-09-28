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
import { createPackage } from "@/store/features/packages/service";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

const CreateUmrahPackage = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      category: UMRAH_PARAM,
      heading: "",
      price: "",
      description: "",
      hotels_rating: "",
      visa_included: true,
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
        qurbani: true,
      },
      price_excludes: {
        extra_meals: false,
        any_private_expenses: false,
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
    onSubmit: async (values) => {
      await dispatch(createPackage(values));
      console.log(values);
    },
  });

  return (
    <DefaultLayout>
      <Breadcrumb />

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 rounded-lg bg-white px-5 py-10 shadow-xl md:grid-cols-2">
          <InputField
            label="Heading"
            name="heading"
            value={formik.values.heading}
            onChange={formik.handleChange}
          />
          <InputField
            label="Price"
            name="price"
            type="number"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
          <InputField
            label="From Date"
            name="from_date"
            type="date"
            value={formik.values.from_date}
            onChange={formik.handleChange}
          />
          <InputField
            label="To Date"
            name="to_date"
            type="date"
            value={formik.values.to_date}
            onChange={formik.handleChange}
          />
          <SelectField
            label="Hotels Rating"
            name="hotels_rating"
            value={formik.values.hotels_rating}
            onChange={formik.handleChange}
            options={HotelOptions}
          />
          <SelectField
            label="Departure Airport"
            name="departure_airport"
            value={formik.values.departure_airport}
            onChange={formik.handleChange}
            options={AirportOptions}
          />
          <InputField
            label="Transit Hub"
            name="transit_hub"
            value={formik.values.transit_hub}
            onChange={formik.handleChange}
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
              value={formik.values.description}
              onChange={formik.handleChange}
              placeholder="Package Description"
            />
          </div>
        </div>

        <FormSection title="Features:">
          <CheckboxField
            name="visa_included"
            label="Visa Included"
            checked={formik.values.visa_included}
            onChange={formik.handleChange}
          />
        </FormSection>

        <FormSection title="Price Includes:">
          {Object.keys(formik.values.price_includes).map((key) => (
            <CheckboxField
              key={key}
              name={`price_includes.${key}`}
              label={key}
              checked={formik.values.price_includes[key]}
              onChange={formik.handleChange}
            />
          ))}
        </FormSection>

        <FormSection title="Price Excludes:">
          {Object.keys(formik.values.price_excludes).map((key) => (
            <CheckboxField
              key={key}
              name={`price_excludes.${key}`}
              label={key}
              checked={formik.values.price_excludes[key]}
              onChange={formik.handleChange}
            />
          ))}
        </FormSection>

        <FormSection title="Complementarities:">
          {Object.keys(formik.values.complementarities).map((key) => (
            <CheckboxField
              key={key}
              name={`complementarities.${key}`}
              label={key}
              checked={formik.values.complementarities[key]}
              onChange={formik.handleChange}
            />
          ))}
        </FormSection>

        <FormSection title="Makkah Hotel:">
          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <InputField
              name="makkah_hotel.hotel_name"
              label="Hotel Name"
              value={formik.values.makkah_hotel.hotel_name}
              onChange={formik.handleChange}
            />

            <SelectField
              name="makkah_hotel.rating"
              label="Rating"
              value={formik.values.makkah_hotel.rating}
              onChange={formik.handleChange}
              options={HotelOptions}
            />
          </div>

          {Object.keys(formik.values.makkah_hotel).map((key) => {
            if (key !== "hotel_name" && key !== "rating") {
              return (
                <CheckboxField
                  key={key}
                  name={`makkah_hotel.${key}`}
                  label={key.replace(/_/g, " ")}
                  checked={formik.values.makkah_hotel[key]}
                  onChange={formik.handleChange}
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
              value={formik.values.medinah_hotel.hotel_name}
              onChange={formik.handleChange}
            />

            <SelectField
              name="medinah_hotel.rating"
              label="Rating"
              value={formik.values.medinah_hotel.rating}
              onChange={formik.handleChange}
              options={HotelOptions}
            />
          </div>

          {Object.keys(formik.values.medinah_hotel).map((key) => {
            if (key !== "hotel_name" && key !== "rating") {
              return (
                <CheckboxField
                  key={key}
                  name={`medinah_hotel.${key}`}
                  label={key.replace(/_/g, " ")}
                  checked={formik.values.medinah_hotel[key]}
                  onChange={formik.handleChange}
                />
              );
            }
            return null;
          })}
        </FormSection>

        <FormSection title="What to Expect:">
          {Object.keys(formik.values.what_to_expect).map((key) => (
            <CheckboxField
              key={key}
              name={`what_to_expect.${key}`}
              label={key}
              checked={formik.values.what_to_expect[key]}
              onChange={formik.handleChange}
            />
          ))}
        </FormSection>

        <Button type="submit">Submit</Button>
      </form>
    </DefaultLayout>
  );
};

export default CreateUmrahPackage;

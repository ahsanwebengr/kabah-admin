import { Loader } from "@/common";
import Breadcrumb from "@/components/Breadcrumb";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DefaultLayout from "@/layout/DefaultLayout";
import { getSingleContacts } from "@/store/features/contacts/service";
import { CurrentContactLoading, CurrentContactsData } from "@/store/selector";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewContactDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(CurrentContactsData);
  const isLoading = useSelector(CurrentContactLoading);

  useEffect(() => {
    if (id) {
      dispatch(getSingleContacts(id));
    }
  }, [dispatch, id]);

  const fields = [
    { label: "Full Name", key: "full_name", type: "text" },
    { label: "Email", key: "email", type: "email" },
    { label: "Contact No.", key: "contact_no", type: "text" },
    { label: "Subject", key: "subject", type: "text" },
    { label: "Departure Airport", key: "departure_airport", type: "text" },
    {
      label: "Hotel Category",
      key: "hotel_category",
      type: "text",
      transform: (value) => value.replace("_", " ").toUpperCase(),
    },
    {
      label: "Departure Date",
      key: "departure_date",
      type: "date",
      transform: (value) => new Date(value).toISOString().split("T")[0],
    },
    {
      label: "Arrival Date",
      key: "arrival_date",
      type: "date",
      transform: (value) => new Date(value).toISOString().split("T")[0],
    },
    { label: "Nights in Makkah", key: "nights_in_makkah", type: "number" },
    { label: "Nights in Madinah", key: "nights_in_madinah", type: "number" },
    {
      label: "Number of Passengers",
      key: "number_of_passengers",
      type: "number",
    },
    { label: "Children", key: "children", type: "number" },
    {
      label: "Status",
      key: "status",
      type: "text",
      transform: (value) => value.charAt(0).toUpperCase() + value.slice(1),
      statusColor: true,
    },
    { label: "Message", key: "your_message", type: "textarea" },
  ];

  if (isLoading) {
    return <Loader />;
  }
  return (
    <DefaultLayout>
      <Breadcrumb />
      <form className="grid grid-cols-1 gap-4 rounded-lg bg-white px-5 py-10 shadow-xl md:grid-cols-2">
        {fields.map((field) => {
          const value = data?.[field?.key];
          if (value === undefined) return null;

          const transformedValue = field?.transform
            ? field?.transform(value)
            : value;

          return field.type === "textarea" ? (
            <div key={field?.key} className="col-span-2">
              <label htmlFor={field?.key}>{field?.label}</label>
              <Textarea
                id={field.key}
                value={transformedValue}
                disabled
                className="bg-gray-100 text-gray-600"
              />
            </div>
          ) : (
            <div key={field.key}>
              <label htmlFor={field.key}>{field.label}</label>
              <Input
                id={field.key}
                type={field.type}
                value={transformedValue}
                disabled
                className={`bg-gray-100 text-gray-600 ${
                  field.statusColor
                    ? value === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                    : ""
                }`}
              />
            </div>
          );
        })}
      </form>
    </DefaultLayout>
  );
};

export default ViewContactDetail;

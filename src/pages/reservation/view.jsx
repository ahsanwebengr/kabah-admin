import { Loader } from "@/common";
import Breadcrumb from "@/components/Breadcrumb";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DefaultLayout from "@/layout/DefaultLayout";
import { getSingleReservation } from "@/store/features/contacts/service";
import {
  CurrentReservationData,
  CurrReservationLoading,
} from "@/store/selector";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewReservationDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(CurrentReservationData);
  const isLoading = useSelector(CurrReservationLoading);

  useEffect(() => {
    if (id) {
      dispatch(getSingleReservation(id));
    }
  }, [dispatch, id]);

  const fields = [
    { label: "Full Name", key: "full_name", type: "text" },
    { label: "Email", key: "email", type: "email" },
    { label: "Contact No.", key: "contact_no", type: "text" },
    {
      label: "Number of Passengers",
      key: "passengers",
      type: "number",
    },
    { label: "Children", key: "children", type: "number" },
    { label: "Departure Date", key: "departure_date", type: "text" },
    { label: "Package", key: "plan_id.category", type: "text" },
    { label: "Additional Info", key: "additional_info", type: "textarea" },
  ];

  if (isLoading) {
    return <Loader />;
  }
  return (
    <DefaultLayout>
      <Breadcrumb />
      <form className="grid grid-cols-1 gap-4 rounded-lg bg-white px-5 py-10 shadow-xl md:grid-cols-2">
        {fields?.map((field) => {
          let value;
          if (field.key === "plan_id.category") {
            value = data?.plan_id?.category;
          } else {
            value = data?.[field.key];
          }

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

export default ViewReservationDetail;

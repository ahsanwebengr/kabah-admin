import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import DefaultLayout from "@/layout/DefaultLayout";
import {
  getSingleReservation,
  updateReservation,
} from "@/store/features/contacts/service";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const UpdateReservation = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status: currentStatus = "" } =
    useSelector((state) => state?.contact?.currentReservation?.data?.order) ||
    {};

  const [status, setStatus] = useState(currentStatus);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateReservation({ id, status })).unwrap();
    navigate("/reservation");
  };

  useEffect(() => {
    if (currentStatus) {
      setStatus(currentStatus);
    }
  }, [currentStatus]);

  useEffect(() => {
    if (id) {
      dispatch(getSingleReservation(id));
    }
  }, [dispatch, id]);

  return (
    <DefaultLayout>
      <Breadcrumb />
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label htmlFor="status">Update Status</label>
        <div className="grid grid-cols-[1fr_auto] gap-2">
          <select
            id="status"
            value={status}
            onChange={handleStatusChange}
            className="h-12"
          >
            <option value="pending" selected={status === "pending"}>
              Pending
            </option>
            <option value="complete" selected={status === "pending"}>
              Complete
            </option>
          </select>

          <Button>Update Status</Button>
        </div>
      </form>
    </DefaultLayout>
  );
};

export default UpdateReservation;

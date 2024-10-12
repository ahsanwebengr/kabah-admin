import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import DefaultLayout from "@/layout/DefaultLayout";
import {
  getSingleContacts,
  updateStatus,
} from "@/store/features/contacts/service";
import { CurrentContactsData } from "@/store/selector";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const UpdateContactDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status: currentStatus = "" } = useSelector(CurrentContactsData) || {};

  const [status, setStatus] = useState(currentStatus);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateStatus({ id, status })).unwrap();
    navigate("/contacts");
  };

  useEffect(() => {
    if (currentStatus) {
      setStatus(currentStatus);
    }
  }, [currentStatus]);

  useEffect(() => {
    if (id) {
      dispatch(getSingleContacts(id));
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
            <option value="pending">Pending</option>
            <option value="complete">Complete</option>
          </select>

          <Button>Update Status</Button>
        </div>
      </form>
    </DefaultLayout>
  );
};

export default UpdateContactDetail;

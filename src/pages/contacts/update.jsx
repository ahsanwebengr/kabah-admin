import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import DefaultLayout from "@/layout/DefaultLayout";
import { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateContactDetail = () => {
  const { id } = useParams();
  const [status, setStatus] = useState("pending");

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected status:", status, id);
  };

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

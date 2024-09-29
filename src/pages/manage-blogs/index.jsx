import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import DefaultLayout from "@/layout/DefaultLayout";
import { useNavigate } from "react-router-dom";

const ManageBlogs = () => {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <Breadcrumb />
      <div className="mb-2 text-end md:mb-4">
        <Button onClick={() => navigate("/packages/umrah/create")}>
          Add New
        </Button>
      </div>
      <h1 className="my-5 text-primary">Working in Process</h1>
    </DefaultLayout>
  );
};

export default ManageBlogs;

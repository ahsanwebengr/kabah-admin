import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DefaultLayout from "@/layout/DefaultLayout";

const UpdateUmrahPackage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb />
      <div className="rounded-sm border bg-white p-6 shadow-lg">
        <div className="grid grid-cols-1 gap-4 md:mb-7 md:grid-cols-2">
          <Input placeholder="Enter name" />
          <Input placeholder="Enter name" />
          <Input placeholder="Enter name" />
          <Input placeholder="Enter name" />
          <Input placeholder="Enter name" />
          <Input placeholder="Enter name" />
          <Input placeholder="Enter name" />
          <Input placeholder="Enter name" />
        </div>
        <Button>Update</Button>
      </div>
    </DefaultLayout>
  );
};

export default UpdateUmrahPackage;

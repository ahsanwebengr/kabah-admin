import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useSelector, useDispatch } from "react-redux";
import { MediaLoading, PackagesData } from "@/store/selector";
import { updatePlanMedia } from "@/store/features/media/service";
import { Spinner } from "@/common";
import { getPackages } from "@/store/features/packages/service";

const AddMedia = () => {
  const dispatch = useDispatch();
  const { plans = [] } = useSelector(PackagesData) || {};
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [selectedImagePreview, setSelectedImagePreview] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const loading = useSelector(MediaLoading);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImageFile(file);
      setSelectedImagePreview(URL.createObjectURL(file));
    } else {
      setSelectedImageFile(null);
      setSelectedImagePreview(null);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("id", selectedPackage);
    formData.append("thumbnail", selectedImageFile);

    try {
      await dispatch(updatePlanMedia({ id: selectedPackage, data: formData }));
      await dispatch(getPackages({ page: 1, limit: 1000 }));

      setSelectedPackage("");
      setSelectedImageFile(null);
      setSelectedImagePreview(null);

      setIsOpen(false);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <div className="flex justify-end">
          <Button onClick={() => setIsOpen(true)}>Add Media</Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Media for Package</DialogTitle>
          <DialogDescription>
            <div className="mb-2">
              <label htmlFor="package">Select Package</label>
              <select
                id="package"
                className="w-full rounded-md border p-2.5"
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
              >
                <option value="">Select a package</option>
                {plans?.map((plan) => {
                  const { _id, heading, category } = plan;
                  return (
                    <option key={_id} value={_id}>
                      {heading} ({category})
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-2">
              <label htmlFor="thumbnail">Add Image</label>
              <input
                type="file"
                id="thumbnail"
                className="w-full rounded-md border p-2.5"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            {selectedImagePreview && (
              <div className="mt-2">
                <p className="text-sm text-gray-500">Image Preview:</p>
                <img
                  src={selectedImagePreview}
                  alt="Selected"
                  className="mt-2 h-40 w-full rounded-md object-cover"
                />
              </div>
            )}

            {selectedPackage && selectedImageFile && (
              <Button
                onClick={handleSubmit}
                className="mt-4"
                disabled={loading}
              >
                {loading ? <Spinner /> : "Save Changes"}
              </Button>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddMedia;

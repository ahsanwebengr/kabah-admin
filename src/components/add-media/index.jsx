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
import { MediaLoading } from "@/store/selector";
import { updatePlanMedia } from "@/store/features/media/service";
import { Spinner } from "@/common";
import { getPackages } from "@/store/features/packages/service";

const AddMedia = ({ category }) => {
  const dispatch = useDispatch();
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [selectedImagePreview, setSelectedImagePreview] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { currentPage = 1, perPage = 12 } = useSelector(
    (state) => state.pagination,
  );

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
      dispatch(
        getPackages({
          page: currentPage,
          limit: perPage,
          category: category,
        }),
      );

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
      <div className="flex justify-end">
        <DialogTrigger>
          <Button onClick={() => setIsOpen(true)}>Add Media</Button>
        </DialogTrigger>
      </div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Media for Package</DialogTitle>
          <DialogDescription>
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

            {selectedImageFile && (
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

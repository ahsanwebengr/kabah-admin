import { useSelector } from "react-redux";
import { MediaLoading } from "@/store/selector";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { Spinner } from "@/common";
import { useState } from "react";

const AddMediaModal = ({ isOpen, setIsOpen, handleSubmit }) => {
  const loading = useSelector(MediaLoading);

  const [thumbnail, setThumbnail] = useState(null);
  const [makkahHotelImages, setMakkahHotelImages] = useState([]);
  const [medinahHotelImages, setMedinahHotelImages] = useState([]);

  const handleThumbnailChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setThumbnail(file);
    }
  };

  const handleMakkahImagesChange = (event) => {
    const files = Array.from(event.target.files);
    setMakkahHotelImages(files);
  };

  const handleMedinahImagesChange = (event) => {
    const files = Array.from(event.target.files);
    setMedinahHotelImages(files);
  };

  const handleFormSubmit = () => {
    const formData = new FormData();

    if (thumbnail) formData.append("thumbnail", thumbnail);
    makkahHotelImages.forEach((file) =>
      formData.append("makkah_hotel_images", file),
    );
    medinahHotelImages.forEach((file) =>
      formData.append("medinah_hotel_images", file),
    );

    // Submit the form data
    handleSubmit(formData);
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <h3>Add Media for Package</h3>
          </DialogHeader>

          <div className="mb-2">
            <label htmlFor="thumbnail">Add Main Image</label>
            <input
              type="file"
              id="thumbnail"
              className="w-full rounded-md border p-2.5"
              accept="image/*"
              onChange={handleThumbnailChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="makkahImages">
              Add Makkah Hotel Images (optional)
            </label>
            <input
              type="file"
              id="makkahImages"
              className="w-full rounded-md border p-2.5"
              accept="image/*"
              multiple
              onChange={handleMakkahImagesChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="medinahImages">
              Add Medinah Hotel Images (optional)
            </label>
            <input
              type="file"
              id="medinahImages"
              className="w-full rounded-md border p-2.5"
              accept="image/*"
              multiple
              onChange={handleMedinahImagesChange}
            />
          </div>

          <Button
            onClick={handleFormSubmit}
            className="mt-4"
            disabled={loading}
          >
            {loading ? <Spinner /> : "Save Changes"}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddMediaModal;

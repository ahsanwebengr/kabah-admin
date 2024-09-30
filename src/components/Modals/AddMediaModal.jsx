import { useSelector } from "react-redux";
import { MediaLoading } from "@/store/selector";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { Spinner } from "@/common";

const AddMediaModal = ({
  isOpen,
  setIsOpen,
  handleSubmit,
  selectedImageFile,
  setSelectedImageFile,
  selectedImagePreview,
  setSelectedImagePreview,
}) => {
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

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <h3>Add Media for Package</h3>
          </DialogHeader>
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
            <Button onClick={handleSubmit} className="mt-4" disabled={loading}>
              {loading ? <Spinner /> : "Save Changes"}
            </Button>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddMediaModal;

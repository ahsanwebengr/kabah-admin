import * as Yup from "yup";

const TestimonialsSchema = (isUpdate = false) =>
  Yup.object().shape({
    name: Yup.string().required("Name is required"),
    review: Yup.string()
      .required("Review is required")
      .min(10, "Review must be at least 10 characters"),
    platform: Yup.string().required("Platform is required"),
    rating: Yup.number()
      .required("Rating is required")
      .min(1, "Rating must be at least 1 characters")
      .max(5, "Rating can't exceed 5 characters"),
    image: isUpdate
      ? Yup.mixed()
      : Yup.mixed()
          .required("Image is required")
          .test(
            "fileSize",
            "File size is too large. Max size is 5MB",
            (value) => !value || (value && value.size <= 5242880), // 5MB
          )
          .test(
            "fileType",
            "Unsupported file format. Only jpg, jpeg, png are allowed",
            (value) =>
              !value ||
              (value &&
                ["image/jpeg", "image/png", "image/jpg"].includes(value.type)),
          ),
  });

export default TestimonialsSchema;

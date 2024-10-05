import * as Yup from "yup";

const BlogSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title must not exceed 100 characters"),
  description: Yup.string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters"),
  content: Yup.string()
    .required("Content is required")
    .min(10, "Content must be at least 10 characters"),
  image: Yup.mixed()
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

export default BlogSchema;

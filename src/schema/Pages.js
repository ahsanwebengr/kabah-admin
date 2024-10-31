import * as Yup from "yup";

const PagesSchema = () =>
  Yup.object().shape({
    title: Yup.string()
      .required("Title is required")
      .min(5, "Title must be at least 5 characters")
      .max(100, "Title must not exceed 100 characters"),
    content: Yup.string()
      .required("Content is required")
      .min(10, "Content must be at least 10 characters"),
  });

export default PagesSchema;

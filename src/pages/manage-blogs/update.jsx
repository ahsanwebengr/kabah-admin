import { Spinner } from "@/common";
import Breadcrumb from "@/components/Breadcrumb";
import TextEditor from "@/components/TextEditor";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { InputField } from "@/components/Umrah";
import DefaultLayout from "@/layout/DefaultLayout";
import BlogSchema from "@/schema/Blog";
import { getSingleBlog, updateBlog } from "@/store/features/blogs/service";
import { CurrentBlogData } from "@/store/selector";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    image = "",
    title = "",
    content = "",
    description = "",
  } = useSelector(CurrentBlogData) || {};

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title,
      description,
      content,
      image,
    },
    validationSchema: BlogSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("content", values.content);
      if (values.image) {
        formData.append("image", values.image);
      }

      try {
        setSubmitting(true);
        await dispatch(updateBlog({ id, data: formData }));
        resetForm();
        navigate("/blogs");
      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = formik;

  const handleFileChange = (e) => {
    setFieldValue("image", e.target.files[0]);
  };

  useEffect(() => {
    if (id) {
      dispatch(getSingleBlog(id));
    }
  }, [dispatch, id]);

  return (
    <DefaultLayout>
      <Breadcrumb />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 rounded-lg bg-white px-5 py-10 shadow-xl md:grid-cols-2">
          <InputField
            type="file"
            label="Image"
            name="image"
            onChange={handleFileChange}
            error={errors.image && touched.image ? errors.image : null}
          />
          <InputField
            label="Title"
            name="title"
            value={values.title}
            onChange={handleChange}
            error={errors.title && touched.title ? errors.title : null}
          />
          <div className="md:col-span-2">
            <label
              htmlFor="description"
              className="mb-2 text-sm font-medium md:mb-4 md:text-base"
            >
              Description
            </label>
            <Textarea
              name="description"
              value={values.description}
              onChange={handleChange}
              placeholder="Blog Description"
            />
            {errors.description && touched.description && (
              <span className="text-sm text-red-500">{errors.description}</span>
            )}
          </div>
          <div className="col-span-2">
            <TextEditor
              height={300}
              label="Content"
              placeholder="Start typing..."
              id="content-editor"
              name="content"
              value={values.content}
              readOnly={false}
              onChange={(content) => setFieldValue("content", content)}
            />
            {errors.content && touched.content && (
              <span className="text-sm text-red-500">{errors.content}</span>
            )}
          </div>
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Spinner /> : "Update"}
        </Button>
      </form>
    </DefaultLayout>
  );
};

export default UpdateBlog;

import { alt_img } from "@/assets/images";
import Breadcrumb from "@/components/Breadcrumb";
import TextEditor from "@/components/TextEditor";
import { Textarea } from "@/components/ui/textarea";
import { InputField } from "@/components/Umrah";
import DefaultLayout from "@/layout/DefaultLayout";
import { BASE_URL } from "@/lib/constants/options";
import { getSingleBlog } from "@/store/features/blogs/service";
import { CurrentBlogData } from "@/store/selector";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
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
  });

  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    formik;

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
          <div className="col-span-2">
            <img
              src={`${BASE_URL}blogs/${image}`}
              alt="Blog image"
              onError={(e) => (e.target.src = alt_img)}
            />
          </div>
          <div className="col-span-2">
            <InputField
              label="Title"
              name="title"
              disabled
              value={values.title}
              onChange={handleChange}
              error={errors.title && touched.title ? errors.title : null}
            />
          </div>
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
              disabled
              onChange={handleChange}
              placeholder="Blog Description"
            />
          </div>
          <div className="col-span-2">
            <TextEditor
              height={300}
              label="Content"
              placeholder="Start typing..."
              id="content-editor"
              readOnly
              name="content"
              value={values.content}
              onChange={(content) => setFieldValue("content", content)}
            />
          </div>
        </div>
      </form>
    </DefaultLayout>
  );
};

export default ViewBlog;

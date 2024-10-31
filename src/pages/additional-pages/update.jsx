import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "@/common";
import Breadcrumb from "@/components/Breadcrumb";
import TextEditor from "@/components/TextEditor";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/Umrah";
import DefaultLayout from "@/layout/DefaultLayout";
import {
  getOnePage,
  updateAdditionalPage,
} from "@/store/features/additional-pages/service";
import { useEffect } from "react";
import { CurrentPagesData } from "@/store/selector";
import PagesSchema from "@/schema/Pages";

const UpdateAdditonalPages = () => {
  const { id, slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { page: { content = "", title = "" } = {} } =
    useSelector(CurrentPagesData) || {};

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title,
      content,
    },
    validationSchema: PagesSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        setSubmitting(true);
        await dispatch(updateAdditionalPage({ id, data: values })).unwrap();
        resetForm();
        navigate("/additional-pages");
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

  useEffect(() => {
    if (slug) {
      dispatch(getOnePage(slug));
    }
  }, [dispatch, slug]);

  return (
    <DefaultLayout>
      <Breadcrumb />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 rounded-lg bg-white px-5 py-10 shadow-xl md:grid-cols-2">
          <InputField
            label="Title"
            name="title"
            value={values.title}
            onChange={handleChange}
            error={errors.title && touched.title ? errors.title : null}
          />

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

export default UpdateAdditonalPages;

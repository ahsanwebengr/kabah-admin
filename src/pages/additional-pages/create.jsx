import { Spinner } from "@/common";
import Breadcrumb from "@/components/Breadcrumb";
import TextEditor from "@/components/TextEditor";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/Umrah";
import DefaultLayout from "@/layout/DefaultLayout";
import PagesSchema from "@/schema/Pages";
import { createAdditionalPage } from "@/store/features/additional-pages/service";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateAdditonalPages = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    validationSchema: PagesSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        setSubmitting(true);
        await dispatch(createAdditionalPage(values)).unwrap();
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
          {isSubmitting ? <Spinner /> : "Create"}
        </Button>
      </form>
    </DefaultLayout>
  );
};

export default CreateAdditonalPages;

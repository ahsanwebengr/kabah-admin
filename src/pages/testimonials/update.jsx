import { Spinner } from "@/common";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { InputField } from "@/components/Umrah";
import DefaultLayout from "@/layout/DefaultLayout";
import TestimonialsSchema from "@/schema/Testimonials";
import { getTestimonial, updateReview } from "@/store/features/reviews/service";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTestimonials = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    rating = "",
    review = "",
    name = "",
    image = null,
    platform = "",
  } = useSelector((state) => state?.review?.currentReview?.data?.testimonial) ||
  {};

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      rating,
      review,
      name,
      image,
      platform,
    },
    validationSchema: TestimonialsSchema(true),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("rating", values.rating);
      formData.append("review", values.review);
      formData.append("platform", values.platform);
      if (values.image) {
        formData.append("image", values.image);
      }

      try {
        setSubmitting(true);
        await dispatch(updateReview({ id, data: formData })).unwrap();
        resetForm();
        navigate("/testimonials");
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
      dispatch(getTestimonial(id));
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
            label="User Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={errors.name && touched.name ? errors.name : null}
          />
          <InputField
            label="Platform"
            name="platform"
            value={values.platform}
            onChange={handleChange}
            error={errors.platform && touched.platform ? errors.platform : null}
          />
          <InputField
            label="Rating"
            name="rating"
            type="number"
            value={values.rating}
            onChange={handleChange}
            error={errors.rating && touched.rating ? errors.rating : null}
          />
          <div className="md:col-span-2">
            <label
              htmlFor="review"
              className="mb-2 text-sm font-medium md:mb-4 md:text-base"
            >
              Review
            </label>
            <Textarea
              name="review"
              value={values.review}
              onChange={handleChange}
              placeholder="Blog review"
            />
            {errors.review && touched.review && (
              <span className="text-sm text-red-500">{errors.review}</span>
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

export default UpdateTestimonials;

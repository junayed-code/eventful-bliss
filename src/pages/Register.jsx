import Field from "../components/input-fields/Field";
import FieldPassword from "../components/input-fields/FieldPassword";
import FieldCheckbox from "../components/input-fields/FieldCheckbox";
import Button from "../components/Button";
import Section from "../components/Section";
import { FcGoogle } from "react-icons/fc";
import { registerSchema } from "../schemas";
import useAuth from "../hooks/useAuth";
import { Form, Link } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const initialValues = {
  uname: "",
  email: "",
  password: "",
  photoURL: "",
};

export default function Register() {
  const { createNewUser, logInWithGoogle } = useAuth();

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues,
      validationSchema: registerSchema,
      onSubmit: async (values, { resetForm, setFieldError, setSubmitting }) => {
        try {
          const { uname, email, password, photoURL } = values;
          await createNewUser(uname, email, password, photoURL);

          // Clear the form field.
          resetForm();
          toast("Wow, you successfully register your account!");
        } catch (err) {
          setSubmitting(false);
          if (err.code === "auth/email-already-in-use") {
            setFieldError("email", "This email is already used");
            toast("This email is already used");
          }
        }
      },
    });

  const handleLogInWithGoogle = () => {
    logInWithGoogle();
  };

  return (
    <Section className="min-h-[calc(100vh-80px)] grid place-items-center px-4 py-8">
      <Section.Content className="bg-white p-6  max-w-lg w-full rounded-md">
        <h3 className="text-2xl font-bold text-center mb-5">
          Register your account
        </h3>
        <Form
          onSubmit={handleSubmit}
          className="max-w-sm mx-auto flex flex-col gap-2"
        >
          <Field
            label={
              <>
                Your name
                <span className="text-red-500 text-xl leading-none">*</span>
              </>
            }
            id="uname"
            placeholder="Enter your name"
            value={values.uname}
            error={touched.uname && errors.uname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Field
            label="Photo URL"
            id="photoURL"
            placeholder="Enter photo URL"
            value={values.photoURL}
            error={touched.photoURL && errors.photoURL}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Field
            label={
              <>
                Your email
                <span className="text-red-500 text-xl leading-none">*</span>
              </>
            }
            type="email"
            id="email"
            placeholder="Enter your email"
            value={values.email}
            error={touched.email && errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldPassword
            label={
              <>
                Your password
                <span className="text-red-500 text-xl leading-none">*</span>
              </>
            }
            id="password"
            placeholder="Enter your password"
            value={values.password}
            error={touched.password && errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldCheckbox className="mt-1" id="terms">
            Accept{" "}
            <Link className="text-blue-600 hover:underline">
              Term & Conditions
            </Link>
          </FieldCheckbox>
          <Button type="submit" className="text-lg btn-neutral mt-3">
            Register
          </Button>

          <div className="divider">OR</div>

          <Button
            onClick={handleLogInWithGoogle}
            className="text-lg btn-outline w-full flex items-center gap-2 mb-2"
          >
            <FcGoogle className="text-xl mt-[2px]" />
            Login with Google
          </Button>

          <p className="mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </Form>
      </Section.Content>
    </Section>
  );
}

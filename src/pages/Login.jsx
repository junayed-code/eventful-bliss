import Field from "../components/input-fields/Field";
import FieldPassword from "../components/input-fields/FieldPassword";
import Button from "../components/Button";
import Section from "../components/Section";
import { FcGoogle } from "react-icons/fc";
import { logInSchema } from "../schemas";
import useAuth from "../hooks/useAuth";
import { Form, Link, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const { state } = useLocation();
  const { logIn, logInWithGoogle } = useAuth();

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues,
      validationSchema: logInSchema,
      onSubmit: async (values, { resetForm, setFieldError, setSubmitting }) => {
        try {
          const { email, password } = values;
          await logIn(email, password);

          // Clear the form field and navigate the home page.
          resetForm();
          toast("You are logged in.");
        } catch {
          toast("Your email or password incorrect!");
          setFieldError(
            "password",
            "Incorrect email or password! Please try again."
          );
          setSubmitting(false);
        }
      },
    });

  const handleLogInWithGoogle = () => {
    logInWithGoogle();
  };

  return (
    <Section className="min-h-[calc(100vh-80px)] grid place-items-center px-4 py-8">
      <Section.Content className="bg-white p-6  max-w-lg w-full my-5 rounded-md">
        <h3 className="text-2xl font-bold text-center mb-5">
          Login your account
        </h3>
        <Form
          onSubmit={handleSubmit}
          className="max-w-sm mx-auto flex flex-col gap-2"
        >
          <Field
            label="Your Email"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={values.email}
            error={touched.email && errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldPassword
            id="password"
            label="Your password"
            placeholder="Enter your password"
            value={values.password}
            error={touched.password && errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Button type="submit" className="text-lg btn-neutral mt-3">
            Login
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
            New to Eventful Bliss?{" "}
            <Link
              state={state}
              to="/register"
              className="text-blue-500 hover:underline"
            >
              Register
            </Link>
          </p>
        </Form>
      </Section.Content>
    </Section>
  );
}

import { Form, Link, useActionData } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useEffect } from "react";
export const action = async ({ request }) => {
  let formData = await request.formData();
  let displayName = formData.get("displayName");
  let photoURL = formData.get("photoURL");
  let email = formData.get("email");
  let password = formData.get("password");
  return { displayName, photoURL, email, password };
};
import { useRegister } from "../hooks/useRegister";
function Register() {
  const { isPending, registerWithGoogle, registerEmailAndPassword } =
    useRegister();
  const userData = useActionData();
  useEffect(() => {
    if (userData) {
      registerEmailAndPassword(
        userData.email,
        userData.password,
        userData.displayName,
        userData.photoURL
      );
    }
  }, [userData]);

  return (
    <div className="auth-container">
      <div className="auth-left">1</div>
      <div className=" auth-right">
        <Form
          method="post"
          className="flex flex-col gap-2 w-96 bg-base-100 shadow-xl p-8"
        >
          <h1 className="text-3xl font-semibold text-center">Register</h1>
          <FormInput name="displayName" type="text" label="your name" />
          <FormInput name="photoURL" type="url" label="your image" />
          <FormInput name="email" type="email" label="email" />
          <FormInput name="password" type="password" label="password" />
          <div className="mt-6">
            {isPending && (
              <button
                disabled
                type="button"
                className="btn btn-secondary btn-block"
              >
                Loanding...
              </button>
            )}
            {!isPending && (
              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
            )}
          </div>
          <div className="w-full">
            {isPending && (
              <button
                disabled
                type="button"
                className="btn btn-secondary btn-block"
              >
                Loanding...
              </button>
            )}
            {!isPending && (
              <button
                type="button"
                onClick={registerWithGoogle}
                className="btn btn-secondary btn-block"
              >
                Google
              </button>
            )}
          </div>
          <div className="text-center">
            <p className=" text-slate-500 gap-2">
              If you have an account,{"  "}
              <Link className="link link-primary" to="/login">
                Login
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;

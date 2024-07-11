import { Form, Link, useActionData } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useEffect } from "react";
export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};
import { useRegister } from "../hooks/useRegister";
import { useLogin } from "../hooks/useLogin";
function Login() {
  const { isPending, registerWithGoogle } = useRegister();
  const { isPending: isPendingLogin, signIn } = useLogin();
  const userData = useActionData();
  useEffect(() => {
    if (userData) {
      signIn(userData.email, userData.password);
    }
  }, [userData]);

  return (
    <div className="auth-container">
      <div className="auth-left">1</div>
      <div className=" auth-right">
        <Form
          method="post"
          className="flex flex-col gap-5 w-96 bg-base-100 shadow-xl p-8"
        >
          <h1 className="text-3xl font-semibold text-center">Login</h1>
          <FormInput name="email" type="email" label="email" />
          <FormInput name="password" type="password" label="password" />
          <div>
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
                Login
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
              If you don't have an account,{"  "}
              <Link className="link link-primary" to="/register">
                Register
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;

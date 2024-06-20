import FormInput from "../components/FormInput";
import { useLogin } from "../hooks/useLogin";
import { Form, NavLink, useActionData } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { useEffect } from "react";
export const action = async ({ request }) => {
  let formData = await request.formData();
  let displayName = formData.get("displayName");
  let email = formData.get("email");
  let password = formData.get("password");
  let photoURL = formData.get("photoURL");
  return { displayName, email, password, photoURL };
};
function Register() {
  const userData = useActionData();
  const { registerWithEmailAndPassword } = useRegister();
  useEffect(() => {
    if (userData) {
      registerWithEmailAndPassword(userData);
    }
  }, [userData]);
  console.log(userData);
  const { signUpWithGoogle } = useLogin();
  return (
    <div className="min-h-screen grid place-items-center">
      <Form method="post" className="w-96">
        <h1 className="text-3xl font-bold text-center mb-4">Register</h1>
        <FormInput type="text" labelText="Display Name:" name="displayName" />
        <FormInput type="email" labelText="Email:" name="email" />
        <FormInput type="url" labelText="Photo URL:" name="photoURL" />
        <FormInput type="password" labelText="Password:" name="password" />
        <div className="mt-6">
          <button className=" btn btn-secondary btn-block">Register</button>
        </div>
        <button
          type="button"
          onClick={signUpWithGoogle}
          className="btn btn-primary mt-3 btn-block"
        >
          Google
        </button>
        <p>
          You have already registered.
          <NavLink to="./login">Click me!</NavLink>
        </p>
      </Form>
    </div>
  );
}

export default Register;

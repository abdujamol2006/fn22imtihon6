//firebase
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
//context
import { useGlobalContext } from "./useGlobalContext";
import toast from "react-hot-toast";
export const useRegister = () => {
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useGlobalContext();
  const registerWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch({ type: "LOG_IN", payload: user });
      toast.success(`Welcome ${user.displayName}`);
      setIsPending(false);
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage);
      console.log(errorMessage);
      setIsPending(false);
    }
  };
  //registerEmailAndPassword
  const registerEmailAndPassword = async (
    email,
    password,
    displayName,
    photoURL
  ) => {
    try {
      const register = createUserWithEmailAndPassword(auth, email, password);
      setIsPending(true);
      const user = (await register).user;
      await updateProfile(auth.currentUser, { photoURL, displayName });
      dispatch({ type: "LOG_IN", payload: user });
      toast.success(`Welcome ${user.displayName}`);
      setIsPending(false);
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage);
      setIsPending(false);
    }
  };
  return { registerWithGoogle, isPending, registerEmailAndPassword };
};

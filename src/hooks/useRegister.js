import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function useRegister() {
  const registerWithEmailAndPassword = async (userData) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      await updateProfile(auth.currentUser, {
        displayName: userData.displayName,
        photoURL: userData.photoURL,
      });
      const userCredential = result.user;

      //dispatch({ type: "SIGN_IN", payload: userCredential });

      console.log(userCredential);
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    }
  };
  return { registerWithEmailAndPassword };
}

export { useRegister };

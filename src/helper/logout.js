import { getAuth, signOut } from "firebase/auth";

const logout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("Logout succeeded");
    })
    .catch((error) => {
      console.log(error);
      throw new Error("Logout failed");
    });
};

export default logout;

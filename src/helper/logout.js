import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const logout = () => {
  // const navigate = useNavigate();
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("Logout succeeded");
      // navigate("/");
    })
    .catch((error) => {
      console.log(error);
      throw new Error("Logout failed");
    });
};

export default logout;

import { db } from "../firebase";
import { doc, updateDoc, setDoc } from "firebase/firestore";

const setNewRecipe = async (collection, data) => {
  await setDoc(doc(db, collection, data.name), {
    name: data.name,
    image: data.image,
  });
};

export default setNewRecipe;

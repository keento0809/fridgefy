import { db } from "../firebase";
import { doc, updateDoc, setDoc } from "firebase/firestore";

const setItemsToBuy = async (collection, data, id) => {
  await setDoc(doc(db, collection, data.name), {
    id: id,
    name: data.name,
    image: data.image,
  });
};

export default setItemsToBuy;

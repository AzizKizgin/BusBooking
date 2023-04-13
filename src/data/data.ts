/** @format */
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
interface UserInfo {
  email: string;
  birthDate: string;
  gender: string;
  identityNumber: string;
  name: string;
  surname: string;
  id: string;
}
export const addUserInfo = async (userInfo: UserInfo) => {
  const userInfoRef = doc(db, "users", userInfo.id);
  await setDoc(userInfoRef, userInfo);
};

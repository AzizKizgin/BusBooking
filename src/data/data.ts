/** @format */
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const addUserInfo = async (userInfo: User) => {
  const userInfoRef = doc(db, "users", userInfo.id);
  await setDoc(userInfoRef, userInfo);
};

export const getUserInfo = async (userId: string): Promise<User> => {
  const userInfoRef = doc(db, "users", userId);
  const userInfo = await getDoc(userInfoRef);
  return userInfo.data() as User;
};

/** @format */

import { useToast } from "@aziz_kizgin/react-native-toast-message";
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../firebase/firebaseConfig";
import { useLocalization } from "./LocalizationContext";

interface AuthContextProps {
  children: ReactNode;
}

interface LoginProps {
  email: string;
  password: string;
}

interface RegisterProps {
  name: string;
  surname: string;
  identityNumber: string;
  birthDate: string;
  gender: string;
  email: string;
  password: string;
}

interface ResetPasswordProps {
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (props: LoginProps) => Promise<void>;
  register: (props: RegisterProps) => Promise<void>;
  resetPassword: (props: ResetPasswordProps) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  register: async () => {},
  resetPassword: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<User | null>(null);
  const { showToast } = useToast();
  const { strings } = useLocalization();

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return subscriber;
  }, []);

  const login = async ({ email, password }: LoginProps) => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then((user) => {
        setUser(user.user);
      });
    } catch (error) {
      showToast({
        color: "error",
        textStyle: {
          color: "white",
          fontSize: 16,
        },
        message: strings.somethingWentWrong,
      });
    }
  };

  const register = async ({
    email,
    password,
    birthDate,
    gender,
    identityNumber,
    name,
    surname,
  }: RegisterProps) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      showToast({
        color: "error",
        textStyle: {
          color: "white",
          fontSize: 16,
        },
        message: strings.somethingWentWrong,
      });
    }
  };

  const resetPassword = async ({ email }: ResetPasswordProps) => {
    try {
      sendPasswordResetEmail(auth, email);
    } catch (error) {
      showToast({
        color: "error",
        textStyle: {
          color: "white",
          fontSize: 16,
        },
        message: strings.somethingWentWrong,
      });
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      showToast({
        color: "error",
        textStyle: {
          color: "white",
          fontSize: 16,
        },
        message: strings.somethingWentWrong,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, resetPassword, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

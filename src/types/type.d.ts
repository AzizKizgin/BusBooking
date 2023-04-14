/** @format */

type AuthenticationParamsList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

type HomeParamsList = {
  Home: undefined;
  Voyages: VoyageSearchType;
  VoyageDetail: VoyageType;
  Payment: PaymentScreenParams;
  Settings: undefined;
  PaymentSuccess: undefined;
};

type VoyageSearchType = {
  origin: string;
  destination?: string;
  departureDate: string;
  returnDate?: string;
  hasReturn: boolean;
};

type VoyageType = {
  id: number;
  origin: string;
  destination: string;
  departureDate: string;
  returnDate?: string;
  price: number;
  company: string;
  hasReturn: boolean;
};

type User = {
  id: string;
  name: string;
  surname: string;
  email: string;
  identityNumber: string;
  birthDate: string;
  gender: string;
};

type PaymentScreenParams = VoyageType & { selectedSeats: number[] };

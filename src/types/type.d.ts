/** @format */

type AuthenticationParamsList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

type HomeParamsList = {
  Home: undefined;
  Voyages: VoyageSearchType;
  VoyageDetail: undefined;
  Payment: undefined;
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

/** @format */

import { Dimensions } from "react-native";

export const screen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

export const cities = [
  "Istanbul",
  "Ankara",
  "Izmir",
  "Bursa",
  "Adana",
  "Gaziantep",
  "Konya",
  "Antalya",
  "Kayseri",
];

export const voyages = [
  {
    id: 1,
    origin: "Istanbul",
    destination: "Ankara",
    departureDate: "21.04.2023",
    returnDate: "",
    price: 300,
    company: "FastBus",
    hasReturn: false,
  },
  {
    id: 2,
    origin: "Istanbul",
    destination: "Ankara",
    departureDate: "21.04.2023",
    returnDate: "",
    price: 200,
    company: "BusTurk",
    hasReturn: false,
  },
  {
    id: 3,
    origin: "Ankara",
    destination: "Istanbul",
    departureDate: "21.04.2023",
    returnDate: "",
    price: 500,
    company: "FastBus",
    hasReturn: false,
  },
  {
    id: 4,
    origin: "Ankara",
    destination: "Istanbul",
    departureDate: "21.04.2023",
    returnDate: "",
    price: 200,
    company: "BusTurk",
    hasReturn: false,
  },
  {
    id: 5,
    origin: "Istanbul",
    destination: "Ankara",
    departureDate: "23.04.2023",
    returnDate: "24.04.2023",
    price: 500,
    company: "FastBus",
    hasReturn: true,
  },
  {
    id: 6,
    origin: "Istanbul",
    destination: "Ankara",
    departureDate: "23.04.2023",
    returnDate: "24.04.2023",
    price: 400,
    company: "BusTurk",
    hasReturn: true,
  },
  {
    id: 7,
    origin: "Ankara",
    destination: "Istanbul",
    departureDate: "23.04.2023",
    returnDate: "24.04.2023",
    price: 400,
    company: "FastBus",
    hasReturn: true,
  },
  {
    id: 8,
    origin: "Ankara",
    destination: "Istanbul",
    departureDate: "23.04.2023",
    returnDate: "24.04.2023",
    price: 450,
    company: "BusTurk",
    hasReturn: true,
  },
];

export enum Gender {
  Man = "0",
  Woman = "1",
}

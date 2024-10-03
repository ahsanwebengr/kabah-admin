const AirportOptions = [
  { value: "london_city", label: "London City" },
  { value: "stansted", label: "London Stansted" },
  { value: "luton", label: "London Luton" },
  { value: "heathrow", label: "London Heathrow" },
  { value: "gatwick", label: "London Gatwick" },
  { value: "manchester", label: "Manchester" },
  { value: "edinburgh", label: "Edinburgh" },
  { value: "birmingham", label: "Birmingham" },
  { value: "glsgow", label: "Glsgow" },
  { value: "bristol", label: "Bristol" },
  { value: "humberside", label: "Humberside" },
  { value: "liverpool", label: "Liverpool" },
  { value: "newc_astle", label: "Newcastle" },
  { value: "aberdeen", label: "Aberdeen" },
  { value: "leeds_bradford", label: "Leeds Bradford" },
  { value: "cardiff", label: "Cardiff" },
  { value: "norwich", label: "Norwich" },
  { value: "east_midlands", label: "East Midlands" },
  { value: "nottingham", label: "Nottingham" },
  { value: "leicester", label: "Leicester" },
  { value: "sheffield", label: "Sheffield" },
];

const HotelOptions = [
  { value: "2_star", label: "Economy" },
  { value: "3_star", label: "3 Star" },
  { value: "4_star", label: "4 Star" },
  { value: "5_star", label: "5 Star" },
];

const UMRAH_PARAM = "umrah";
const HAJJ_PARAM = "hajj";

export { AirportOptions, HotelOptions, HAJJ_PARAM, UMRAH_PARAM };

export const BASE_URL = import.meta.env.VITE_API_URL;

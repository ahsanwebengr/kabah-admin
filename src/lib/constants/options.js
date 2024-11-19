const AirportOptions = [
  { value: "London City", label: "London City" },
  { value: "London Stansted", label: "London Stansted" },
  { value: "London Luton", label: "London Luton" },
  { value: "London Heathrow", label: "London Heathrow" },
  { value: "London Gatwick", label: "London Gatwick" },
  { value: "Manchester", label: "Manchester" },
  { value: "Edinburgh", label: "Edinburgh" },
  { value: "Birmingham", label: "Birmingham" },
  { value: "Glasgow", label: "Glasgow" },
  { value: "Bristol", label: "Bristol" },
  { value: "Humberside", label: "Humberside" },
  { value: "Liverpool", label: "Liverpool" },
  { value: "Newcastle", label: "Newcastle" },
  { value: "Aberdeen", label: "Aberdeen" },
  { value: "Leeds Bradford", label: "Leeds Bradford" },
  { value: "Cardiff", label: "Cardiff" },
  { value: "Norwich", label: "Norwich" },
  { value: "East Midlands", label: "East Midlands" },
  { value: "Nottingham", label: "Nottingham" },
  { value: "Leicester", label: "Leicester" },
  { value: "Sheffield", label: "Sheffield" },
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

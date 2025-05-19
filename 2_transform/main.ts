import {
  filterCountry,
  InvalidAirport,
  search,
  transformData,
} from "./Airport";

const invalidAirports: InvalidAirport[] = [
  { name: "One", code: "1", country: "Italy" },
  { name: "Two", code: "2", country: "US" },
  { name: "Three", code: "3", country: "Geramny" },
  { name: "Four", code: "4", country: "France" },
];

const airports = transformData(invalidAirports, a => ({
  ...a,
  code: a.code.toUpperCase(),
  original: a,
}));
console.table(airports);

const usAirports = filterCountry(airports, "US");
console.table(usAirports);

const searchAirports = search(airports, "a");
console.table(searchAirports);

import {
  AirportNotification,
  filterCountry,
  getNotificationDetails,
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

const notifications: AirportNotification[] = [
  {
    type: "arrival",
    airport: airports[0],
    temrinal: "A",
    time: new Date(),
  },
  {
    type: "departure",
    airport: airports[1],
    gate: "B",
    time: new Date(),
  },
  {
    type: "delay",
    airport: airports[2],
    newTime: new Date(),
    time: new Date(),
  },
  {
    type: "cancel",
    airport: airports[3],
    reason: "Weather",
  },
];
console.log(notifications);

notifications.forEach(notification => {
  const dettails = getNotificationDetails(notification);
  console.log(dettails);
});

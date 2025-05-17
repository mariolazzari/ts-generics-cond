import { Capital } from "./Capital";
import { Country } from "./Country";

const italy: Country<string, Capital> = {
  name: "Italy",
  capital: {
    name: "Rome",
  },
};
console.log(italy);

import { Capital } from "./Capital";
import { Country } from "./Country";
import { logValue } from "./func";

const italy: Country<string, Capital> = {
  name: "Italy",
  capital: {
    name: "Rome",
  },
};

logValue(italy);

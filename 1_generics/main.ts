import { Animal, logAnimalName, updateAnimal } from "./Animal";
import { Capital } from "./Capital";
import { Country } from "./Country";
import { logValue, logValues } from "./func";

const italy: Country<string, Capital> = {
  name: "Italy",
  capital: {
    name: "Rome",
  },
};

logValue(italy);
logValues<string, number>("Mario", 50);

const dog: Animal = {
  name: "Tudor",
  species: "dog",
};

logAnimalName(dog);

const numbers: Array<number> = [1, 2, 3, 4, 5];
const strings: Array<string> = ["Mario", "Lazzari"];
const animals: Array<Animal> = [
  { name: "Tudor", species: "dog" },
  { name: "Bart", species: "dog" },
];

console.log(numbers, strings, animals);

let cat: Animal = {
  name: "Miao",
  species: "dog",
};
cat = updateAnimal(cat, { species: "cat" });
logValue(cat);

const roDog: Readonly<Animal> = {
  name: "RO",
  species: "dog",
  age: 10,
};
// roDog.age = 20 -> error
console.log(roDog);

const roAnimals: ReadonlyArray<Animal> = [...animals];
const roAnimals2: readonly Animal[] = [...animals];
// roAnimals.push(dog) -> error
console.log(roAnimals, roAnimals2);

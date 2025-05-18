export type Animal = {
  name: string;
  species: string;
};

export function logAnimalName<T extends Animal>({ name }: T) {
  console.log(`Animal name: ${name}`);
}

export function updateAnimal(animal: Animal, fields: Partial<Animal>): Animal {
  return {
    ...animal,
    ...fields,
  };
}

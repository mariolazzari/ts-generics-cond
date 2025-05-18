export type Animal = {
  name: string;
  species: string;
};

export function logAnimalName<T extends Animal>({ name }: T) {
  console.log(`Animal name: ${name}`);
}

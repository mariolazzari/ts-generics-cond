import { Pet } from "./Pet";

export function handleValue(value: string | string[]): string {
  return typeof value === "string"
    ? value.toLowerCase()
    : value.join(",").toLowerCase();
}

export function speak(pet: Pet) {
  if (pet.kind === "dog") {
    return pet.bark();
  }
  pet.meow();
}

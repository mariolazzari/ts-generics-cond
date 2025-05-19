import { ButtonLabel } from "./ButtonLabel";
import { speak } from "./func";
import { IsString } from "./IsString";
import { Pet } from "./Pet";

type A = IsString<string>;
type B = IsString<number>;

const a: A = "Yes";
const b: B = "No";
console.log(a, b);

type DeleteButton = ButtonLabel<"delete">;
type SubmitButton = ButtonLabel<"submit">;

const deleteButton: DeleteButton = "Delete";
const submitButton: SubmitButton = "Submit";
console.log(deleteButton, submitButton);

const bart: Pet = {
  kind: "dog",
  bark: () => {
    console.log("Woof");
  },
};

speak(bart);

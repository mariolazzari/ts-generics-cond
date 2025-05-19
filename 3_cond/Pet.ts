type Dog = {
  kind: "dog";
  bark: () => void;
};

type Cat = {
  kind: "cat";
  meow: () => void;
};

export type Pet = Dog | Cat;

# Advanced TypeScript: Generics and Conditional Types

## Generics

### Creating generic types

```ts
type Capital = {
  name: string;
};

type Country<TName, TCapital> = {
  name: TName;
  capital: TCapital;
};

const italy: Country<string, Capital> = {
  name: "Italy",
  capital: {
    name: "Rome",
  },
};
```

### Building generic functions

```ts
function logValue<T>(value: T) {
  console.log(value);
}

logValue(italy);
```

### Handling multiple parameters

```ts
function logValues<T, V>(value1: T, value2: V) {
  console.log(value1);
  console.log(value2);
}

logValues<string, number>("Mario", 50);
```

### Working with constraints

```ts
type Animal = {
  name: string;
  species: string;
};

function logAnimalName<T extends Animal>({ name }: T) {
  console.log(`Animal name: ${name}`);
}
```

### Building arrays

```ts
const numbers: Array<number> = [1, 2, 3, 4, 5];
const strings: Array<string> = ["Mario", "Lazzari"];
const animals: Array<Animal> = [
  { name: "Tudor", species: "dog" },
  { name: "Bart", species: "dog" },
];
```

### Understanding partial types

```ts
function updateAnimal(animal: Animal, fields: Partial<Animal>): Animal {
  return {
    ...animal,
    ...fields,
  };
}
```

### Enforcing immutability with readonly type

```ts
const roDog: Readonly<Animal> = {
  name: "RO",
  species: "dog",
  age: 10,
};
// roDog.age = 20 -> error

const roAnimals: ReadonlyArray<Animal> = [...animals];
const roAnimals2: readonly Animal[] = [...animals];
```

## Transforming existing data with types

### Working with intersection types

```ts
export type InvalidAirport = {
  name: string;
  code: string;
  country: string;
};

export type ValidAirport = InvalidAirport & {
  original: InvalidAirport;
};
```

### Creating input and output generics

```ts
function transformData<TInput, TOutput>(
  data: TInput[],
  transform: (input: TInput) => TOutput
) {
  return data.map(transform);
}
```

### Transforming data with generics

```ts
const airports = transformData(invalidAirports, a => ({
  ...a,
  code: a.code.toUpperCase(),
  original: a,
}));
```

### Filtering countries with generics

```ts
function filterCountry<T extends { country: string }>(
  itens: T[],
  filter: string
): T[] {
  return itens.filter(item => item.country === filter);
}

function search<T extends InvalidAirport | ValidAirport>(
  itens: T[],
  filter: string
): T[] {
  const loerCaseFilter = filter.toLowerCase();

  return itens.filter(
    item =>
      item.name.toLocaleLowerCase().includes(loerCaseFilter) ||
      item.code.toLocaleLowerCase().includes(loerCaseFilter) ||
      item.country.toLocaleLowerCase().includes(loerCaseFilter)
  );
}
```

### Building discriminated unions

```ts
type AirportNotification =
  | {
      type: "departure";
      airport: ValidAirport;
      gate: string;
      time: Date;
    }
  | {
      type: "arrival";
      airport: ValidAirport;
      temrinal: string;
      time: Date;
    }
  | {
      type: "delay";
      airport: ValidAirport;
      newTime: Date;
      time: Date;
    }
  | {
      type: "cancel";
      airport: ValidAirport;
      reason: string;
    };
```

### Creating notifications

```ts
function getNotificationDetails(
  notification: AirportNotification
): string {
  const { type, airport } = notification;
  const { code } = airport;

  switch (type) {
    case "arrival":
      return `Flight ${code} arrived at ${notification.temrinal} at ${notification.time}`;

    case "departure":
      return `Flight ${code} departed from ${notification.gate} at ${notification.time}`;

    case "delay":
      return `Flight ${code} delayed to ${notification.newTime}`;

    case "cancel":
      return `Flight ${code} canceled due to ${notification.reason}`;
  }
}
```

### Types and conditionals

## Understanding conditional types

```ts
type IsString<T> = T extends string ? "Yes" : "No";
type ButtonLabel<T> = T extends "delete" ? "Delete" : "Submit";
```

### Narrowing types

```ts
function handleValue(value: string | string[]): string {
  return typeof value === "string"
    ? value.toLowerCase()
    : value.join(",").toLowerCase();
}

type Dog = {
  kind: "dog";
  bark: () => void;
};

type Cat = {
  kind: "cat";
  meow: () => void;
};

type Pet = Dog | Cat;

function speak(pet: Pet) {
  if (pet.kind === "dog") {
    return pet.bark();
  }
  pet.meow();
}
```

### Widening types

```ts
export type Status = "success" | "error";

export function handle(status: Status) {
  if (status === "success") {
    return "Success";
  }

  return "Error";
}

const status = "success";
let error = "error" as const;
handle(status);
handle(error);
```

### Inferring types in conditional statements

```ts
type IsArray<T> = T extends Array<any> ? "Yes" : "No";
type StringArray = IsArray<string[]>; // "Yes"
type NumberArray = IsArray<number>; // "No"

type ArrayType<T> = T extends Array<infer E> ? E : T;
type ArrayString = ArrayType<string[]>; // string
type ArrayNumber = ArrayType<number[]>; // number
type ArrayBoolean = ArrayType<boolean[]>; // boolean
type ArrayStringArray = ArrayType<string[][]>; // string[]
type ArrayNumberArray = ArrayType<number>; // number
```

### Building dynamic type utilities

```ts
type UnpackArray<T> = T extends Array<infer E> ? E : T;
type UnpackStringArray = UnpackArray<string[]>; // string
type UnpackNumberArray = UnpackArray<number[]>; // number

type UnpackPromise<T> = T extends Promise<infer E> ? E : T; // Promise<T>
type UnpackStringPromise = UnpackPromise<Promise<string>>; // string
type UnpackNumberPromise = UnpackPromise<Promise<number>>; // number

type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type FunctionReturnType = GetReturnType<() => string>; // string
type FunctionReturnTypeWithArgs = GetReturnType<
  (a: number, b: string) => boolean
>; // boolean
```

### Challenge

```ts
type ApiResponse<T> =
  | {
      status: "success";
      data: T;
    }
  | {
      status: "error";
      error: string;
    };

type UnwrapResponse<T> = T extends { status: "success"; data: infer D }
  ? D
  : never;

type A = ApiResponse<{ status: "success"; data: string }>; // string
type B = ApiResponse<{ status: "error"; error: string }>; // never
```
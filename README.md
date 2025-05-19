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

### 
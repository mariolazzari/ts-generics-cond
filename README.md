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
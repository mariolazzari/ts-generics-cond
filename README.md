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
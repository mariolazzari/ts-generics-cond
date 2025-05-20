type IsArray<T> = T extends Array<any> ? "Yes" : "No";
type StringArray = IsArray<string[]>; // "Yes"
type NumberArray = IsArray<number>; // "No"

type ArrayType<T> = T extends Array<infer E> ? E : T;
type ArrayString = ArrayType<string[]>; // string
type ArrayNumber = ArrayType<number[]>; // number
type ArrayBoolean = ArrayType<boolean[]>; // boolean
type ArrayStringArray = ArrayType<string[][]>; // string[]
type ArrayNumberArray = ArrayType<number>; // number

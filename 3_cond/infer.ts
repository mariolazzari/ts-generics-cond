type IsArray<T> = T extends Array<any> ? "Yes" : "No";
type StringArray = IsArray<string[]>; // "Yes"
type NumberArray = IsArray<number>; // "No"

type ArrayType<T> = T extends Array<infer E> ? E : T;
type ArrayString = ArrayType<string[]>; // string
type ArrayNumber = ArrayType<number[]>; // number
type ArrayBoolean = ArrayType<boolean[]>; // boolean
type ArrayStringArray = ArrayType<string[][]>; // string[]
type ArrayNumberArray = ArrayType<number>; // number

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

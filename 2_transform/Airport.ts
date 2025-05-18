export type InvalidAirport = {
  name: string;
  code: string;
  country: string;
};

export type ValidAirport = InvalidAirport & {
  original: InvalidAirport;
};

export function transformData<TInput, TOutput>(
  data: TInput[],
  transform: (input: TInput) => TOutput
) {
  return data.map(transform);
}

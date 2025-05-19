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

export function filterCountry<T extends { country: string }>(
  itens: T[],
  filter: string
): T[] {
  return itens.filter(item => item.country === filter);
}

export function search<T extends InvalidAirport | ValidAirport>(
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

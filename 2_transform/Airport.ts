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

export type AirportNotification =
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

export function getNotificationDetails(
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

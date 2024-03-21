export function convertSecondsToReadableTime(seconds: number) {
  const computeUnit = (amount: number, unit: string) => {
    return `${amount} ${unit}${amount !== 1 ? "s" : ""}`;
  };

  const secondsAbs = Math.abs(seconds);

  if (secondsAbs < 60) {
    return computeUnit(seconds, "second");
  } else if (secondsAbs < 3600) {
    const minutes = Math.floor(seconds / 60);
    return computeUnit(minutes, "minute");
  } else if (secondsAbs < 86400) {
    const hours = Math.floor(seconds / 3600);
    return computeUnit(hours, "hour");
  } else {
    const days = Math.floor(seconds / 86400);
    return computeUnit(days, "day");
  }
}

export function formatDate(timestamp: number): string {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Europe/Paris",
  };
  const formattedDate = date
    .toLocaleDateString("en-GB", options)
    .replace(",", " at");
  return formattedDate;
}

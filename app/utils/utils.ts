export function convertSecondsToReadableTime(seconds: number) {
  const computeUnit = (amount: number, unit: string) => {
    return `${amount} ${unit}${amount !== 1 ? "s" : ""}`;
  };

  if (seconds < 60) {
    return computeUnit(seconds, "second");
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return computeUnit(minutes, "minute");
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return computeUnit(hours, "hour");
  } else {
    const days = Math.floor(seconds / 86400);
    return computeUnit(days, "day");
  }
}

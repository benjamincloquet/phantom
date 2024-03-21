import { convertSecondsToReadableTime, formatDate } from "./utils";

describe("convertSecondsToReadableTime", () => {
  test("converts seconds to seconds when less than 60 seconds", () => {
    expect(convertSecondsToReadableTime(-4)).toBe("-4 seconds");
    expect(convertSecondsToReadableTime(0)).toBe("0 seconds");
    expect(convertSecondsToReadableTime(1)).toBe("1 second");
    expect(convertSecondsToReadableTime(30)).toBe("30 seconds");
    expect(convertSecondsToReadableTime(59)).toBe("59 seconds");
  });

  test("converts seconds to minutes when less than 3600 seconds", () => {
    expect(convertSecondsToReadableTime(120)).toBe("2 minutes");
    expect(convertSecondsToReadableTime(-1800)).toBe("-30 minutes");
  });

  test("converts seconds to hours when less than 86400 seconds", () => {
    expect(convertSecondsToReadableTime(7200)).toBe("2 hours");
    expect(convertSecondsToReadableTime(36000)).toBe("10 hours");
  });

  test("converts seconds to days when more than or equal to 86400 seconds", () => {
    expect(convertSecondsToReadableTime(86400)).toBe("1 day");
    expect(convertSecondsToReadableTime(172800)).toBe("2 days");
    expect(convertSecondsToReadableTime(-1728000)).toBe("-20 days");
  });
});

describe("formatDate function", () => {
  test("format Date to readable string", () => {
    const timestamp = 1711017654546;
    const formattedDate = formatDate(timestamp);
    expect(formattedDate).toEqual("21/03/2024 at 11:40 am");
  });
});

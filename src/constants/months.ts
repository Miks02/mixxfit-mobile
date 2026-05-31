export const MONTHS: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const numberToMonth = (monthNumber: number): string => {
  return MONTHS[monthNumber - 1] ?? "Unknown";
};

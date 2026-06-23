export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
};

export const formatDateShort = (date: Date): string => {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
  }).format(date);
};

export const formatDateInput = (date: Date): string => {
  return date.toISOString().split("T")[0];
};

export const getNights = (checkIn: Date, checkOut: Date): number => {
  const diff = checkOut.getTime() - checkIn.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

export const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const getTomorrow = (): Date => addDays(new Date(), 1);
export const getDayAfterTomorrow = (): Date => addDays(new Date(), 2);

export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  return /^[6-9]\d{9}$/.test(phone.replace(/\s+/g, ""));
};

export const isValidName = (name: string): boolean => {
  return name.trim().length >= 2;
};

export const isDateInFuture = (date: Date): boolean => {
  return date > new Date();
};

export const isCheckOutAfterCheckIn = (checkIn: Date, checkOut: Date): boolean => {
  return checkOut > checkIn;
};

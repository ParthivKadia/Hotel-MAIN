export const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
export const isValidPhone = (value: string) => /^[0-9+\-\s]{7,15}$/.test(value.trim());

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

interface BookingFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  maxGuests: number;
}

export const validateBookingForm = (input: BookingFormInput): ValidationResult => {
  const errors: Record<string, string> = {};

  if (!input.firstName.trim()) errors.firstName = "First name is required.";
  if (!input.lastName.trim()) errors.lastName = "Last name is required.";

  if (!input.email.trim()) errors.email = "Email is required.";
  else if (!isValidEmail(input.email)) errors.email = "Enter a valid email address.";

  if (!input.phone.trim()) errors.phone = "Phone number is required.";
  else if (!isValidPhone(input.phone)) errors.phone = "Enter a valid phone number.";

  if (!input.checkIn) errors.checkIn = "Check-in date is required.";
  if (!input.checkOut) errors.checkOut = "Check-out date is required.";
  if (input.checkIn && input.checkOut && input.checkOut.getTime() <= input.checkIn.getTime()) {
    errors.checkOut = "Check-out must be after check-in.";
  }

  if (input.guests < 1) errors.guests = "At least 1 guest is required.";
  else if (input.guests > input.maxGuests) errors.guests = `This room allows up to ${input.maxGuests} guests.`;

  return { isValid: Object.keys(errors).length === 0, errors };
};
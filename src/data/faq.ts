export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "What are the check-in and check-out times?",
    answer:
      "Standard check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be arranged subject to availability — please contact the front desk in advance.",
    category: "stay",
  },
  {
    id: "faq-2",
    question: "Is breakfast included in the room rate?",
    answer:
      "Breakfast is included in Deluxe, Executive, and Suite room categories. Standard rooms do not include breakfast by default, but it can be added during booking for ₹450 per person per day.",
    category: "dining",
  },
  {
    id: "faq-3",
    question: "Is there free parking available?",
    answer:
      "Yes, we offer complimentary valet parking for all guests. Self-parking is also available in the adjacent multi-level car park.",
    category: "facilities",
  },
  {
    id: "faq-4",
    question: "What is the cancellation policy?",
    answer:
      "Bookings cancelled more than 48 hours before check-in receive a full refund. Cancellations within 48 hours of check-in are charged one night's room rate. No-shows are charged the full booking amount.",
    category: "booking",
  },
  {
    id: "faq-5",
    question: "Do you allow pets?",
    answer:
      "We are a pet-free property to maintain a clean and allergen-free environment for all guests.",
    category: "stay",
  },
  {
    id: "faq-6",
    question: "Is there a swimming pool?",
    answer:
      "Yes, we have a rooftop swimming pool open daily from 7:00 AM to 9:00 PM. Pool access is complimentary for all hotel guests.",
    category: "facilities",
  },
  {
    id: "faq-7",
    question: "How do I modify or cancel my booking?",
    answer:
      "You can modify or cancel your booking by contacting our reservations team at reservations@rajmahalhotel.com or calling +91 22 6677 8899. Provide your confirmation number for faster assistance.",
    category: "booking",
  },
  {
    id: "faq-8",
    question: "Is the hotel suitable for business stays?",
    answer:
      "Absolutely. We offer Executive rooms with lounge access, high-speed Wi-Fi throughout the property, and meeting rooms that can be reserved for corporate use.",
    category: "business",
  },
];

import type { Review } from "../types/review.types";

export const testimonials: Review[] = [
  {
    id: "t1",
    authorName: "Priya Nair",
    authorLocation: "Bangalore",
    rating: 5,
    title: "Excellent stay for a business trip",
    content:
      "Clean rooms, fast Wi-Fi, and professional staff. The Executive Lounge was a great perk. Will definitely book again for my next Mumbai visit.",
    createdAt: new Date("2024-11-12"),
    isVerified: true,
    categories: { cleanliness: 5, service: 5, location: 5, value: 4 },
  },
  {
    id: "t2",
    authorName: "Arjun Mehta",
    authorLocation: "Delhi",
    rating: 4,
    title: "Great location, comfortable rooms",
    content:
      "The hotel is perfectly situated near Marine Drive. Room was spacious and well-maintained. Check-in was smooth and quick.",
    createdAt: new Date("2024-10-28"),
    isVerified: true,
    categories: { cleanliness: 4, service: 4, location: 5, value: 4 },
  },
  {
    id: "t3",
    authorName: "Sunita Kapoor",
    authorLocation: "Pune",
    rating: 5,
    title: "Wonderful anniversary stay",
    content:
      "We booked the Premier Suite for our anniversary. The view was breathtaking and the staff arranged a small surprise for us. Truly memorable.",
    createdAt: new Date("2024-09-14"),
    isVerified: true,
    categories: { cleanliness: 5, service: 5, location: 5, value: 5 },
  },
  {
    id: "t4",
    authorName: "Rahul Sharma",
    authorLocation: "Hyderabad",
    rating: 4,
    title: "Value for money, good amenities",
    content:
      "Booked the Standard King Room for a weekend getaway. Everything worked well — AC, TV, hot water. The pool was a nice bonus.",
    createdAt: new Date("2024-08-05"),
    isVerified: false,
    categories: { cleanliness: 4, service: 4, location: 4, value: 5 },
  },
];

import React from "react";
import type { Review } from "../../../types/review.types";
import { clsx } from "../../../utils/helpers";

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg viewBox="0 0 20 20" className={clsx("w-3.5 h-3.5", filled ? "text-yellow-400" : "text-gray-200")} fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

interface RoomReviewsProps {
  reviews: Review[];
  rating: number;
  reviewCount: number;
}

export const RoomReviews: React.FC<RoomReviewsProps> = ({ reviews, rating, reviewCount }) => (
  <div>
    <div className="flex items-center justify-between mb-5">
      <h2 className="text-lg font-semibold text-primary-text">Guest Reviews</h2>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} filled={i < Math.round(rating)} />
          ))}
        </div>
        <span className="text-sm font-medium text-primary-text">{rating.toFixed(1)}</span>
        <span className="text-sm text-secondary-text">({reviewCount} reviews)</span>
      </div>
    </div>

    {reviews.length === 0 ? (
      <p className="text-sm text-secondary-text">No reviews yet for this room.</p>
    ) : (
      <div className="space-y-5">
        {reviews.map((r) => (
          <div key={r.id} className="border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-section-bg flex items-center justify-center text-xs font-semibold text-primary-text">
                  {r.guestName.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-text">{r.guestName}</p>
                  {r.stayType && <p className="text-2xs text-secondary-text">{r.stayType} stay</p>}
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} filled={i < r.rating} />
                ))}
              </div>
            </div>
            {r.title && <p className="text-sm font-semibold text-primary-text mb-1">{r.title}</p>}
            <p className="text-sm text-secondary-text leading-relaxed">{r.comment}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default RoomReviews;
import React, { useState } from "react";
import { useBookingContext } from "../../../context/BookingContext";

export const CouponSection: React.FC = () => {
  const { coupon, applyCoupon, removeCoupon } = useBookingContext();
  const [code, setCode] = useState("");
  const [isApplying, setIsApplying] = useState(false);

  const handleApply = async () => {
    if (!code.trim()) return;
    setIsApplying(true);
    await applyCoupon(code);
    setIsApplying(false);
  };

  return (
    <div className="bg-white border border-border rounded-lg p-6">
      <h2 className="text-lg font-semibold text-primary-text mb-4">Coupon Code</h2>

      {coupon.isApplied ? (
        <div className="flex items-center justify-between bg-green-100 text-success rounded-lg px-4 py-3 text-sm">
          <span className="font-medium">
            {coupon.code} applied — {coupon.discountPercent}% off
          </span>
          <button onClick={removeCoupon} className="text-xs font-medium underline">
            Remove
          </button>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter coupon code"
            className="flex-1 border border-border rounded-lg px-4 py-2.5 text-sm text-primary-text focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
          />
          <button
            onClick={handleApply}
            disabled={isApplying || !code.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors duration-150"
          >
            {isApplying ? "Applying..." : "Apply"}
          </button>
        </div>
      )}
      {coupon.error && !coupon.isApplied && <p className="text-xs text-red-600 mt-2">{coupon.error}</p>}
      <p className="text-2xs text-secondary-text mt-2">Try: WELCOME10, SAVE15, RAJMAHAL20</p>
    </div>
  );
};

export default CouponSection;
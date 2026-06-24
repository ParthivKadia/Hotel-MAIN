import React from "react";
import { useBookingContext } from "../../../context/BookingContext";
import { formatCurrency } from "../../../utils/formatCurrency";

export const PaymentSummary: React.FC = () => {
  const { priceBreakdown, coupon } = useBookingContext();
  const { nights, pricePerNight, totalPrice, discountAmount, taxRate, taxAmount, finalAmount } = priceBreakdown;

  return (
    <div className="bg-white border border-border rounded-lg p-6">
      <h2 className="text-lg font-semibold text-primary-text mb-4">Payment Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-secondary-text">
          <span>
            {formatCurrency(pricePerNight)} x {nights} night{nights !== 1 ? "s" : ""}
          </span>
          <span>{formatCurrency(totalPrice)}</span>
        </div>
        {coupon.isApplied && discountAmount > 0 && (
          <div className="flex justify-between text-sm text-success">
            <span>Coupon ({coupon.code})</span>
            <span>-{formatCurrency(discountAmount)}</span>
          </div>
        )}
        <div className="flex justify-between text-sm text-secondary-text">
          <span>Taxes &amp; fees ({Math.round(taxRate * 100)}%)</span>
          <span>{formatCurrency(taxAmount)}</span>
        </div>
        <div className="flex justify-between text-base font-semibold text-primary-text pt-3 border-t border-border">
          <span>Total Amount</span>
          <span>{formatCurrency(finalAmount)}</span>
        </div>
      </div>
      <p className="text-2xs text-secondary-text mt-3">Payment is processed securely at the time of confirmation.</p>
    </div>
  );
};

export default PaymentSummary;
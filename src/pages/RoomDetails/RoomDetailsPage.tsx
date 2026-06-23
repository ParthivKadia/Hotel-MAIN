import React from "react";
import { useParams, Link } from "react-router-dom";
import { PageContainer } from "../../components/layout/PageContainer";
import { RoomGallery } from "../../components/rooms/RoomGallery/RoomGallery";
import { RoomAmenities } from "../../components/rooms/RoomAmenities/RoomAmenities";
import { RoomReviews } from "../../components/rooms/RoomReviews/RoomReviews";
import { SimilarRooms } from "../../components/rooms/SimilarRooms/SimilarRooms";
// import { RoomBookingSidebar } from "../../components/rooms/RoomBookingSidebar/RoomBookingSidebar";
import { RoomBookingSidebar } from "../../components/rooms/RoomBookingSidebar";
import { rooms, getRoomBySlug } from "../../data/rooms";
import { getReviewsByRoomId } from "../../data/reviews";
import { nearbyAttractions } from "../../data/nearbyAttractions";
import { HOTEL_POLICIES } from "../../data/policies";
import { BED_TYPE_LABELS } from "../../constants/roomTypes";
import { formatCurrency } from "../../utils/formatCurrency";

const ROOM_IMAGES: Record<string, string[]> = {
  "room-001": [
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
  ],
  "room-002": [
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  ],
  "room-003": [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
    "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&q=80",
  ],
  "room-004": [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
  ],
  "room-005": ["https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80"],
  "room-006": [
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
  ],
};

const FeatureItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="border border-border rounded-lg p-3 text-center">
    <p className="text-2xs uppercase tracking-wide text-secondary-text mb-1">{label}</p>
    <p className="text-sm font-semibold text-primary-text capitalize">{value}</p>
  </div>
);

const RoomDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const room = slug ? getRoomBySlug(slug) : undefined;

  if (!room) {
    return (
      <PageContainer>
        <div className="py-24 text-center">
          <p className="text-secondary-text text-sm mb-3">We couldn't find that room.</p>
          <Link to="/rooms" className="text-sm font-medium text-primary hover:underline">
            Back to all rooms
          </Link>
        </div>
      </PageContainer>
    );
  }

  const galleryImages = (ROOM_IMAGES[room.id] ?? [room.images[0]?.url]).map((url, i) => ({
    id: `${room.id}-${i}`,
    url,
    alt: `${room.name} photo ${i + 1}`,
  }));

  const roomReviews = getReviewsByRoomId(room.id);
  const sameType = rooms.filter((r) => r.id !== room.id && r.type === room.type);
  const similarRooms = (sameType.length > 0 ? sameType : rooms.filter((r) => r.id !== room.id)).slice(0, 3);

  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-xs text-secondary-text mb-4">
          <Link to="/rooms" className="hover:text-primary">
            Rooms
          </Link>{" "}
          <span className="mx-1">/</span> {room.name}
        </nav>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-5">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-primary-text">{room.name}</h1>
            <p className="mt-1 text-sm text-secondary-text">
              Floor {room.floor ?? "—"} · {room.size} m² · Up to {room.maxGuests} guests
            </p>
          </div>
          <span className={room.isAvailable ? "text-sm font-medium text-success" : "text-sm font-medium text-red-600"}>
            {room.isAvailable ? "Available for booking" : "Currently sold out"}
          </span>
        </div>

        <RoomGallery images={galleryImages} roomName={room.name} />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 mt-8">
          <div className="space-y-10">
            <section>
              <h2 className="text-lg font-semibold text-primary-text mb-3">About this room</h2>
              <p className="text-sm text-secondary-text leading-relaxed">{room.description}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-primary-text mb-3">Room Features</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <FeatureItem label="Room Size" value={`${room.size} m²`} />
                <FeatureItem label="Bed" value={`${room.bedCount} × ${BED_TYPE_LABELS[room.bedType]}`} />
                <FeatureItem label="Bathroom" value={room.bathroomType} />
                <FeatureItem label="View" value={room.viewType.replace("-", " ")} />
              </div>
            </section>

            <RoomAmenities amenities={room.amenities} />

            <section>
              <h2 className="text-lg font-semibold text-primary-text mb-3">Price Breakdown</h2>
              <div className="border border-border rounded-lg divide-y divide-gray-100">
                <div className="flex justify-between px-4 py-3 text-sm">
                  <span className="text-secondary-text">Room rate (per night)</span>
                  <span className="text-primary-text font-medium">{formatCurrency(room.pricePerNight)}</span>
                </div>
                <div className="flex justify-between px-4 py-3 text-sm">
                  <span className="text-secondary-text">Breakfast</span>
                  <span className="text-primary-text font-medium">
                    {room.breakfastIncluded ? "Included" : "Available as add-on"}
                  </span>
                </div>
                <div className="flex justify-between px-4 py-3 text-sm">
                  <span className="text-secondary-text">Taxes &amp; service fees</span>
                  <span className="text-primary-text font-medium">12% of room rate</span>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-primary-text">Policies &amp; House Rules</h2>

              <details className="border border-border rounded-lg p-4">
                <summary className="text-sm font-medium text-primary-text cursor-pointer">Cancellation Policy</summary>
                <p className="text-sm text-secondary-text mt-2 leading-relaxed">{HOTEL_POLICIES.cancellationPolicy.description}</p>
              </details>

              <details className="border border-border rounded-lg p-4">
                <summary className="text-sm font-medium text-primary-text cursor-pointer">House Rules</summary>
                <ul className="mt-2 space-y-1.5 list-disc pl-5">
                  {HOTEL_POLICIES.houseRules.map((rule) => (
                    <li key={rule} className="text-sm text-secondary-text">
                      {rule}
                    </li>
                  ))}
                </ul>
              </details>

              <details className="border border-border rounded-lg p-4">
                <summary className="text-sm font-medium text-primary-text cursor-pointer">Children Policy</summary>
                <p className="text-sm text-secondary-text mt-2 leading-relaxed">{HOTEL_POLICIES.childrenPolicy}</p>
              </details>

              <details className="border border-border rounded-lg p-4">
                <summary className="text-sm font-medium text-primary-text cursor-pointer">Extra Beds</summary>
                <p className="text-sm text-secondary-text mt-2 leading-relaxed">{HOTEL_POLICIES.extraBedPolicy}</p>
              </details>

              <details className="border border-border rounded-lg p-4">
                <summary className="text-sm font-medium text-primary-text cursor-pointer">Breakfast Options</summary>
                <ul className="mt-2 space-y-1.5">
                  {HOTEL_POLICIES.breakfastOptions.map((opt) => (
                    <li key={opt.name} className="flex justify-between text-sm text-secondary-text">
                      <span>{opt.name}</span>
                      <span>{formatCurrency(opt.price)} / day</span>
                    </li>
                  ))}
                </ul>
              </details>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-primary-text mb-3">Nearby Attractions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {nearbyAttractions.map((place) => (
                  <div key={place.id} className="flex items-center justify-between border border-border rounded-lg px-4 py-2.5">
                    <div>
                      <p className="text-sm text-primary-text">{place.name}</p>
                      <p className="text-2xs text-secondary-text">{place.category}</p>
                    </div>
                    <span className="text-xs text-secondary-text">{place.distanceKm} km</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <RoomReviews reviews={roomReviews} rating={room.rating} reviewCount={room.reviewCount} />
            </section>

            <section>
              <SimilarRooms rooms={similarRooms} />
            </section>
          </div>

          <div>
            <RoomBookingSidebar room={room} />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default RoomDetailsPage;
import React from "react";
import { businessConfig } from "@/config/business";

/**
 * Emits schema.org MedicalBusiness JSON-LD strictly from verified config fields.
 * Unverified fields (such as unconfirmed opening hours or unverified reviews)
 * are intentionally omitted until verified in businessConfig.
 */
export function LocalBusinessJsonLd() {
  const { address, contact, openingHours, reviews, socialLinks } = businessConfig;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: businessConfig.name.en,
    description:
      "Kanpur wholesaler, distributor, and retail showroom for orthopaedic supports, wheelchairs, patient beds, monitoring devices, respiratory care, and wound-care consumables in Kakadeo, Kanpur.",
    url: businessConfig.siteUrl,
    image: `${businessConfig.siteUrl}/images/hero-showroom.jpg`,
    foundingDate: String(businessConfig.establishedYear),
    areaServed: {
      "@type": "City",
      name: "Kanpur",
    },
  };

  if (contact.phone.verified) {
    data.telephone = contact.phone.e164;
  }

  if (address.addressVerified) {
    const postalAddress: Record<string, string> = {
      "@type": "PostalAddress",
      streetAddress: `${address.streetLine}, ${address.landmark}`,
      addressLocality: `${address.locality}, ${address.city}`,
      addressRegion: address.state,
      addressCountry: address.country,
    };
    if (address.postalCodeVerified) {
      postalAddress.postalCode = address.postalCode;
    }
    data.address = postalAddress;
    data.hasMap = address.directionsUrl;
  }

  if (openingHours.verified && openingHours.schedule.length > 0) {
    data.openingHours = openingHours.schedule.map(
      (s) => `${s.dayEn} ${s.hoursEn}`
    );
  }

  if (reviews.verified && reviews.ratingValue && reviews.reviewCount) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: String(reviews.ratingValue),
      reviewCount: String(reviews.reviewCount),
    };
  }

  if (socialLinks.length > 0) {
    data.sameAs = socialLinks.map((l) => l.href);
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

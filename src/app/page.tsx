import React from "react";
import { AboutSection } from "@/components/AboutSection";
import { CategorySection } from "@/components/CategorySection";
import { EnquiryBuilder } from "@/components/EnquiryBuilder";
import { EnquiryFloatingBar } from "@/components/EnquiryFloatingBar";
import { HeroSection } from "@/components/HeroSection";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { ProductCatalogSection } from "@/components/ProductCatalogSection";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { ShowroomProvider } from "@/components/ShowroomProvider";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { VisitContactSection } from "@/components/VisitContactSection";

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <ShowroomProvider>
        <ScrollProgressBar />
        <SiteHeader />
        <main id="main-content" className="flex-1">
          <HeroSection />
          <CategorySection />
          <ProductCatalogSection />
          <EnquiryBuilder />
          <AboutSection />
          <VisitContactSection />
        </main>
        <SiteFooter />
        <EnquiryFloatingBar />
      </ShowroomProvider>
    </>
  );
}

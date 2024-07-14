export const metadata = {
  title: "CyberDream",
  description: "הדרכות אבטחת מידע ופיתוח לארגונים , חברות, ומוסדות חינוך",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Head from "next/head";

export default function Home() {
  return (
    <>
     <Head>
        <title>CyberDream</title>
        <meta
          name="description"
          content="הדרכות אבטחת מידע ופיתוח לארגונים , חברות, ומוסדות חינוך"
        />
     </Head>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}

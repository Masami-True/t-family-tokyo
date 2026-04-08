import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Philosophy from "@/components/Philosophy";
import CollectionPreview from "@/components/CollectionPreview";
import Authenticity from "@/components/Authenticity";
import GoogleReviews from "@/components/GoogleReviews";
import CeoGreeting from "@/components/CeoGreeting";
import LiveCommerce from "@/components/LiveCommerce";
import B2BSection from "@/components/B2BSection";
import ContactForm from "@/components/ContactForm";
import StoreInfo from "@/components/StoreInfo";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Philosophy />
        <CollectionPreview />
        <Authenticity />
        <GoogleReviews />
        <LiveCommerce />
        <B2BSection />
        <CeoGreeting />
        <ContactForm />
        <StoreInfo />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Philosophy from "@/components/Philosophy";
import CollectionPreview from "@/components/CollectionPreview";
import LiveCommerce from "@/components/LiveCommerce";
import ApplyForm from "@/components/ApplyForm";
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
        <LiveCommerce />
        <ApplyForm />
        <StoreInfo />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}

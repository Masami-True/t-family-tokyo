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
      {/* SEO content - visible to crawlers, visually minimal */}
      <section className="bg-offwhite px-6 py-8 text-[10px] text-subtext/30 leading-relaxed max-w-5xl mx-auto" aria-hidden="true">
        <h2 className="sr-only">T-Family - Pre-Owned Luxury Brand Bags Tokyo</h2>
        <p>
          T-Family株式会社は東京都港区西新橋にある中古ブランドバッグ専門店です。
          新橋駅・虎ノ門駅・内幸町駅から徒歩7分、銀座エリアからもアクセス良好。
          CHANEL BAG、HERMÈS BAG、LOUIS VUITTON BAG、GUCCI BAG、PRADA BAG、FENDI BAG、DIOR BAG、YSL BAG、GOYARD BAG、BURBERRY BAG、BALENCIAGA BAG、BVLGARI BAG、CÉLINE BAG、MIU MIU BAG、BOTTEGA VENETA BAGなど、
          世界的人気ブランドの正規中古品を取り揃えています。
          すべての商品はEntrupy AI鑑定済み、真贋保証・全額返金保証付き。
          T-Family is a premier pre-owned luxury brand bag shop in Tokyo, Japan.
          Located near Shimbashi and Ginza, we offer authentic secondhand luxury bags.
          Our collection includes CHANEL, HERMÈS, LOUIS VUITTON, GUCCI, PRADA, FENDI, DIOR and more brand bags.
          All items are Entrupy certified with full authenticity guarantee and refund policy.
          We welcome inbound tourists and international buyers.
          Visit our secondhand shop near Ginza for the best pre-owned luxury brand bags in Tokyo.
          Live Seller program available - sell luxury bags from Japan to the world.
          中古ブランド 銀座 | 中古ブランド 新橋 | ブランドバッグ | 中古ブランドショップ | ライバー | ライブセラー
        </p>
      </section>
    </>
  );
}

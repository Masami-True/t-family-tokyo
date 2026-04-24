import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveSellerForm from "@/components/LiveSellerForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "ライブセラー応募",
    description:
      "T-Family株式会社のライブセラープログラム応募フォーム。日本の中古ブランドバッグを世界へライブ配信で販売。Live Seller program application.",
    alternates: {
      canonical: `https://t-family.tokyo/${locale}/liveseller`,
      languages: {
        ja: "https://t-family.tokyo/ja/liveseller",
        en: "https://t-family.tokyo/en/liveseller",
        zh: "https://t-family.tokyo/zh/liveseller",
        ko: "https://t-family.tokyo/ko/liveseller",
        es: "https://t-family.tokyo/es/liveseller",
        fr: "https://t-family.tokyo/fr/liveseller",
        "x-default": "https://t-family.tokyo/ja/liveseller",
      },
    },
  };
}

export default function LiveSellerPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <LiveSellerForm />
      </main>
      <Footer />
    </>
  );
}

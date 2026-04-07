import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompanyInfo from "@/components/CompanyInfo";

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <CompanyInfo />
      </main>
      <Footer />
    </>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveSellerForm from "@/components/LiveSellerForm";

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

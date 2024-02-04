import Banner from "@/components/organisms/Banner";
import Faq from "@/components/organisms/Faq";
import Footer from "@/components/organisms/Footer";
import Mentor from "@/components/organisms/Mentor";
import Navbar from "@/components/organisms/Navbar";
import Paket from "@/components/organisms/Paket";
import Testimoni from "@/components/organisms/Testimoni";
import WhyUs from "@/components/organisms/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Mentor />
      <WhyUs />
      <Paket />
      <Testimoni />
      <Faq />
      <Footer />
    </>
  );
}

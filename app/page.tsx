import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar/>
      <HeroSection/>
      <ContentSection/>
      <Footer/>
    </div>
  );
}
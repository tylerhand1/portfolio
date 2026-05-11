import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="px-6">
        <HeroSection />
        <Projects />
        <Experience />
        <Footer />
      </main>
    </>
  );
};

export default Home;

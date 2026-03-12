import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Articles from "@/components/Articles";
import Fighters from "@/components/Fighters";
import Results from "@/components/Results";
import Videos from "@/components/Videos";
import News from "@/components/News";
import BestMoments from "@/components/BestMoments";
import Shop from "@/components/Shop";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Articles />
      <Fighters />
      <Results />
      <Videos />
      <News />
      <BestMoments />
      <Shop />
      <About />
      <Newsletter />
      <Footer />
    </main>
  );
}

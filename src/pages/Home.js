import Faq from "../components/FAQ/Faq";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Pricing from "../components/Pricing/Pricing";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <Features />
      <Pricing />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;

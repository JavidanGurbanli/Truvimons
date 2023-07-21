import MarketAnalysis from "../../assets/images/market-analysis.svg";
import AppPromotion from "../../assets/images/app-promotion.svg";
import LandingAnalysis from "../../assets/images/landing-analysis.svg";
import SetupAnalytics from "../../assets/images/setup-analytics.svg";
import "./Services.scss";
const Services = () => {
  return (
    <section className="services" id="services">
      <h3>SERVICES</h3>
      <h2>Services that we provide</h2>
      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae Suspendisse ante arcu, consectetur id nisl eget
      </p>
      <div className="services_cards">
        <div className="card">
          <div className="card_img">
            <img src={MarketAnalysis} alt="Market Analysis" />
          </div>
          <h2>Market analysis</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts
          </p>
        </div>
        <div className="card">
          <div className="card_img">
            <img src={AppPromotion} alt="App Promotion" />
          </div>
          <h2>App Promotion</h2>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
        </div>
        <div className="card">
          <div className="card_img">
            <img src={LandingAnalysis} alt="Landing Analysis" />
          </div>
          <h2>Landing Analysis</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary.
          </p>
        </div>
      </div>
      <div className="business">
        <div className="business_img">
          <img src={SetupAnalytics} alt="Setup Analytics" />
        </div>
        <div className="business_info">
          <h1>Make your business grow with us, we help you</h1>
          <p>
            Proin maximus varius libero, dictum placerat erat pretium vitae.
            Praesent sed quam quis metus elementum consequat. Morbi commodo
            mattis leo
          </p>
          <button>Start Now</button>
        </div>
      </div>
    </section>
  );
};

export default Services;

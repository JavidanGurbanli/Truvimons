import PricingLeft from "../../assets/images/pricing-decor-left.svg";
import PricingRight from "../../assets/images/pricing-decor-right.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Pricing.scss";
const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
        <div className="pricing_left"><img src={PricingLeft} alt="PricingLeft"/></div>
        <div className="pricing_right"><img src={PricingRight} alt="PricingRight"/></div>
        <div className="pricing_content">
            <h3>PRICING</h3>
            <h2>Our Pricing Plans</h2>
            <div className="pricing_cards">
                <div className="card">
                    <h1>Basic</h1>
                    <ul>
                        <li><FontAwesomeIcon icon={faCheck} className="faCheck" /> Email reports</li>
                        <li><FontAwesomeIcon icon={faCheck} className="faCheck"/> Goal tracking</li>
                        <li><FontAwesomeIcon icon={faCheck} className="faCheck"/> Data export</li>
                        <li><FontAwesomeIcon icon={faCheck} className="faCheck"/> 1 Device Supported</li>
                        <li><FontAwesomeIcon icon={faXmark} className="faXmark"/> More data history</li>
                        <li><FontAwesomeIcon icon={faXmark} className="faXmark"/> Video analytics</li>
                        <li><FontAwesomeIcon icon={faXmark} className="faXmark"/> Long term metrics</li>
                        <li><FontAwesomeIcon icon={faXmark} className="faXmark"/> Campaign tracking</li>
                    </ul>
                    <h2>$9<span>/mo</span></h2>
                    <button>Buy Now</button>
                </div>
                <div className="card activeCard">
                    <h1>Optimum</h1>
                    <ul>
                        <li><FontAwesomeIcon icon={faCheck} className="faCheck"/> Email reports</li>
                        <li><FontAwesomeIcon icon={faCheck} className="faCheck"/> Goal tracking</li>
                        <li><FontAwesomeIcon icon={faCheck} className="faCheck"/> Data export</li>
                        <li><FontAwesomeIcon icon={faCheck} className="faCheck"/> 3 Device Supported</li>
                        <li><FontAwesomeIcon icon={faCheck} className="faCheck"/> More data history</li>
                        <li><FontAwesomeIcon icon={faCheck} className="faCheck"/> Video analytics</li>
                        <li><FontAwesomeIcon icon={faXmark} className="faXmark"/> Long term metrics</li>
                        <li><FontAwesomeIcon icon={faXmark} className="faXmark"/> Campaign tracking</li>
                    </ul>
                    <h2>$17<span>/mo</span></h2>
                    <button>Buy Now</button>
                </div>
                <div className="card">
                    <h1>Advanced</h1>
                    <ul>
                        <li><FontAwesomeIcon icon={faCheck} className="faCheck"/> Email reports</li>
                        <li><FontAwesomeIcon icon={faCheck} className="faCheck"/> Goal tracking</li>
                        <li><FontAwesomeIcon icon={faCheck} className="faCheck"/> Data export</li>
                        <li><FontAwesomeIcon icon={faCheck} className="faCheck"/> 5 Device Supported</li>
                        <li><FontAwesomeIcon icon={faCheck} className="faCheck"/> More data history</li>
                        <li><FontAwesomeIcon icon={faCheck} className="faCheck"/> Video analytics</li>
                        <li><FontAwesomeIcon icon={faCheck} className="faCheck"/> Long term metrics</li>
                        <li><FontAwesomeIcon icon={faCheck} className="faCheck"/> Campaign tracking</li>
                    </ul>
                    <h2>$31<span>/mo</span></h2>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pricing
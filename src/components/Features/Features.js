import Location from "../../assets/images/location.svg";
import Idea from "../../assets/images/idea.svg";
import Watch from "../../assets/images/stopwatch.svg";
import Contract from "../../assets/images/contract.svg";
import Strategy from "../../assets/images/strategy.svg";
import Eye from "../../assets/images/eye.svg";
import BusinessPlan from "../../assets/images/busines-plan.svg";
import Report from "../../assets/images/report.svg";
import "./Features.scss";

const Features = () => {
  return (
    <section className="features" id="features">
        <h3>FEATURES</h3>
        <h2>Our Features</h2>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Suspendisse ante arcu, consectetur id nisl eget</p>
        <div className='features_cards'>
            <div className='card'>
                <div className="card_img"><img src={Location} alt="Location"/></div>
                <h2>Work throughout the country</h2>
                <p>Suspendisse fringilla condimentum odio quis posuere. Ut condimentum massa</p>
            </div>
            <div className='card'>
                <div className="card_img"><img src={Idea} alt="Idea"/></div>
                <h2>Finding the right solution</h2>
                <p>Finding the right solution</p>
            </div>
            <div className='card'>
                <div className="card_img"><img src={Watch} alt="Watch"/></div>
                <h2>Shortest time of work</h2>
                <p>Nunc ligula nibh, pulvinar a.</p>
            </div>
            <div className='card'>
                <div className="card_img"><img src={Contract} alt="Contract"/></div>
                <h2>Professional Team</h2>
                <p>Fusce magna eros, tincidunt in sodales vitae, pulvinar sit amet tellus.</p>
            </div>
            <div className='card'>
                <div className="card_img"><img src={Strategy} alt="Strategy"/></div>
                <h2>Free consultation</h2>
                <p>Nam in odio sollicitudin, lacinia mauris nec, fermentum augue.</p>
            </div>
            <div className='card'>
                <div className="card_img"><img src={Eye} alt="Eye"/></div>
                <h2>Always in priority</h2>
                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
        </div>
        <div className="features_courses">
            <div className="courses_info">
                <h1>We have professional courses in real life</h1>
                <p>Proin maximus varius libero, dictum placerat erat pretium vitae. Praesent sed quam quis metus elementum consequat. Morbi commodo mattis leo</p>
                <button>Learn More</button>
            </div>
            <div className="courses_img">
                <img src={BusinessPlan} alt="BusinessPlan"/>
            </div>
        </div>
        <div className="features_app">
            <div className="app_img">
                <img src={Report} alt="Report"/>
            </div>
            <div className="app_info">
                <h1>We have an app that show you the progress</h1>
                <p>Donec tempor tincidunt lacus, nec tristique nunc elementum et. Integer ac mattis massa, placerat gravida arcu.</p>
                <div className="info_buttons">
                    <button className="active">Learn More</button>
                    <button>Load App</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features
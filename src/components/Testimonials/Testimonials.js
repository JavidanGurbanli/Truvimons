import "./Testimonials.scss";
import User1 from "../../assets/images/test1.jpg";
import User2 from "../../assets/images/test2.jpg";
import User3 from "../../assets/images/test3.jpg";
import User4 from "../../assets/images/test4.jpg";
const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
        <h3>TESTIMONIALS</h3>
        <h2>We don't hide our clients' opinion</h2>
        <div className="testimonials_cards">
            <div className="card">
                <div className="card_info">
                    <h4>Best Experience!</h4>
                    <p>Maecenas a risus metus. Vivamus mollis nibh eu tellus</p>
                    <span>Jane Doe</span>
                </div>
                <div className="card_img">
                    <img src={User1} alt="User1"/>
                </div>
            </div>
            <div className="card">
                <div className="card_info">
                    <h4>Nice work</h4>
                    <p>Nulla vitae aliquam odio, ut suscipit magna. Maecenas a risus metus.</p>
                    <span>Michael Lang</span>
                </div>
                <div className="card_img">
                    <img src={User2} alt="User2"/>
                </div>
            </div>
            <div className="card">
                <div className="card_info">
                    <h4>I say just WOW!</h4>
                    <p>Duis enim nulla, maximus at metus vitae, faucibus. Maecenas a risus metus. Vivamus.</p>
                    <span>Linda Walker</span>
                </div>
                <div className="card_img">
                    <img src={User3} alt="User3"/>
                </div>
            </div>
            <div className="card">
                <div className="card_info">
                    <h4>Amazing result</h4>
                    <p>Maecenas a risus metus. Vivamus mollis nibh eu tellus</p>
                    <span>Jonas Hays</span>
                </div>
                <div className="card_img">
                    <img src={User4} alt="User4"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
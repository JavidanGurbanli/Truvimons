import "./Faq.scss";
import { useState } from "react";
const Faq = () => {
  const [faqData, setFaqData] = useState([
    {
      question: "How long are analytics stored?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.",
    },
    {
      question: "Can I share a report with multiple people at the same time?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.",
    },
    {
      question: "How often is data refreshed?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.",
    },
    {
      question: "What happens to my data if my social account is disconnected?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.",
    },
    {
      question: "Why don’t I see any data for my Facebook Page?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.",
    },
    {
      question: "When does data begin being collected?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.",
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="faq" id="faq">
      <h3>FAQ</h3>
      <h2>New user? Let’s get started with these basics</h2>
      <div className="faq_content">
        {faqData.map((item, index) => (
          <div key={index} className="faq_item">
            <div className="faq_question" onClick={() => toggleAnswer(index)}>
              <h4 className={activeIndex === index ? "activeText" : ""}>
                {item.question}
              </h4>
              <span className={activeIndex === index ? "activePlus" : ""}>
                +
              </span>
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? "open" : ""}`}
            >
              <p style={{ maxHeight: activeIndex === index ? "1000px" : "0" }}>
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button>Explore More</button>
    </section>
  );
};

export default Faq;

import React, {useState} from "react";
import Title from "./Title";
const faqs = [
  {
    question: "What is your design process?",
    answer:
      "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  },
  {
    question: "What tools and software do you use for UX design?",
    answer:
      "I use a variety of tools including Figma, Adobe XD, Sketch, and Webflow for UX design. These help in wireframing, prototyping, and user testing.",
  },
  {
    question: "How do you measure the success of your UX designs?",
    answer:
      "I measure success through user feedback, usability testing, analytics, and engagement metrics to ensure the design meets user needs effectively.",
  },
];
const FAQ = () => {
  const [toggle, setToggle] = useState(0);

  const handleToggle = index => {
    setToggle(index === toggle ? null : index);
  };

  return (
    <section>
      <Title title={"Frequently asked questions"} />
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="accordion-item">
            <button
              className="accordion-question"
              onClick={() => handleToggle(index)}
            >
              {faq.question}
              <span className="arrow">{toggle === index ? "▲" : "▼"}</span>
            </button>
            {toggle === index && (
              <p className="accordion-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

import React, {useState} from "react";
import Title from "./Title";

const testimonials = [
  {
    quote:
      "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
    name: "Floyd Miles",
    company: "eBay",
  },
  {
    quote:
      "The service was amazing! I was able to land my dream job within a month of using the platform.",
    name: "Jane Cooper",
    company: "Amazon",
  },
  {
    quote:
      "Excellent platform! The tools provided really made my application stand out.",
    name: "Ronald Richards",
    company: "Google",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  const nextSlide = () => {
    setIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    setActiveButton("next");
  };

  const prevSlide = () => {
    setIndex(
      prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    setActiveButton("prev");
  };

  return (
    <div className="testimonial-container">
      <Title title={"What they say"} />
      <div className="testimonial-slide">
        <div className="reviewer">
          <img src="https://s3-alpha-sig.figma.com/img/9bbc/f2a8/f6d1f753b286332b007b2076174bf01a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TSI006bvv7dBLsj3nNjZybXY0As0qXAtcHRCPDebjtkQoDNHWvtIef5o8KxAS-AzoGhNLphc9qzwvCx4410iGGiXq~Bi2ER7z4SUZjLo7GWjkqRDiGfDcpRsOf2jYSdgjn5YPfF80hRlYb6fUw07laxfB87WLP4WGel3NJBJqpvqj2vXcd0VAPBvJPsG4kSjuLutsg3ifGE7gvW2hA~Bzr40fzCObZTMRKq4rUJPf5DLO3L44RBBHg5fVjhGQoIJ4IvFMJoXs4bq6bXZRSK9oSMwfcL-W3LpedQ8gx9JK3hUzc-AaGYktslk3F~0rZCx2v9HwUGNmeCv5Z5diSAYRg__" />
          <span>
            <h5>{testimonials[index].name}</h5>
            <span>{testimonials[index].company}</span>
          </span>
        </div>
        <div>
          {" "}
          <h4>{testimonials[index].quote}</h4>
          <div className="slider-buttons">
            <button
              onClick={prevSlide}
              className={activeButton === "prev" ? "active" : ""}
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className={activeButton === "next" ? "active" : ""}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;

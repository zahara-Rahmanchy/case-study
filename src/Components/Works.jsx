import React from "react";
import Title from "./Title";
const worksData = [
  {
    src: "./image 21.png",
    title: "Analysis Application",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    buttons: ["Figma", "UX"],
  },
  {
    src: "./image 23.png",
    title: "Fortknox Application",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    buttons: ["Mobile", "Web"],
  },
  {
    src: "./image 22.png",
    title: "Zenocide Application",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    buttons: ["App", "Web"],
  },
];

const Works = () => {
  console.log(worksData);
  return (
    <section>
      <Title title={"Works"}></Title>
      {worksData?.map((item, index) => (
        <div key={index} className="card-container">
          <div className="card">
            <img src={item?.src}></img>
            <div className="details-div">
              <div>
                <h3> {item?.title}</h3>
                <p>{item.description}</p>
                <div
                  style={{display: "flex", flexDirection: "row", gap: "30px"}}
                >
                  {item?.buttons?.map((btn, btn_index) => (
                    <button className="hire-me" key={btn_index}>
                      {btn}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                {" "}
                <button
                  className="hire-me"
                  style={{color: "black", backgroundColor: "white"}}
                >
                  View Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Works;

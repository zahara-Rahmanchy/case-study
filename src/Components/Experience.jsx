import React from "react";
import Title from "./Title";
const exp_data = [
  {name: "Lead Product Design", type: "Fortknox", Date: "Mar 2022 - Oct 2023"},
  {name: "Intern Designer", type: "OmniSafe", Date: "Mar 2022 - Oct 2023"},
  {name: "UI Designer", type: "Doradesign", Date: "Mar 2022 - Oct 2023"},
  {
    name: "Frontend Developer",
    type: "OpacityAuthor",
    Date: "Mar 2022 - Oct 2023",
  },
];
const Experience = () => {
  return (
    <section>
      <Title title={"Experience"} />

      {exp_data?.map((item, index) => (
        <div key={index} className="experience-div">
          <h4>{item.name}</h4>
          <div>
            <h5>{item.type}</h5>
            <p>{item.Date}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;

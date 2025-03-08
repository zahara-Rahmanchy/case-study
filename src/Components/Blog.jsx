import React from "react";
import Title from "./Title";
const blogData = [
  {
    src: "./image 21.png",
    title: "How UX works in web",
    date: "Nov 9, 2023",
    buttons: ["UI", "UX"],
  },
  {
    src: "./image 23.png",
    title: "Case study - Analysis Application.",
    date: "Aug 18, 2023",
    buttons: ["DESIGN", "PRINT"],
  },
  {
    src: "./image 22.png",
    title: "3 ways to develop your skill",
    date: "Feb 16, 2023",
    buttons: ["Figma", "Web"],
  },
];
const Blog = () => {
  return (
    <section>
      <Title title={"Blog"} />
      <div className="blog-container">
        {blogData.map((item, index) => (
          <div className="blog-div" key={index}>
            <img className="blog-img" src={item.src} alt="img" />
            <div className="blog-details-div">
              <p
                style={{fontSize: "12px", color: "#ccc", marginBottom: "32px"}}
              >
                {item.date}
              </p>
              <h3>{item.title}</h3>
              <div style={{display: "flex", flexDirection: "row", gap: "30px"}}>
                {item?.buttons?.map((btn, btn_index) => (
                  <button className="hire-me" key={btn_index}>
                    {btn}
                  </button>
                ))}
              </div>
            </div>
            <button
              className="hire-me"
              style={{
                color: "black",
                backgroundColor: "white",
                width: "fit-content",
                height: "fit-content",
                float: "right",
              }}
            >
              Read aloud
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;

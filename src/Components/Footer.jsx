import React from "react";

const tags = ["WEBFLOW", "FIGMA", "DESIGNER", "DEVELOPER"];

const Footer = () => {
  return (
    <footer className="footer">
      {tags.map((t, i) => (
        <div className="text-design-container" key={i}>
          <p className="text-design">{t}</p>
          <img src="./Star.png" alt="star" />
        </div>
      ))}
      <div className="content ">
        <h1>LET’S TALK!</h1>
        <p style={{textAlign: "center"}}>rehanurraihan@gmail.com</p>

        <div className="bottom-tags">
          <p>© Rehan Raihan - 2023</p>
          <ul>
            <li>Dribble</li>
            <li>Behance</li>
            <li>Twiiter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

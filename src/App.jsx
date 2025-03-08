import Banner from "./Components/Banner";
import Blog from "./Components/Blog";
import Experience from "./Components/Experience";
import Expertise from "./Components/Expertise";
import Navbar from "./Components/Navbar";
import Works from "./Components/Works";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Banner />
        <Expertise />
        <Works />
        <Experience />
        <Blog />
      </div>
    </>
  );
}

export default App;

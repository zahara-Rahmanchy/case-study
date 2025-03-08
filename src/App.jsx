import Banner from "./Components/Banner";
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
      </div>
    </>
  );
}

export default App;

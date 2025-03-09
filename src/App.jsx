import Banner from "./Components/Banner";
import Blog from "./Components/Blog";
import Experience from "./Components/Experience";
import Expertise from "./Components/Expertise";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import TestimonialSlider from "./Components/Testimonial";
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
        <TestimonialSlider />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}

export default App;

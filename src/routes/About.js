import Navbar from "../components/Navbar";
import AboutImg from "../images/peace.jpeg";
import Footer from "../components/Footer";
import About from "../components/AboutMe";

function About() {
  return (
    <div>
      <Navbar />
      <Body cName="body-about" bodyImg={AboutImg} title="About Me" />
      <Footer />
    </div>
  );
}

export default About;

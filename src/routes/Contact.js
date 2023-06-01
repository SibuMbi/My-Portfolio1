import Navbar from "../../my-journey/src/components/Navbar";
import AboutImg from "../images/sun.jpeg";
import Footer from "../../my-journey/src/components/Footer";
import Contact from "../../my-journey/src/components/ContactForm";

function Contact() {
  return (
    <div>
      <Navbar />
      <Body cName="body-about" bodyImg={AboutImg} title="Contact Me" />
      <Footer />
    </div>
  );
}

export default Contact;

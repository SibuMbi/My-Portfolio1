import Footer from "../../my-journey/src/components/Footer";
import Navbar from "../../my-journey/src/components/Navbar";
import Body from "../../my-journey/src/components/Body";

function Home() {
  return (
    <div>
      <Navbar />
      <Body
        cName="Body"
        bodyImg="/images/chef.jpeg"
        title="My Journey My Story"
        text="Welcome to a short story about my work history"
      />
      <Footer />
    </div>
  );
}

export default Home;

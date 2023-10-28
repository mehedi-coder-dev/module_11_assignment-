import "../assets/css/style.css";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Service from "../components/Service";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="body">
        <Hero />
        <About />
        <Project />
        <Service />
      </div>
      <Footer/>
    </>
  );
};

export default Home;

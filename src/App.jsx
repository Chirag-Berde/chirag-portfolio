import About from "./components/about/About";
import Certificates from "./components/certificates/Certificates";
import Connect from "./components/connect/Connect";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Youtube from "./components/youtube/Youtube";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Works />
      <About />
      <Skills />
      <Certificates />
      <Youtube />
      <Connect />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;

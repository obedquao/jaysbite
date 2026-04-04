import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import About from "./sections/about";
import Menu from "./sections/menu";
import CustomOrder from "./sections/customoder";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <CustomOrder />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

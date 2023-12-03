import "./App.css";
import About from "./components/About";
import Answers from "./components/Answers";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Home from "./components/Home";
import Integration from "./components/Integration";
import Pricing from "./components/Pricing";
import Product from "./components/Product";
import Testimonials from "./components/Testimonials";
import icon from "./images/icon.svg";
function App() {
  return (
    <div className=" relative">
      <Header />
      <Home />
      <Product />
      <About />
      <Integration />
      <Answers />
      <Pricing />
      <Testimonials/>
      <Footer/>
      <div className=" fixed bottom-5 right-5 ">
        <button className=" rounded-xl shadow-xl px-4 p-3 whitespace-nowrap bg-white font-bold text-sm flex flex-row items-center justify-center">
          <img
            src={icon}
            alt="icon"
            className="max-w-[1rem] max-h-[1rem] mx-2"
          ></img>
          Made in framer
        </button>
      </div>
    </div>
  );
}

export default App;

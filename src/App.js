import "./App.css";
import Contact from "./component/Contact";
import NavBar from "./component/NavBar";

function App() {
  return (
    <section className=" h-[100dvh] flex justify-center items-center bg-[#0f141a] sm:bg-[#dce6ef] transition-all duration-1000">
      <div className=" h-[90vh] m-2 scroll-smooth   w-[100vw] container sm:bg-white bg-[#0f141a] rounded-lg overflow-x-clip overflow-y-hidden p-2 ">
        <NavBar />
        <div className="overflow-y-scroll h-full gap-2 bg-[#0f141a] m-2 transition-all duration-1000">
          <Contact />
          <Contact /> <Contact /> <Contact /> <Contact /> <Contact />{" "}
          <Contact /> <Contact /> <Contact /> <Contact /> <Contact />{" "}
          <Contact /> <Contact /> <Contact />
        </div>

        {/* <Navlist /> */}
      </div>
    </section>
  );
}

export default App;

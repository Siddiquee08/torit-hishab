import "./App.css";
import image from "./assets/Torit hishab.svg";
import Input from "./components/Input/Input";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="">
      <Header></Header>
      <div className="flex flex-col justify-center items-center">
        <img src={image} alt="" />
        <h1 className=" text-xl text-s-3xl hishab mt-2 font-bold text-center">
          তড়িৎ হিসাব
        </h1>
      </div>
      <Input></Input>
      <Footer></Footer>
    </div>
  );
}

export default App;

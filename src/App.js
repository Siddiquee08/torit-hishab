import logo from "./logo.svg";
import "./App.css";
import image from "./assets/IMG_20221122_185610.png";
import Input from "./components/Input/Input";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col justify-center items-center">
        <img src={image} alt="" />
        <h1 className=" text-xl text-s-3xl text-blue-400 mt-2 font-bold text-center">
          তড়িৎ হিসাব
        </h1>
      </div>
      <Input></Input>
    </>
  );
}

export default App;

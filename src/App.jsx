// import './App.css'
import Demo1 from "./jsx/Demo1";
import JsxExpressions from "./jsx/JsxExpressions";
import Car from "./jsx/Car";
import MyCars from "./Lists/MyCars";
import MyForm from "./Forms/MyForm";

function App() {
  return (
    <>
      <div className="App">
        <Demo1 />
        <JsxExpressions />
        <Car name="Fiat" model="500" color="white" />
        <MyCars />
        <MyForm />
      </div>
    </>
  );
}

export default App;

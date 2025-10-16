// import './App.css'
import Demo1 from "./jsx/Demo1";
import JsxExpressions from "./jsx/JsxExpressions";
import Car from "./jsx/Car";
import MyCars from "./Lists/MyCars";
import MyForm from "./Forms/MyForm";
import Counter from "./useState/Counter";
import Form from "./useState/Form";

function App() {
  return (
    <>
      <div className="App">
        {/* <Demo1 />
        <JsxExpressions />
        <Car name="Fiat" model="500" color="white" />
        <MyCars />
        <MyForm /> */}
        <Counter />
        <Form />
      </div>
    </>
  );
}

export default App;

// import './App.css'
import Demo1 from "./jsx/Demo1";
import JsxExpressions from "./jsx/JsxExpressions";
import Car from "./jsx/Car";
import MyCars from "./Lists/MyCars";
import MyForm from "./Forms/MyForm";
import Counter from "./useState/Counter";
import Form from "./useState/Form";
import Users from "./UseEffect/Users";
import Timer from "./UseEffect/Timer";
import Interval from "./UseEffect/Interval";
import Autofucus from "./UseRef/Focus";
import ClickCounter from "./UseRef/ClickCounter";
import CountUseRef from "./UseRef/CountUseRef";

function App() {
  return (
    <>
      <div className="App">
        {/* <Demo1 />
        <JsxExpressions />
        <Car name="Fiat" model="500" color="white" />
        <MyCars />
        <MyForm /> */}
        {/* <Counter /> */}
        {/* <Form />  */}
        {/* <Users /> */}
        {/* <Timer />
        <Interval /> */}
        <Autofucus /> <br />
        <ClickCounter />
        <CountUseRef />
      </div>
    </>
  );
}

export default App;

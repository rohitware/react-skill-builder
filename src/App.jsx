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
import UserContextProvider from "./UseContext/UserContextProvider";
import CounterReducer from "./UseReducer/CounterReducer";
import CompReducer from "./UseReducer/CompReducer";
import InputBox from "./useState/InputBox";
import EveryRender from "./UseEffect/EveryRender";
import RunOnce from "./UseEffect/RunOnce";
import Dependency from "./UseEffect/Dependency";

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
        {/* <Autofucus /> <br /> */}
        {/* <ClickCounter /> */}
        {/* <CountUseRef /> */}
        {/* <UserContextProvider /> */}
        {/* <CounterReducer /> */}
        {/* <CompReducer /> */}
        {/* <EveryRender /> */}
        {/* <RunOnce /> */}
        <Dependency />
      </div>
    </>
  );
}

export default App;

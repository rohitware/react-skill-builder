function Car(props) {
  // const myobj = {
  //   name: "Fiat",
  //   model: "500",
  //   color: "white",
  // };
  return (
    <>
      <h1>
        My car is a {props.color} {props.name} {props.model}
      </h1>
    </>
  );
}
export default Car;

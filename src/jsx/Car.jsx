function Car(props) {
  const { color, name, model } = props;
  // const myobj = {
  //   name: "Fiat",
  //   model: "500",
  //   color: "white",
  // };
  return (
    <>
      <h1>
        My car is a {color} {name} {model}
      </h1>
    </>
  );
}
export default Car;

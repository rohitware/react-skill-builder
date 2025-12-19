import React, { useReducer } from "react";

function CompReducer() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_FORM":
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        };
      case "RESET_FORM":
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FORM",
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleReset = () => {
    dispatch({ type: "RESET_FORM" });
  };
  console.log(state);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        name="name"
        value={state.name}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Email"
        name="email"
        value={state.email}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        name="password"
        value={state.password}
        onChange={handleChange}
      />

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default CompReducer;

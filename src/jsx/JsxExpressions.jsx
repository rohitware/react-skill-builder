import React from "react";

// 🔹 Utility function
function kwtohp(kw) {
  return kw * 1.36;
}

function JsxExpressions() {
  //   const hp = 218 * 1.36;
  //   const hp = kwtohp(218); // use the utility function

  return (
    <div>
      <h1>My car</h1>
      <p>It has {kwtohp(218)} horsepower</p>
    </div>
  );
}

export default JsxExpressions;

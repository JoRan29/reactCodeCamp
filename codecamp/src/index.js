import React from "react";
import ReactDOM from "react-dom";

function MyApp() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is a paragraph!</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("root"));

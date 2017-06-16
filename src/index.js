import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "material-icons/css/material-icons.css";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

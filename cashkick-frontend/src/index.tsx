import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const title = "React with Webpack and Babel";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found");
}

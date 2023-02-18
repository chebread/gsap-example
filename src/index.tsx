import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const targetDom = document.getElementById("root");
const root = ReactDOM.createRoot(targetDom as HTMLElement); // targetDom이 Null이라 ! 추가
root.render(
  <>
    <App />
  </>
);

import * as ReactDOMClient from "react-dom/client";
import React from "react";
import KetcherExample from "./App";

const molecular = document.getElementById("mol").value.toString();
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<KetcherExample molecular={molecular} />);

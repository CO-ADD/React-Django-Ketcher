import * as ReactDOMClient from "react-dom/client";
import React from "react";
import KetcherExample from "./App";

const object_mol = document.getElementById("mol").value.toString();
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<KetcherExample molecular={object_mol} />);

import * as ReactDOMClient from "react-dom/client";
import React from "react";
import KetcherExample from "./App";

const object_mol = document.getElementById("mol").value.toString();
const drug_id = "A001"; //document.getElementById("molecular_id").value.toString();
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<KetcherExample molecular={object_mol} drug_id={drug_id} />);

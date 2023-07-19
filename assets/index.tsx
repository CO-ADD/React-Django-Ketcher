import * as ReactDOMClient from "react-dom/client";
import React from "react";
import KetcherExample from "./KetcherExample";

const object_mol: string = (document.getElementById("mol") as HTMLInputElement).value.toString();
const drug_id: string = "A001"; //document.getElementById("molecular_id").value.toString();
const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(rootElement);
root.render(<KetcherExample molecular={object_mol} drug_id={drug_id} />);

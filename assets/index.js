// function component() {
//   const element = document.createElement("div");
//   element.innerHTML = "Hello webpack";
//   return element;
// }
// document.body.appendChild(component());
import * as ReactDOMClient from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom/client";
import KetcherExample from "./App";
import { render } from "react-dom";

// import { StandaloneStructServiceProvider } from "ketcher-standalone";
// import { Editor, Ketcher } from "ketcher-react";
// import "ketcher-react/dist/index.css";

// import Miew from "miew";

// window.Miew = Miew;

// const structServiceProvider = new StandaloneStructServiceProvider();

// export class KetcherExample extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleOnInit = this.handleOnInit.bind(this);
//   }

//   handleOnInit = async (Ketcher) => {
//     this.ketcher = Ketcher;
//     window.ketcher = Ketcher;

//     const initialData =
//       "\n  Ketcher  9282116442D 1   1.00000     0.00000     0\n\n  6  6  0  0  0  0            999 V2000\n    9.5500  -11.7000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   10.4160  -12.2000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   10.4160  -13.2000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    9.5500  -13.7000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    8.6840  -13.2000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    8.6840  -12.2000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n  1  2  1  0     0  0\n  2  3  1  0     0  0\n  3  4  1  0     0  0\n  4  5  1  0     0  0\n  5  6  1  0     0  0\n  6  1  1  0     0  0\nM  END\n";
//     this.ketcher.setMolecule(initialData);
//   };

//   render() {
//     return (
//       <Editor
//         staticResourcesUrl={""}
//         structServiceProvider={structServiceProvider}
//         onInit={this.handleOnInit}
//       />
//     );
//   }
// }

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<KetcherExample />);

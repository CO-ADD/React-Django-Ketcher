import React from "react";
import { StandaloneStructServiceProvider } from "ketcher-standalone";
import { Editor, Ketcher } from "ketcher-react";
import "ketcher-react/dist/index.css";

import Miew from "miew";

window.Miew = Miew;

const structServiceProvider = new StandaloneStructServiceProvider();

export class KetcherExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnInit = this.handleOnInit.bind(this);
  }

  handleOnInit = async (Ketcher) => {
    this.ketcher = Ketcher;
    window.ketcher = Ketcher;
    console.log("djnago var = " + "{{molecular}}");
    const mole = this.props.molecular.replace(/\\n/g, "\n");
    const initialData = mole;
    this.ketcher.setMolecule(initialData);
  };

  render() {
    return (
      <Editor
        staticResourcesUrl={""}
        structServiceProvider={structServiceProvider}
        onInit={this.handleOnInit}
      />
    );
  }
}

export default KetcherExample;

import React, { useState } from "react";
import { StandaloneStructServiceProvider } from "ketcher-standalone";
import { Editor } from "ketcher-react";
import "ketcher-react/dist/index.css";

const structServiceProvider = new StandaloneStructServiceProvider();

function KetcherExample(props) {
  const [ketcher, setKetcher] = useState(null);
  const [smiles, setSmiles] = useState("");

  const handleOnInit = (Ketcher) => {
    setKetcher(Ketcher);
    const mole = props.molecular.replace(/\\n/g, "\n");
    const initialData = mole;
    Ketcher.setMolecule(initialData);
  };

  const getSmiles = () => {
    ketcher.getSmiles().then((newSmiles) => {
      console.log("SMILES:", newSmiles);
      setSmiles(newSmiles);
    });
  };

  return (
    <div>
      <Editor
        staticResourcesUrl={""}
        structServiceProvider={structServiceProvider}
        onInit={handleOnInit}
        style={{ width: "400px", height: "400px" }}
      />
      <button onClick={getSmiles}>Get SMILES</button>
      <br />
      <textarea
        value={smiles}
        readOnly={true}
        id="getSmilesFromKetcher"
        hidden
      />
    </div>
  );
}

export default KetcherExample;

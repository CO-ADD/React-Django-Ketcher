import styled from "@emotion/styled";
import "./app.css";
import React, { useState } from "react";
import { StandaloneStructServiceProvider } from "ketcher-standalone";
import { Editor } from "ketcher-react";
import "ketcher-react/dist/index.css";
import CSS from "csstype";
import Viewer from "miew-react";

// const MyComponent = () => {
//   return <Viewer />;
// };

const GridWrapper = styled("div")`
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 270px 320px;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "Ketcher Panel Output";
  & > div {
    border: 1px solid grey;
  }
`;

const structServiceProvider = new StandaloneStructServiceProvider();
const editorstyle: CSS.Properties = {
  display: "flex",
  flexDirection:"column",
  width: "fit-content",
  height: "fit-content",
};
//define prop and state type
interface Props {
  molecular: string;
  drug_id: string;
}
interface State {
  ketcher: any;
  smiles: string;
  show: boolean;
  activeModalId: string | null;
}

function KetcherExample(props: Props) {
  const [ketcher, setKetcher] = useState<any>(null);
  const [sm_or_mo, setSm_or_Mo] = useState<string>("");
  // const [molfile, setMolfile] = useState<string>("");
  const mol = props.molecular.replace(/\\n/g, "\n");
  const handleOnInit = (Ketcher: any) => {
    setKetcher(Ketcher);
    const mole = props.molecular.replace(/\\n/g, "\n");
    const initialData = mole;
    Ketcher.setMolecule(initialData);
  };

  const getSmiles = () => {
    ketcher.getSmiles().then((newSmiles: string) => {
      localStorage.setItem("smiles_query", newSmiles);
      setSm_or_Mo(newSmiles);
    });
  };

  const getMolfile = () => {
    ketcher.getMolfile().then((newMolfile: string) => {
      // console.log("SMILES:", newMol);
      setSm_or_Mo(newMolfile);
    });
  };

  // const updateMol = () => {
  //   ketcher.getSmiles().then((newSmiles: string) => {

  //   });
  // };

  const errorHandler = (error: string) => {
    console.error(error);
  };

  return (
    // <div style={editorstyle}>
    <div style={editorstyle}>
      <GridWrapper>
        {/* <button id="updateMol" onClick={updateMol}>Update Mol</button> */}
        <Editor
          staticResourcesUrl={""}
          structServiceProvider={structServiceProvider}
          onInit={handleOnInit}
          errorHandler={errorHandler}
        />
      </GridWrapper>

      <div>

        <button onClick={getSmiles}>Get SMILES</button>
        <button onClick={getMolfile}>Get Molfile</button>
        <br />
        <button id="updateMol" disabled={true}>Update Mol</button>
        <textarea
          value={sm_or_mo}
          readOnly={true}
          id="getSmilesFromKetcher"
          rows={5}
          cols={10}
        />
      </div>
      {/* </div> */}
    </div>
  );
}

export default KetcherExample;

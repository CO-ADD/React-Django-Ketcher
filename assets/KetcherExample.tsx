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
 
  const handleOnInit = (Ketcher: any) => {
    setKetcher(Ketcher);
    const mole = props.molecular.replace(/\\n/g, "\n");
    const initialData = mole;
    Ketcher.setMolecule(initialData);
  };


  const getMolfile = () => {
    ketcher.getMolfile('v2000').then((newMolfile: string) => {

      const text_id_smol: HTMLElement | null = document.getElementById('id_smol');
      text_id_smol.value = newMolfile;
    });
  };


  const errorHandler = (error: string) => {
    console.error(error);
  };

  return (
    <div style={editorstyle}>
      <div>

        <button id='get_new_mol' onClick={getMolfile}>update Mol</button>
      </div>
      <GridWrapper>
   
        <Editor
          staticResourcesUrl={""}
          structServiceProvider={structServiceProvider}
          onInit={handleOnInit}
          errorHandler={errorHandler}
        />
      </GridWrapper>

    </div>
  );
}

export default KetcherExample;

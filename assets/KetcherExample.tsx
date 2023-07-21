import "./app.css";
import React, { useState } from "react";
import { StandaloneStructServiceProvider } from "ketcher-standalone";
import { Editor } from "ketcher-react";
import "ketcher-react/dist/index.css";
import CSS from 'csstype';


const structServiceProvider = new StandaloneStructServiceProvider();
const editorstyle: CSS.Properties={
  width: 'fit-content',
  height:'fit-content',
}
//define prop and state type
interface Props{
  molecular: string;
  drug_id: string;
}
interface State{
  ketcher: any;
  smiles: string;
  show: boolean;
  activeModalId: string | null; 
}



function KetcherExample(props:Props) {
  const [ketcher, setKetcher] = useState<any>(null);
  const [smiles, setSmiles] = useState<string>("");
  const [molfile, setMolfile] = useState<string>("");

  const handleOnInit = (Ketcher:any) => {
    setKetcher(Ketcher);
    const mole = props.molecular.replace(/\\n/g, "\n");
    const initialData = mole;
    Ketcher.setMolecule(initialData);
  };

  const getSmiles = () => {
    ketcher.getSmiles().then((newSmiles: string) => {
      console.log("SMILES:", newSmiles);
      setSmiles(newSmiles);
    });
  };

  const getMolfile = () => {
    ketcher.getMolfile().then((newMolfile: string) => {
      // console.log("SMILES:", newMol);
      setMolfile(newMolfile);
    });
  };

  const updateMol = () => {
    ketcher.getSmiles().then((newSmiles: string) => {
      // console.log("SMILES:", newMol);
      localStorage.setItem('smiles_query', newSmiles);
    });
  };



  const errorHandler = (error: string) => {
    console.error(error);
  }

  return (
    <div style={editorstyle}>

          <Editor
            staticResourcesUrl={""}
            structServiceProvider={structServiceProvider}
            onInit={handleOnInit}
            errorHandler={errorHandler}
           
          />
          <button onClick={getSmiles}>Get SMILES</button>
          <button onClick={getMolfile}>Get Molfile</button>
          <br />
          <textarea
            value={molfile? molfile : smiles? smiles : ""}
            readOnly={true}
            id="getSmilesFromKetcher"
          />
          <button onClick={updateMol}>Update Mol</button>
    </div>
  );
}

export default KetcherExample;

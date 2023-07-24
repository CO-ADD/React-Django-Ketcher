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
  const [sm_or_mo, setSm_or_Mo] = useState<string>("");
  // const [molfile, setMolfile] = useState<string>("");

  const handleOnInit = (Ketcher:any) => {
    setKetcher(Ketcher);
    const mole = props.molecular.replace(/\\n/g, "\n");
    const initialData = mole;
    Ketcher.setMolecule(initialData);
  };

  const getSmiles = () => {
    ketcher.getSmiles().then((newSmiles: string) => {
      
      localStorage.setItem('smiles_query', newSmiles);
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
  }

  return (
    <div style={editorstyle}>
      {/* <button id="updateMol" onClick={updateMol}>Update Mol</button> */}
      <button id="updateMol" >Update Mol</button>

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
            value={sm_or_mo}
            readOnly={true}
            id="getSmilesFromKetcher"
          />
    </div>
  );
}

export default KetcherExample;

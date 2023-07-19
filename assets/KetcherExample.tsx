import "./app.css";
import React, { useState } from "react";
import { StandaloneStructServiceProvider } from "ketcher-standalone";
import { Editor } from "ketcher-react";
import "ketcher-react/dist/index.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const structServiceProvider = new StandaloneStructServiceProvider();

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
  const [show, setShow] = useState<boolean>(false);
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

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

  const handleShow = (id: string|null) => {
    setActiveModalId(id);
    setShow(true);
  };

  const handleClose = () => {
    setActiveModalId(null);
    setShow(false);
  };

  const errorHandler = (error: string) => {
    console.error(error);
  }

  return (
    <div>
       <Button variant="primary" onClick={() => handleShow(props.drug_id)}>
         {props.drug_id}
       </Button>
       <Modal
        show={show && activeModalId === props.drug_id}
        id={props.drug_id}
        onHide={handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="modal-90w"
        // scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Editor
            staticResourcesUrl={""}
            structServiceProvider={structServiceProvider}
            onInit={handleOnInit}
            errorHandler={errorHandler}
            // style={{ width: "300px", height: "300px" }}
          />
          <button onClick={getSmiles}>Get SMILES</button>
          <br />
          <textarea
            value={smiles}
            readOnly={true}
            id="getSmilesFromKetcher"
            hidden
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default KetcherExample;

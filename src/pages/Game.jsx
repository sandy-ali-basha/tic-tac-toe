import React, { useState } from "react";

//* components
import { _Board } from "api/home/_Board";
import Board from "components/Board";

//* Third Party components
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

//* store
import { SquaresStore } from "store/Squares";

function Game() {
  const [modal, setModal] = useState(false);
  const [boadrName, setBoardName] = useState("s");
  const [squares] = SquaresStore((state) => [state.squares]);

  function convertArrayToString(array) {
    return array
      .map((item) => {
        if (item === "X") return "1";
        if (item === "O") return "2";
        return "0";
      })
      .join("");
  }

  async function saveBoard(boadrName) {
    _Board
      .post({
        board: convertArrayToString(squares),
        name: boadrName,
      })
      .then((e) => {
        console.log(e);
        setBoardName("s");
      });
  }

  const toggle = () => setModal(!modal);

  return (
    <div className="vh-100">
      <Board />
      <Button
        className="mt-2 shadow"
        onClick={() => {
          toggle();
        }}
      >
        Save New Board
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Input
            id="BoardName"
            type="text"
            onChange={(e) => setBoardName(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            disabled={boadrName.length >= 3 ? false : true}
            onClick={() => {
              toggle();
              saveBoard(boadrName);
            }}
          >
            save
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Game;

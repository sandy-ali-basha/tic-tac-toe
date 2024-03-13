import React, { useState } from "react";

//* Third Party Component
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

//* Hooks
import { useDeleteGame } from "hooks/useDeleteGame";
import { useBoards } from "hooks/useBoards";

const DeleteDialog = ({ id }) => {
  const [open, setOpen] = useState(false);

  const deleteGame = useDeleteGame();

  const handleClickOpen = (e) => setOpen(true);
  const toggle = () => setOpen(!open);

  const { refetch } = useBoards();

  const DeleteGame = () => {
    deleteGame.mutate(id, {
      onSuccess: () => {
        setOpen(false);
        refetch();
      },
    });
  };

  return (
    <React.Fragment>
      <Button className="text-white " color="danger" onClick={handleClickOpen}>
        Delete
      </Button>

      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader id="alert-dialog-title" sx={{ color: "primary.main" }}>
          Delete Game
        </ModalHeader>
        <ModalBody>Are you Sure you want to Delete it ?</ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>no</Button>
          <Button onClick={() => DeleteGame()}>ok</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default DeleteDialog;

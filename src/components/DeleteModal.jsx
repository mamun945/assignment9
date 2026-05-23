"use client";
import {AlertDialog, Button, Modal} from "@heroui/react";

const DeleteModal = ({petInfoId, petName}) => {
    const handleDelete = async (petInfoId) => {
  await fetch(`http://localhost:5001/petsinfo/${petInfoId}`, {
    method: "DELETE",
  });

  window.location.reload(); // optional
};
  return (
     <AlertDialog>
    <Modal.Trigger>
      <button className="btn btn-sm w-full bg-red-500 hover:bg-red-600 text-white border-none">
        Delete
       </button>
       </Modal.Trigger>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{petName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button onClick={()=>handleDelete(petInfoId)} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  )
}

export default DeleteModal

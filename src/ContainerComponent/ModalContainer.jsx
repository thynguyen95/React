import React from "react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const ModalContainer = (props) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>{props.title}</Modal.Header>
                <Modal.Body>{props.componentContent}</Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>
                        I accept
                    </Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalContainer;

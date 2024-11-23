import React from "react";
import { Button, Modal } from "flowbite-react";

const ModalCar = (props) => {
    // cách 1
    // const { card, openModal, setOpenModal } = props;

    // cách 2
    const { card, closeModal } = props;

    return (
        <>
            {/* cách 1 */}
            {/* <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>{card.name}</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <img src={card.img} alt="" />
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {card.price}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>
                        I accept
                    </Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal> */}

            {/* cách 2 */}
            <Modal show={!!card} onClose={closeModal}>
                <Modal.Header>{card.name}</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <img src={card.img} alt="" />
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {card.price}
                        </p>
                    </div>
                </Modal.Body>
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

export default ModalCar;

/* 
    !! (hai dấu chấm than) là cách chuyển đổi bất kỳ giá trị nào thành boolean
        + Giá trị "truthy" (như object, string không rỗng, số khác 0) sẽ chuyển thành true.
        + Giá trị "falsy" (như null, undefined, 0, false, "") sẽ chuyển thành false. 
*/

// Giả sử các giá trị của selectedCard như sau:
// selectedCard = { id: 1, title: "Card 1" }; // Truthy
// !!selectedCard; // => true

// selectedCard = null; // Falsy
// !!selectedCard; // => false

// selectedCard = undefined; // Falsy
// !!selectedCard; // => false

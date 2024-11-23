import React from "react";
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";

const CarItem = (props) => {
    // cách 1
    // const { card, setOpenModal, setCard } = props;

    // cách 2
    const { card, openModal } = props;

    return (
        <>
            {/* cách 1 */}
            {/* <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={card.img}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {card.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {card.price}
                </p>
                <Button
                    onClick={() => {
                        setOpenModal(true);
                        setCard(card);
                    }}
                >
                    View card
                </Button>
            </Card> */}

            {/* cách 2 */}
            <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={card.img}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {card.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {card.price}
                </p>
                <Button
                    onClick={() => {
                        openModal(card);
                    }}
                >
                    View card
                </Button>
            </Card>
        </>
    );
};

export default CarItem;

import React, { useState } from "react";
import CarItem from "./CarItem";
import ModalCar from "./ModalCar";

const data = [
    {
        id: 1,
        name: "black car",
        img: "./img/products/black-car.jpg",
        price: 1000,
    },
    {
        id: 2,
        name: "red car",
        img: "./img/products/red-car.jpg",
        price: 2000,
    },
    {
        id: 3,
        name: "silver car",
        img: "./img/products/silver-car.jpg",
        price: 3000,
    },
    {
        id: 4,
        name: "steel car",
        img: "./img/products/steel-car.jpg",
        price: 4000,
    },
];

const ExCarStore = () => {
    // cách 1
    // const [openModal, setOpenModal] = useState(false);
    // const [selectedCard, setSelectedCard] = useState({});

    // cách 2: đóng mở modal dựa theo trạng thái state selectedCard
    const [selectedCard, setSelectedCard] = useState(null);
    const openModal = (card) => setSelectedCard(card);
    const closeModal = () => setSelectedCard(null);

    return (
        <div className="container mx-auto">
            <h1 className="text-center text-red-500">ExCarStore</h1>

            <h2>Danh sách xe</h2>
            <div className="grid grid-cols-3 gap-5">
                {data.map((item) => {
                    return (
                        <>
                            {/* cách 1 */}
                            {/* <CarItem
                                key={item.id}
                                card={item}
                                setOpenModal={setOpenModal}
                                setCard={setSelectedCard}
                            /> */}
                            {/* cách 2 */}
                            <CarItem
                                key={item.id}
                                card={item}
                                openModal={openModal}
                            />
                        </>
                    );
                })}
            </div>

            {/* cách 1 */}
            {/* <ModalCar
                card={selectedCard}
                openModal={openModal}
                setOpenModal={setOpenModal}
            /> */}
            {/* cách 2 */}
            {/* Modal hiển thị nếu có card được chọn */}
            {selectedCard && (
                <ModalCar
                    card={selectedCard}
                    // openModal={openModal}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
};

export default ExCarStore;

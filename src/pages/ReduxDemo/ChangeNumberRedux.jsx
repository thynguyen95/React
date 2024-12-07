import { Button } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ChangeNumberRedux = () => {
    // useSelector: hook dùng để lấy state từ redux về(redux stor )
    // state: đại diện cho object reducer ở store => cần lấy state của reducer nào thì . tên reducer đó
    const number = useSelector((state) => state.numberReducer);

    // useDispatch: hook dùng để đưa dữ liệu lên redux
    const dispatch = useDispatch();

    const handleChangeState = (quality) => {
        // để đưa dữ liệu lên store sẽ dùng dispatch
        const action = {
            type: "CHANGE_QUALITY", //bắt buộc
            payload: quality,
        };

        // dùng dispatch để gửi action lên store
        // khi hàm dispatch thực thi thì tất cả các hàm reducer đều chạy lại
        dispatch(action);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-center text-green-500 text-2xl mt-5">
                Change Number by Redux
            </h1>

            <div className="flex justify-center items-center mt-5">
                <Button
                    onClick={() => {
                        handleChangeState(-1);
                    }}
                >
                    -
                </Button>
                <span className="mx-5">{number}</span>
                <Button
                    onClick={() => {
                        handleChangeState(1);
                    }}
                >
                    +
                </Button>
            </div>
        </div>
    );
};

export default ChangeNumberRedux;

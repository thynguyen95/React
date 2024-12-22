import { Button } from "flowbite-react";
import React, { useMemo, useState } from "react";
import TableCart from "./TableCart";

// useMemo: dùng để cache lại giá trị sau mỗi lần render, khi nào dependency thay đổi thì giá trị đó mới tạo lại

const UseMemoDemo = () => {
    const [like, setLike] = useState(1);

    // đưa cart ra ngoài cpn thì ko cần dùng useMemo
    const cart = [
        { id: 1, name: "prod 1", price: 1000 },
        { id: 2, name: "prod 2", price: 2000 },
        { id: 3, name: "prod 3", price: 3000 },
    ];
    const memoCart = useMemo(() => cart, []);

    return (
        <div className="container mx-auto">
            <h1>UseMemoDemo</h1>

            <Button
                onClick={() => {
                    setLike(like + 1);
                }}
            >
                Like
            </Button>

            <TableCart cart={memoCart} />
        </div>
    );
};

export default UseMemoDemo;

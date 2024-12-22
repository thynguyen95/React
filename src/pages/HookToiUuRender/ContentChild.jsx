import React, { memo } from "react";

const ContentChild = (prop) => {
    console.log("child render");

    return (
        <div className="container mx-auto">
            <h1>ContentChild</h1>

            <p>Like in child: {prop.likeProp.number}</p>
        </div>
    );
};

export default memo(ContentChild);
// dùng memo để tối ưu render
// memo sẽ render lại khi prop đầu vào thay đổi
// nhược điểm: shallow compare props

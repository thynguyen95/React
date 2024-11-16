import React from "react";

const DemoEvent = () => {
    const handleLike = (e) => {
        console.log("liked");
        e.target.style.background = "red";
    };

    const handleClickPage = (number) => {
        console.log("number: ", number);
    };

    return (
        <div className="container">
            <h1 className="text-center mt-5">DemoEvent</h1>

            {/* event nhận vào 1 callback */}
            <button
                className="btn btn-dark"
                onClick={(e) => {
                    console.log("e: ", e);
                }}
            >
                Click me
            </button>
            {/* khi gọi hàm trong onclick sẽ không có () gọi hàm như html vì react sẽ hiểu là cú pháp databinding sẽ gọi hàm luôn */}
            <button className="btn btn-dark" onClick={handleLike}>
                like me
            </button>

            {/* khi cần truyền tham số vào hàm callback thì mượn anonymous function */}
            <button
                className="btn btn-dark"
                onClick={(e) => {
                    handleClickPage(1);
                }}
            >
                1
            </button>
            <button
                className="btn btn-dark"
                onClick={(e) => {
                    handleClickPage(2);
                }}
            >
                2
            </button>
            <button
                className="btn btn-dark"
                onClick={(e) => {
                    handleClickPage(3);
                }}
            >
                3
            </button>

            <div
                className="border border-danger"
                onMouseEnter={(e) => {
                    e.target.style.background = "red";
                    e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                    e.target.style.background = "black";
                    e.target.style.color = "green";
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat harum vero laudantium, exercitationem consectetur
                voluptates tempora ut consequuntur, obcaecati delectus dicta.
                Obcaecati, ducimus. Labore dolore voluptate animi minus
                consequatur vel.
            </div>

            <br />
            <br />
            <br />
            {/* vẫn dùng DOM như bt được, nhưng hạn chế dùng, gần như là không nên dùng vì trong react có state, bữa sau học tới sẽ giải thích rõ hơn */}
            <input
                type="text"
                className="form-control w-25"
                onChange={(e) => {
                    let value = e.target.value;
                    document.querySelector("#tag_p").innerHTML = value;
                }}
            />
            <p id="tag_p" className="alert alert-danger"></p>
        </div>
    );
};

export default DemoEvent;

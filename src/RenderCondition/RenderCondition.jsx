import React from "react";

const RenderCondition = () => {
    // true là đăng nhập rồi | false chưa đăng nhập
    const isLogin = false;

    const renderLogin = () => {
        if (isLogin) {
            return <h3>Hello Nam</h3>;
        }

        return <button>Đăng nhập</button>;
    };

    return (
        <div className="container">
            <h1 className="text-center text-danger">Render Condition</h1>

            {/* Nếu dùng toán tử ba ngôi khi cần xử lý điều kiện phức tạp hoặc trả về html phức tập thì code rất rối nên những trường hợp như vậy nên tách hàm và sử dụng if else để code tường minh */}
            {/* {isLogin ? <h3>Hello Nam</h3> : <button>Đăng nhập</button>} */}

            {renderLogin()}
        </div>
    );
};

export default RenderCondition;

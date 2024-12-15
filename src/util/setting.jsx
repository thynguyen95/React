export function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
export function deleteCookie(name) {
    document.cookie =
        name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

// Hàm kiểm tra token hết hạn thủ công
export const decodeToken = (token) => {
    try {
        const base64Url = token.split(".")[1]; // Phần payload của JWT
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split("")
                .map((c) => {
                    return (
                        "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
                    );
                })
                .join("")
        );

        return JSON.parse(jsonPayload);
    } catch (err) {
        console.error("Token không hợp lệ:", err.message);
        return null;
    }
};

export const isTokenExpired = (token) => {
    try {
        const decoded = decodeToken(token);

        // Kiểm tra nếu payload không có `exp`
        if (!decoded.exp) {
            throw new Error("Token không có trường 'exp'.");
        }

        // Lấy thời gian hiện tại (tính bằng giây)
        const currentTime = Math.floor(Date.now() / 1000);

        // So sánh thời gian hết hạn với thời gian hiện tại
        return decoded.exp < currentTime;
    } catch (err) {
        console.error("Lỗi khi kiểm tra token:", err.message);
        return true; // Trả về hết hạn nếu có lỗi
    }
};

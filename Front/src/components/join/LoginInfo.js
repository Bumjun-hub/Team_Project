import { useEffect, useState } from "react";
import "./LoginInfo.css";
import { Link } from "react-router-dom";

const LoginInfo = () => {
  const [loginUserId, setLoginUserId] = useState(null);

  useEffect(() => {
    const loginInfoId = localStorage.getItem("loginUserId");
    setLoginUserId(loginInfoId);
  }, []);

  const logout = () => {
    localStorage.removeItem("loginUserId");
    setLoginUserId(null);
    window.location.reload();
  };

  if (!loginUserId) {
    return null;
  }

  return (
    <div>
      {loginUserId}님 로그인되었습니다!
      <button onClick={logout} style={{ marginLeft: "10px" }}>로그아웃</button>

      {/* 관리자라면 관리자 페이지 링크 표시 */}
      {loginUserId === "admin" && (
        <div style={{ marginTop: '8px', textAlign:'center'}}>
          <Link to="/admin" style={{ color: "#007bff", textDecoration: "underline" }}>
            [관리자 페이지]
          </Link>
        </div>
      )}
    </div>
  );
};

export default LoginInfo;
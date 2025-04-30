import { useEffect, useState } from "react";
import "./LoginInfo.css";

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
          <button onClick={logout} style={{ marginLeft: "10px"}}>로그아웃</button>
        </div>
      );
  };

export default LoginInfo;
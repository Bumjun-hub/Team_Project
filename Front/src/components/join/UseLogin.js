import { useState } from "react";

export const UseLogin = () => {
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSubmit = () => {
    if (!loginId || !loginPassword) {
      alert("아이디와 비밀번호를 정확히 입력하세요!")
      return;
    };

    // 일단 아이디, 비번으로 정답지정함
    const correctId = "admin";
    const correctPassword ="1234";

    // 입력한 값과 정답 확인
    if (loginId === correctId && loginPassword === correctPassword) {
      console.log("로그인 성공");
      alert("로그인에 성공하였습니다")
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다")
    }
    };

  return {
    loginId, setLoginId,
    loginPassword, setLoginPassword,
    handleSubmit,
  };
};
import { useState } from "react";

export const UseMember = () => {
  const [id, setId] = useState("");
  const [idError,setIdError] = useState(false);
  const [idCheck, setIdCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [name, setName] = useState("");

  const [selectedCity, setSelectedCity] = useState(""); 
  const [selectedDistrict, setSelectedDistrict] = useState(""); 

  const [phone, setPhone] = useState(""); 
  const [phoneError, setPhoneError] = useState(false);

  const [emailId, setEmailId] = useState("");  
  const [domain, setDomain] = useState("");  
  const [selfDomain, setSelfDomain] = useState("");  
  const [selectSelfDomain, setSelectSelfDomain] = useState(false);  

  const handleSubmit = () => {
    console.log("회원가입 시도");
    console.log("아이디: ", id);
    console.log("비밀번호: ", password);
    console.log("비밀번호 확인: ", passwordConfirm);
    console.log("이름: ", name);
    console.log(`주소: ${selectedCity} ${selectedDistrict}`);
    console.log("전화번호: ", phone);
    console.log(`이메일: ${emailId}@${selectSelfDomain ? selfDomain : domain}`);
  };

  const handleCheckId = () => {
    console.log("아이디 중복확인 시도");
    console.log("현재 입력한 아이디:", id);
    setIdCheck(true);
  };

  const memberFormValid =
    id &&
    !idError &&
    idCheck &&
    password &&
    passwordConfirm &&
    !passwordError &&
    name &&
    selectedCity &&
    selectedDistrict &&
    emailId &&
    (domain || selfDomain);

  return {
    id, setId,
    idError, setIdError,
    password, setPassword,
    passwordConfirm, setPasswordConfirm,
    passwordError, setPasswordError,
    name, setName,
    selectedCity, setSelectedCity,
    selectedDistrict, setSelectedDistrict,
    phone, setPhone,
    phoneError, setPhoneError,
    emailId, setEmailId,
    domain, setDomain,
    selfDomain, setSelfDomain,
    selectSelfDomain, setSelectSelfDomain,
    handleSubmit,
    handleCheckId,
    memberFormValid,
  };
};

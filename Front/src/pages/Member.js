import "./Member.css"; // css
import Header from "../components/Header"; // 헤더 고정
import { Link } from "react-router-dom"; // 링크 (페이지 이동)
import { CityData } from "../components/join/CityData"; // 주소선택 지역목록
import { useState } from "react"; // 이메일 드롭박스 작업

const Member = () => {

    const [selectedCity, setSelectedCity] = useState(""); // 시,도 선택값을 저장하는 변수
    const [selectedDistrict, setSelectedDistrict] = useState(""); // 구,군 선택값을 저장하는 변수

    const [emailId, setEmailId] = useState(""); // 이메일 아이디 상태를 저장할 변수
    const [domain, setDomain] = useState(""); // 도메인 상태를 저장할 변수
    const [selfDomain, setSelfDomain] = useState(""); // 직접입력 도메인
    const [isSelfDomain, setIsSelfDomain] = useState(false); // 직접입력 선택 여부

    return (
        <>
        <Header/>

        <div className="member">
        
        {/* 회원가입 인사말 */}
            <div className="join-title"> 
                <h1>🐻 우리 함께해요</h1>
            </div>

        {/* 회원가입 기재사항 */}
            <div className="join-write">
            <img src="/img/peak-happy-bear.jpg" alt="정상에 도착해서 행복한 곰돌이와 동물친구들" className="img" />

                {/* input */} 
                <div className="join-input">
                <label>아이디</label>
                    <div className="id-check-row">
                        <input type="text" placeholder="사용하고자 하는 아이디 입력" required /> 
                        <input type="submit" value="중복확인" className="double-id" /> 
                    </div>

                    <label>비밀번호</label>
                    <input type="password" placeholder="사용하고자 하는 비밀번호 입력" required /> 

                    <label>비밀번호 확인</label>
                    <input type="password" placeholder="비밀번호 입력" required />

                    <label>이름</label>
                    <input type="text" placeholder="이름 입력" required /> 

                    <label>주소 선택</label>
                    <div className="address-row">
                        <select className="address-select" value={selectedCity}
                            onChange={(e) => {
                                setSelectedCity(e.target.value);
                                setSelectedDistrict("");
                            }}
                        >
                            <option value="">시/도 선택</option>
                            {Object.keys(CityData).map((city) => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>

                        <select className="address-select" value={selectedDistrict}
                            onChange={(e) => setSelectedDistrict(e.target.value)}
                            disabled={!selectedCity}
                        >
                            <option value="">구/군 선택</option>
                                {selectedCity &&
                                CityData[selectedCity].map((gugun) => (
                                <option key={gugun} value={gugun}>{gugun}</option>
                            ))}
                        </select>
                    </div>

                    <label>전화번호</label>
                    <input type="text" placeholder="전화번호 입력" required /> 

                    <label>이메일</label>
                        <div className="email-box">
                            <input type="text" 
                                placeholder="이메일 아이디 입력"
                                value={emailId}
                                onChange={(e) => setEmailId(e.target.value)} required /> 

                            <span>@</span>

                            <select value={isSelfDomain ? "custom" : domain}
                                onChange={(e) => {
                                    const value = e.target.value;
                                        if(value === "custom") {
                                            setIsSelfDomain(true);
                                            setDomain("");
                                        } else {
                                            setIsSelfDomain(false);
                                            setDomain(value);
                                        }
                                }} required>
                                    <option value="">선택</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="kakao.com">kakao.com</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="nate.com">nate.com</option>
                                    <option value="daum.net">daum.net</option>
                                    <option value="custom">직접입력</option>
                            </select>

                            {isSelfDomain && (
                                <input type="text" placeholder="직접 입력"
                                    value={selfDomain}
                                    onChange={(e) => setSelfDomain(e.target.value)}
                                    className="email-self"
                                    required/>
                            )}                             
                        </div>
                </div>
            </div>
            <div className="member-button">
                <Link to="/Login">
                    <button>취소</button>    
                </Link>
                <Link to="/Login">
                    <button>회원가입</button>    
                </Link>
            </div>
        </div>
        </>
    );
}

export default Member;
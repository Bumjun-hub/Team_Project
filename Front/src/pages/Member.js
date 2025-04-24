@ -1,90 +0,0 @@
import "./Member.css"; // css
import Header from "../components/Header"; // 헤더 고정
import { Link } from "react-router-dom"; // 링크 (페이지 이동)
import { useState } from "react"; // 이메일 컴포넌트 작업

const Member = () => {

    const [emailId, setEmailId] = useState(""); // 이메일 아이디 상태를 저장할 변수
    const [domain, setDomain] = useState(""); // 도메인 상태를 저장할 변수

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
                        <input type="text" placeholder="사용하고자 하는 아이디를 입력해주세요" required /> 
                        <input type="submit" value="중복확인" className="double-id" /> 
                    </div>

                    <label>비밀번호</label>
                    <input type="password" placeholder="사용하고자 하는 비밀번호를 입력해주세요" required /> 

                    <label>비밀번호 확인</label>
                    <input type="password" placeholder="입력하신 비밀번호를 입력해주세요" required />

                    <label>이름</label>
                    <input type="text" placeholder="이름을 입력해주세요" required /> 

                    <label>주소</label>
                    <select id="address" required>
                        <option value="">주소를 선택해주세요</option>
                        <option value="seoul">서울</option>
                        <option value="busan">부산</option>
                        <option value="daegu">대구</option>
                        <option value="incheon">인천</option>
                        <option value="jeju">제주</option>
                    </select>

                    <label>전화번호</label>
                    <input type="text" placeholder="전화번호를 입력해 주세요" required /> 

                    <label>이메일</label>
                        <div className="email-box">
                            <input type="text" 
                            placeholder="아이디를 입력해 주세요"
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)} required /> 

                            <span>@</span>

                            <select value={domain}
                            onChange={(e) => setDomain(e.target.value)} required>
                                <option value="">선택</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="yahoo.com">yahoo.com</option>
                            </select>
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
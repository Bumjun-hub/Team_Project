@ -1,44 +0,0 @@
import "./Login.css"; // css
import Header from "../components/Header"; // 헤더 고정
import { Link } from "react-router-dom"; // 링크 (페이지 이동)

const Login = () => {
    return (
        <>
        <Header/>
        
        <div className="login-box">
        

        {/* 로그인 인사말 */}
            <div className="login-title"> 
                <h1>🐻  WELCOME</h1>
            </div>

            <img src="/img/rock-bear.jpg" alt="바위절벽에 앉아있는 곰돌이" className="img" />

        {/* 국립공원 로그인 폼 */}
            <div className="login-form">

                <div className="login">
                    <input type="text" placeholder="아이디를 입력해주세요" required />
                    <input type="password" placeholder="비밀번호를 입력해주세요" required />
                </div>
                
                    <input type="submit" value="로그인" className="login-submit" />             
            </div>
                
        {/* 회원가입, 관리자 */ }
            <div className="login-etc">
                <Link to="/Member" className="link-text">회원가입</Link>
                <span className="divider">|</span>
                <Link to="/Admin" className="link-text">관리자페이지</Link> 
            </div>
        
        </div>
        </>
        
    );
}

export default Login;
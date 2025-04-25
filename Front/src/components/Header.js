import './Header.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './../pages/Modal';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';
import Member from '../pages/Member';
import JoinModal from './join/JoinModal'; // ✅ 추가
import { FaUserPlus } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // 지영 로그인 모달 추가

  return (
    <>
      <div className='Headdiv'>
        <div className='login'>
          <button onClick={() => setShowLogin(true)}>로그인</button>
          <JoinModal show={showLogin} onHide={() => setShowLogin(false)}>
            <Login onClose={() => setShowLogin(false)} />
          </JoinModal>
          <button><Link to="/member">회원가입</Link></button>
        </div>

        <div className='HeadDiv'>
          <div className='LeftDiv'></div>
          <div className='CenterDiv'>
            <Link to="/">
              <FaHome className='FaHome' />
            </Link>
          </div>

          <div className='RightDiv'>
            <div className='Login'>
              <Link to="/login" className="LoginButton">
                <MdLogin className="MdLogin" />
              </Link>
              <Link to="/member" className="MemberButton">
                <FaUserPlus className="FaUserPlus" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
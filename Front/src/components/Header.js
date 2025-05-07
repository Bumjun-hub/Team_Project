import './Header.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailModal from '../pages/DetailModal';
import { Link, Links, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import JoinModal from "./join/JoinModal"
import { FaUserPlus } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import LoginInfo from "./join/LoginInfo";

const Header = (() => {
    const [showModal, setShowModal] = useState(false);
    const [showLogin, setShowLogin] = useState(false); // 지영 로그인 모달 추가
    const loginUserId = localStorage.getItem("loginUserId");

    return (
        <div className='Header'>
            <div className='HeadDiv'>
                <div className='LeftDiv'>
                <Link to="/">
                        <FaHome className='FaHome' />
                    </Link>
                </div>
                <div className='CenterDiv'>
                    
                </div>
                
                <div className='RightDiv'>
                    <div className='Login'>
                      {!loginUserId && (
                        <>

                      {/* 지영 로그인 모달 */}
                      <button className="LoginButton" onClick={()=> setShowLogin(true)}>
                        <MdLogin className="MdLogin" />
                      </button>
                        <JoinModal show={showLogin} onHide={()=> setShowLogin(false)}>                       
                            <Login onClose={()=> setShowLogin(false)} />
                        </JoinModal>

                      <Link to="/member" className="MemberButton">
                        <FaUserPlus className="FaUserPlus" />
                      </Link>
                      </>
                      )}
                      <LoginInfo />
                    </div>
                </div>

                {/* <Button className='ModalButton' variant="primary" onClick={(DetailModal) => setShowModal(true)}> 디테일 모달 </Button> */}
                <DetailModal show={showModal} onHide={() => setShowModal(false)} />

            </div>

        </div>
    )
})
export default Header;
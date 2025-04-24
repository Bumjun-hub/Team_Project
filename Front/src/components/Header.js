import './Header.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './../pages/Modal';
import { Link, Links, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import JoinModal from './join/JoinModal';

const Header = (() => {
    const [showModal, setShowModal] = useState(false);
    const [showLogin, setShowLogin] = useState(false); // 지영 로그인 모달 추가

    return (
        <>
            <div className='Headdiv'>
                <div className='login'>
                    <button onClick={()=> setShowLogin(true)}>로그인</button>
                        <JoinModal show={showLogin} onHide={()=> setShowLogin(false)}>                       
                            <Login onClose={()=> setShowLogin(false)} />
                        </JoinModal>
                    <button><Link to="/member">회원가입</Link></button>
                </div>
                
                <Button variant="primary" onClick={(modal) => setShowModal(true)}> 모달창 띄우기 </Button>
                <Modal show={showModal} onHide={() => setShowModal(false)} />

            </div>

        </>
    )
})
export default Header;
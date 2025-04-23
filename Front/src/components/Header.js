import './Header.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './../pages/Modal';
import { Link, Links, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Member from '../pages/Member';

const Header = (() => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className='Headdiv'>
                <div className='login'>
                    <button><Link to='/login' element={<Login/>}>로그인</Link></button>
                    <button><Link to='/member' element={<Member/>}>회원가입</Link></button>
                </div>
                <Button variant="primary" onClick={(modal) => setShowModal(true)}> 모달창 띄우기 </Button>
                <Modal show={showModal} onHide={() => setShowModal(false)} />


            </div>

        </>
    )
})
export default Header;
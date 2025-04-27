import './Header.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailModal from '../pages/DetailModal';
import { Link, Links, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Member from '../pages/Member';
import { FaUserPlus } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const Header = (() => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
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

                <Button className='ModalButton' variant="primary" onClick={(DetailModal) => setShowModal(true)}> 디테일 모달 </Button>
                <DetailModal show={showModal} onHide={() => setShowModal(false)} />
            </div>

        </>
    )
})
export default Header;
import './Header.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './../pages/Modal';

const Header = (() => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className='Headdiv'>
                <div className='login'>
                    <button>로그인</button>
                </div>
                <Button variant="primary" onClick={(modal) => setShowModal(true)}> 모달창 띄우기 </Button>
                <Modal show={showModal} onHide={() => setShowModal(false)} />


            </div>

        </>
    )
})
export default Header;
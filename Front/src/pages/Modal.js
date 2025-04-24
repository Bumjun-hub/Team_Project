import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.css';

const ModalComponent = ({ show, onHide }) => {
    const [showIframe, setShowIframe] = useState(false);


    return (
        <>
            <Modal
                show={show}
                onHide={() => {
                    setShowIframe(false)// 닫을때 iframe도 같이 끄기
                    onHide()
                }}
                dialogClassName="MountainModal"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitle'>
                        <div>
                            <h1>산 상세정보</h1>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='Modalbody'>
                    <Modal.Body className='ModalBodyHead'>
                        <p>까꿍</p>
                    </Modal.Body>
                    <p>
                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum

                    </p>
                    <Button variant="primary" onClick={() => setShowIframe(!showIframe)}>
                        {showIframe ? '길찾기' : '길찾기'}
                    </Button>

                    {showIframe && (
                        <div style={{ marginTop: '15px' }}>
                            <iframe
                                src="https://map.naver.com/p/directions/-/14260869.2699205,4274865.9648065,%EA%B0%80%EC%95%BC%EC%82%B0%EA%B5%AD%EB%A6%BD%EA%B3%B5%EC%9B%901%EC%BD%94%EC%8A%A4,30877164,PLACE_POI/-/car?c=12.00,0,0,0,dh"
                                width="1000px"
                                height="400"
                                style={{ border: '1px solid #ccc', borderRadius: '8px' }}
                                title="Naver Map" 
                            />
                        </div>
                    )}


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComponent;  
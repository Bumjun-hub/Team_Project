import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './DetailModal.css';
import imgMountain from "../sample_data/SampleMap1.png";

const DetailModal = ({ show, onHide }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => setIsExpanded(prev => !prev);

    return (
        <Modal
            className="Modal"
            show={show}
            onHide={onHide}
            dialogClassName="MountainModal"
            aria-labelledby="modal-title"
        >
            <div className="ModalCloseWrapper">
                <Button variant="light" className="CloseBtn" onClick={onHide}>✕</Button>
            </div>

            <div className="ModalImageWrapper">
                <img src={imgMountain} alt="코스 지도" className="MapImage" />
            </div>

            <Modal.Body className="Modalbody">
                {/* 코스 & 길찾기 */}
                <div className="CourseInfo">
                    <strong>코스1</strong>
                    <button className="FindRouteBtn"
                        onClick={() => window.open("https://map.naver.com/p/entry/place/1708584848?c=14.00,0,0,0,dh")}
                    >길찾기</button>
                </div>

                {/* 정보 테이블 */}
                <table className="CourseTable">
                    <thead>
                        <tr>
                            <th>난이도</th>
                            <th>소요시간</th>
                            <th>등산길이</th>
                            <th>높이(고도)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span className="Tag Easy">쉬움</span></td>
                            <td>1시간 30분</td>
                            <td>5km</td>
                            <td>300m</td>
                        </tr>
                    </tbody>
                </table>

                {/* 날씨 */}
                <div className="WeatherSection">
                    <strong>날씨</strong>
                    <div className="WeatherTags">
                        {['4/13 ☀️', '4/14 ☀️', '4/15 ☀️', '4/16 ☀️', '4/17 ☀️'].map((w, i) => (
                            <span key={i} className="WeatherTag">{w}</span>
                        ))}
                    </div>
                </div>

                {/* 리뷰 */}
                <div className="ReviewSection">
                    <div className="CourseInfo">
                        <strong>리뷰</strong>
                        <div className="WriteBtn">작성하기</div>
                    </div>

                    <div className={`SpeechBubble ${!isExpanded ? "CutText" : ""}`}>
                        힘들어요 ….. ㅠㅠ 하지만 힘든만큼 보람이 있어요
                        <span className="MoreBtn" onClick={toggleExpand}>
                            {isExpanded ? "접기" : "더보기"}
                        </span>
                    </div>

                    <div className="SpeechBubble">
                        가족들이랑 같이 좋은 것 같아요 ~~
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <div className="SpeechPointer" />
                <Button variant="secondary" onClick={onHide}>
                    닫기
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DetailModal;
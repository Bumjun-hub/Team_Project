import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './DetailModal.css';
import imgMountain1 from "../sample_data/SampleMap1.png";
import AddReviewComponent from "../components/review/Review";
import NationalParkInfo from "./NationalParkInfo";
import axios from 'axios';



const DetailModal = ({ show, onHide,showTab}) => {

    // 시간 변환 함수
    const formatTime = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        if (hours > 0 && minutes > 0) {
            return `${hours}시간 ${minutes}분`;
        } else if (hours > 0) {
            return `${hours}시간`;
        } else {
            return `${minutes}분`;
        }
    };
    // 고도 변환 함수
    const formatAltitude = (altitude) => {
        if (altitude >= 1000) {
            return `${(altitude / 1000).toFixed(2)}km`;
        } else {
            return `${altitude}m`;
        }
    };

    const national_park_no =1;
    const track_no = 2;
    
    const [courses, setCourse] = useState(
        [{name: "",url: "" , national_park_no:"", track_no:"", time: "", distance: "", altitude: "", difficulty: "", mapImage: imgMountain1, reviews: []}]);

    useEffect(() => {
        const fetchCoursesAndReviews = async () => {
            try {
                // 1. 코스(트랙) 정보 가져오기
                const courseRes = await axios.get("/track/get_list_national_park", {
                    params: { national_park_no }
                });
                const rawCourses = courseRes.data;
    
                // 2. 모든 트랙 번호 추출
                const trackNos = rawCourses.map((course) => course.track_no);
    
                // 3. 각 track_no에 대해 개별 리뷰 요청
                const reviewPromises = trackNos.map((trackNo) =>
                    axios.get("/review/get_list_track", {
                        params: { national_park_no, track_no: trackNo }
                    }).then(res => ({
                        track_no: trackNo,
                        reviews: res.data.map((r) => r.review_content)
                    }))
                );
    
                const allReviewData = await Promise.all(reviewPromises);
    
                // 4. 리뷰를 track_no 기준으로 정리
                const reviewMap = allReviewData.reduce((acc, { track_no, reviews }) => {
                    acc[track_no] = reviews;
                    return acc;
                }, {});
    
                // 5. 최종 코스 데이터 구성
                const updatedCourses = rawCourses.map((item) => ({
                    name: item.track_name,
                    track_no: item.track_no,
                    url: item.track_find,
                    national_park_no: item.national_park_no,
                    time: formatTime(item.track_time),
                    distance: `${item.track_length}km`,
                    altitude: formatAltitude(item.track_altitude),
                    difficulty: item.track_difficulty,
                    mapImage: imgMountain1,
                    reviews: reviewMap[item.track_no] || [] // 매칭된 리뷰 삽입
                }));
    
                setCourse(updatedCourses);
            } catch (error) {
                console.error("데이터 호출 오류", error.response?.data || error.message);
            }
        };
    
        fetchCoursesAndReviews();
    }, []);
    
    const [isExpanded, setIsExpanded] = useState(false);
    const [showAddReview, setShowAddReview] = useState(false);
    const [activeTab, setActiveTab] = useState(showTab || 'course');
    const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const [contentFade, setContentFade] = useState(true);

    useEffect(() => {
        if (show) {
            setTimeout(() => setFade(true), 10);
        } else {
            setFade(false);
        }
    }, [show]);

    const toggleExpand = () => setIsExpanded(prev => !prev);

    const handleAddReview = (newReview) => {
        courses[currentCourseIndex].reviews.push(newReview);
    };

    const handlePrevCourse = () => {
        if (currentCourseIndex > 0) {
            setContentFade(false);
            setTimeout(() => {
                setCurrentCourseIndex(currentCourseIndex - 1);
                setContentFade(true);
            }, 300);
        }
    };

    const handleNextCourse = () => {
        if (currentCourseIndex < courses.length - 1) {
            setContentFade(false);
            setTimeout(() => {
                setCurrentCourseIndex(currentCourseIndex + 1);
                setContentFade(true);
            }, 300);
        }
    };

    const switchTab = (tab) => {
        if (tab !== activeTab) {
            setContentFade(false);
            setTimeout(() => {
                setActiveTab(tab);
                setContentFade(true);
            }, 300);
        }
    };

    const currentCourse = courses[currentCourseIndex];

    return (
        <>
            <Modal show={show} onHide={onHide} aria-labelledby="modal-title" className={fade ? "fade-in" : "fade-out"}
            dialogClassName="detail-modal-custom">
                <div className="ModalTopWrapper">
                    <div className="TabWrapper">
                        <button
                            className={`TabButton ${activeTab === 'course' ? "ActiveTab" : ""}`}
                            onClick={() => switchTab('course')}
                        >
                            코스 정보
                        </button>

                        <button
                            className={`TabButton ${activeTab === 'park' ? "ActiveTab" : ""}`}
                            onClick={() => switchTab('park')}
                        >
                            국립공원 소개
                        </button>

                    </div>

                    <div className="ModalCloseWrapper">
                        <Button variant="light" className="CloseBtn" onClick={onHide}>✕</Button>
                    </div>
                </div>

                <div className={contentFade ? "content-fade-in" : "content-fade-out"}>
                    {activeTab === 'course' ? (
                        <>
                            <div className="ModalImageWrapper">
                                <img src={currentCourse.mapImage} alt="코스 지도" className="MapImage" />
                            </div>

                            <Modal.Body className="Modalbody">
                                <div className="CourseInfo">
                                    <strong>{currentCourse.name}</strong>
                                    <button
                                        className="FindRouteBtn"
                                        onClick={() => window.open(currentCourse.url)}
                                    >
                                        길찾기
                                    </button>
                                </div>

                                <table className="CourseTable">
                                    <thead>
                                        <tr>
                                            <th>난이도</th>
                                            <th>소요시간</th>
                                            <th>등산길이</th>
                                            <th>고도</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span className={`Tag ${currentCourse.difficulty === "쉬움" ? "Easy" : "Medium"}`}>{currentCourse.difficulty}</span></td>
                                            <td>{currentCourse.time}</td>
                                            <td>{currentCourse.distance}</td>
                                            <td>{currentCourse.altitude}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="ReviewSection">
                                    <div className="CourseInfo">
                                        <strong>리뷰 ({currentCourse.reviews.length})</strong>
                                        현재 공원/코스 {currentCourse.national_park_no}, {currentCourse.track_no} 
                                        <div className="ReviewButtons">
                                            <button className="MoreLink" onClick={toggleExpand}>
                                                {isExpanded ? "접기" : "자세히"}
                                            </button>
                                            <button
                                                className="WriteBtn"
                                                onClick={() => setShowAddReview(true)}
                                            >
                                                리뷰 추가
                                            </button>
                                        </div>
                                    </div>

                                    {currentCourse.reviews.map((text, idx) => (
                                        <div key={idx} className={`SpeechBubble ${!isExpanded ? "CutText" : ""}`}>
                                            {text}
                                        </div>
                                    ))}
                                </div>
                            </Modal.Body>
                        </>
                    ) : (
                        <NationalParkInfo />
                    )}
                </div>

                {activeTab === 'course' && (
                    <Modal.Footer className="PaginationFooter">
                        <Button variant="light" onClick={handlePrevCourse} disabled={currentCourseIndex === 0}>
                            ◀ 이전
                        </Button>
                        <span>{currentCourseIndex + 1} / {courses.length}</span>
                        <Button variant="light" onClick={handleNextCourse} disabled={currentCourseIndex === courses.length - 1}>
                            다음 ▶
                        </Button>
                    </Modal.Footer>
                )}
            </Modal>
            {/* ✨ 리뷰 작성 모달 별도 렌더링 */}
            <AddReviewComponent
                show={showAddReview}
                onHide={() => setShowAddReview(false)}
                onSubmit={(newReview) => {
                    handleAddReview(newReview);
                    setShowAddReview(false);
                }}
                nation_park_no={currentCourse.national_park_no}
                track_no={currentCourse.track_no}
            />
        </>
    );
};

export default DetailModal;
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './DetailModal.css';
import imgMountain1 from "../sample_data/SampleMap1.png";
import AddReviewComponent from "../components/review/Review";
import NationalParkInfo from "./NationalParkInfo";
import axios from 'axios';
import { useCallback } from 'react';


const DetailModal = ({ show, onHide,showTab, props}) => {

    // 데이터 호출
    const national_park_no =1;
    const track_no = 2;
    const [useReview, setReview] = useState({
        allReviews: [],     // 코스 리뷰
    });
    const [courses, setCourse] = useState(
        [
            {
                name: "코스1",
                time: "1시간 30분",
                distance: "5km",
                altitude: "300m",
                difficulty: "쉬움",
                mapImage: imgMountain1,
                reviews: [
                    "힘들어요 ….. ㅠㅠ 하지만 힘든만큼 보람이 있어요.",
                    "가족들이랑 같이 좋은 것 같아요 ~~"
                ]
            },
            {
                name: "코스2",
                time: "2시간",
                distance: "8km",
                altitude: "500m",
                difficulty: "보통",
                mapImage: imgMountain1,
                reviews: [
                    "힘들지만 정상에서 뷰가 미쳤어요!",
                    "커플끼리 가면 싸울수도..."
                ]
            },
        ]);
    useEffect(() => {
        axios.get("/review/get_list_track", {params:{national_park_no:national_park_no, track_no:track_no}})
        .then((result) => {
            const allReviews = result.data.map((item) => item.review_content);
            console.log(allReviews);
            setReview((prev) => ({
                ...prev,
                allReviews

            }))
        })
        .catch((error) => {
            console.error("Review 호출 오류", error);
        });
    }, []);

    useEffect(() => {
        axios.get("/track/get_list_national_park", {params:{national_park_no}})
        .then((result) => {
            console.log(result.data);
            const courses = result.data.map((item) => ({
                name: item.track_name,
                url: item.track_find,
                time: `${item.track_time}시간`,
                distance: `${item.track_length}km`,
                altitude: `${item.track_altitude}m`,
                difficulty: item.track_difficulty,
                mapImage: imgMountain1,
                reviews: []
            }) );
            console.log(courses);
            setCourse(courses);

        })
        .catch((error) => {
            console.error("Track List 호출 오류", error);
        });

        // axios.get("/review/get_list_track", {params:{national_park_no:national_park_no, track_no:track_no}})
        // .then((result) => {
        //     const allReviews = result.data.map((item) => item.review_content);
        //     console.log(allReviews);
        //     setTrackInfo((prev) => ({
        //         ...prev,
        //         allReviews

        //     }));
        // })
        // .catch((error) => {
        //     console.error("리뷰 호출 오류", error);
        // });
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
                                        onClick={() => window.open("https://map.naver.com/p/entry/place/1708584848?c=14.00,0,0,0,dh")}
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
            />
        </>
    );
};

export default DetailModal;
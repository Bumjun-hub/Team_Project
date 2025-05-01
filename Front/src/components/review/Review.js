/* import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import './Review.css';

const AddReviewComponent = ({ show, onHide, onSubmit }) => {
    const [reviewText, setReviewText] = useState("");

    const handleSubmit = () => {
        if (reviewText.trim() !== "") {
            onSubmit(reviewText);
            setReviewText("");
            onHide();
        }
    };

    const handleClose = () => {
        setReviewText("");
        onHide();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>리뷰 작성</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea
                    className="ReviewTextArea"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="리뷰를 입력해주세요."
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    취소
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    작성 완료
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddReviewComponent; */

import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import './Review.css';
import axios from "axios";

const AddReviewComponent = ({ show, onHide, onSubmit, national_park_no, track_no, user_id = "user01" }) => {
    useEffect(() => {
        console.log(national_park_no);
        console.log(track_no);
    }, [national_park_no, track_no]);

    const [reviewText, setReviewText] = useState("");
    
    const handleSubmit = async () => {
        const trimmed = reviewText.trim();
        if (trimmed === "") return;

        const now = new Date().toISOString();

        try {
            // 서버에 리뷰 등록
            console.log(national_park_no, track_no);
            await axios.post("/review/add", {
                national_park_no,
                track_no,
                review_content: trimmed,
                created_at: now,
                updated_at: now,
                user_id, // 기본은 "user01"
            });

            // 성공 시 콜백 호출
            onSubmit(trimmed);
            setReviewText("");
            onHide();
        } catch (error) {
            console.error("리뷰 등록 실패:", error.response?.data || error.message);
            alert("리뷰 등록 중 오류가 발생했습니다.");
        }
    };

    const handleClose = () => {
        setReviewText("");
        onHide();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>리뷰 작성</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea
                    className="ReviewTextArea"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="리뷰를 입력해주세요."
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    취소
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    작성 완료
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddReviewComponent;
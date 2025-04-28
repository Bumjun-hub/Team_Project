import { useState } from "react";
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

export default AddReviewComponent;
import { Row, Col, Container } from "react-bootstrap";
import ThumbsSliderVertical from "../slide/ThumbsSlider";

export default function SimpleProductDetail(props) {
    return (
        <div>
            <Row className={props.reverse ? "flex-row-reverse" : ""}>
                <Col xs={1} md={6} className="d-flex text-dark">
                    <div className="ps-5 pt-4">
                        <h1 className="fw-bold">
                            {props.title}
                        </h1>
                        <hr style={{ width: '100%' }} />
                        <h4>
                            Giá: {props.price}
                        </h4>
                        <br />
                        <div>
                            <h5>Đóng gói</h5>
                            <div>{props.wrap}</div>
                            <br />
                            <h5>Trọng Lượng</h5>
                            <div>{props.weight}</div>
                            <br />
                            <h5>Hạn sử dụng</h5>
                            <div>{props.expired}</div>
                        </div>
                    </div>
                </Col>
                <Col xs={1} md={6} className="d-flex align-items-center pt-4">
                    <div className="px-4 w-100">
                        <ThumbsSliderVertical slides={props.images} />
                    </div>
                </Col>
            </Row>
            <Container className="text-dark py-5">
                <Row>
                        <h3 className="fw-bold">
                            Đặc điểm nổi bật
                        </h3>
                        <div className='d-block mt-3'>
                            {props.description}
                        </div>
                </Row>
            </Container>

        </div>
    );
}
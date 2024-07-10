import { Row, Col, Container } from "react-bootstrap";
import ThumbsSliderVertical from "../slide/ThumbsSlider";
import { Suspense } from "react";
import Loading from "../bases/Loading";

export default function SimpleProductDetail(props) {
    return (
        <div>
            <Row className={props.reverse ? "flex-row-reverse" : ""}>
                <Col md={6} className="d-flex align-items-center pt-4">
                    <div className="px-4 w-100">
                        <Suspense fallback={<Loading />}>
                            <ThumbsSliderVertical slides={props.images} />
                        </Suspense>
                    </div>
                </Col>
                <Col md={6} className="d-flex text-dark">
                    <div className="ps-5 pt-4">
                        <h1 className="fw-bold">
                            {props.title}
                        </h1>
                        <hr style={{ width: '100%' }} />
                        <h5>
                            Giá: {props.price}
                        </h5>
                        <br />
                        <div>
                            <h6>Đóng gói</h6>
                            <div>{props.wrap}</div>
                            <br />
                            <h6>Trọng Lượng</h6>
                            <div>{props.weight}</div>
                            <br />
                            <h6>Hạn sử dụng</h6>
                            <div>{props.expired}</div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Container className="text-dark py-5">
                <Row>
                    <Col lg={10} xs={12} className='mx-auto'>
                        <h3 className="fw-bold">
                            Đặc điểm nổi bật
                        </h3>
                        <div className='d-block mt-3'>
                            {props.description}
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}
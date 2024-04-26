import { Row, Col } from "react-bootstrap";
import ThumbsSliderVertical from "../slide/ThumbsSlider";

export default function SimpleProductDetail(props) {
    return (
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
                        <br />
                        <div className="fw-bold text-decoration-underline">
                            Đặc điểm nổi bật
                        </div>
                        <div className='d-block mt-3'>
                            <p className="text-start fw-normal">
                                {props.description.map((item, idx) => {
                                    return <p>{item}</p>
                                })}
                            </p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={1} md={6} className="d-flex align-items-center pt-4">
                <div className="px-4 w-100">
                    <ThumbsSliderVertical slides={props.images} />
                </div>
            </Col>
        </Row>
    );
}
import { faCertificate, faClipboard, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row } from "react-bootstrap";

const Policy = ({policyData}) => {
    return (
        <section style={{display: policyData?.isShow ? 'block' : 'none'}}>
        <Row className=" mx-auto my-5 pb-5 gx-lg-4 gy-3" >
        {
            policyData?.items.map((data, index)=> (
                   <Col key={index} sm={1} md={4} >
                    <Card
                        className="mb-2  shadow-lg border-0 p-3"
                        style={{display: data?.isShow ? 'block' : 'none'}}
                    >
                        <Card.Body className="text-center">
                            <FontAwesomeIcon icon={data?.icon} size='2xl' className="my-3" />
                            <Card.Title className="fs-3 mb-2"> {data?.title}</Card.Title>
                            <Card.Text className="fs-6">
                            {data?.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                   </Col>
                ))
            }
                </Row>
        </section>
    );
};

export default Policy;
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
// import 

const Pricing = () => {
    return (
        <section className=''>
           <Card className='w-75 mx-auto my-5'>
                <Card.Body>
                    <Card.Title>Clean, Simple and Transparent Pricing</Card.Title>
                    <Card.Subtitle>Make things easier for your business.</Card.Subtitle>
                    <div>
                    <Row xs={1} md={4} className="g-4">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <Col key='index'>
                            <Card>
                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                    </Row>
                    </div>
                </Card.Body>
           </Card>
        </section>
    );
};

export default Pricing;
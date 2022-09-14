import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import pricingStyles from './Pricing.module.css'

const Pricing = () => {
    const priceDemo = [
        {
            id: 1,
            title: 'Intro',
            description: 'Power up your business',
            price: '20',
            features: [
                {
                    name: 'All limited links'
                },
                {
                    name: 'Customer support'
                },
                {
                    name: 'Unlimited Teams'
                },
                {
                    name: 'No ads'
                },
                {
                    name: 'Real-time stats'
                },
                {
                    name: 'Enhanced Performance'
                },
            ]
        },
        {
            id: 2,
            title: 'Popular',
            description: 'Power up your business',
            price: '59',
            features: [
                {
                    name: 'All limited links'
                },
                {
                    name: 'Customer support'
                },
                {
                    name: 'Unlimited Teams'
                },
                {
                    name: 'No ads'
                },
                {
                    name: 'Real-time stats'
                },
                {
                    name: 'Enhanced Performance'
                },
            ]
        },
        {
            id: 3,
            title: 'Best deal',
            description: 'Power up your business',
            price: '99',
            status: 'active',
            features: [
                {
                    name: 'All limited links'
                },
                {
                    name: 'Customer support'
                },
                {
                    name: 'Unlimited Teams'
                },
                {
                    name: 'No ads'
                },
                {
                    name: 'Real-time stats'
                },
                {
                    name: 'Enhanced Performance'
                },
            ]
        },
        {
            id: 4,
            title: 'Enterprise',
            description: 'Power up your business',
            price: '299',
            features: [
                {
                    name: 'All limited links'
                },
                {
                    name: 'Customer support'
                },
                {
                    name: 'Unlimited Teams'
                },
                {
                    name: 'No ads'
                },
                {
                    name: 'Real-time stats'
                },
                {
                    name: 'Enhanced Performance'
                },
            ]
        },
    ]
    return (
        <section className='my-5'>
           <Card className={`${pricingStyles.priceCard} mx-auto  p-3`}>
                <Card.Body>
                    <Card.Title className='fs-2 fw-bold pt-3'>Clean, Simple and Transparent Pricing</Card.Title>
                    <Card.Subtitle className='fw-normal my-3'>Make things easier for your business.</Card.Subtitle>
                    <div>
                    <Row className="g-4">
                        {
                            priceDemo.map((data,index)=> (
                                <Col key={index} sm={1} md={3}>
                                    <Card className={`${pricingStyles.singlePriceCard} my-2 my-lg-5 py-2`} 
                                        style={{backgroundColor: data?.status === 'active' && '#8f5df4',
                                                color: data?.status === 'active' && '#FFF'    
                                    }}
                                    >
                                        <Card.Body>
                                            <h1 className='fs-4 fw-bold py-3'>{data?.title}</h1>
                                            <h1 className=''><span className='fs-1 fw-bold'>${data?.price}</span><span className='fs-6 fw-normal'>/Month</span></h1>
                                            <p className='fs-6 py-3 fw-normal'>{data?.description}</p>
                                            <ul className='list-unstyled'>
                                               {
                                                data?.features?.map((item, index)=>(
                                                    <li key={index}><FontAwesomeIcon icon={faCheckCircle} color={data?.status === 'active' ? '#FFF' : '#8f5df4' } className='me-1'/>{item?.name}</li>
                                                ))
                                               }
                                            </ul>
                                            <button className={`${pricingStyles.buttonGradientOutline} my-3`} style={{backgroundColor: data?.status === 'active' && '#FFF'}}><span>Choose plan</span></button>
                                        </Card.Body>
                                    </Card>
                                 </Col>))              
                        }
                                
                    </Row>
                    </div>
                </Card.Body>
           </Card>
        </section>
    );
};

export default Pricing;
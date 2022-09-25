import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';
import images from "../../../public/image/images.jpg";
import image2 from "../../../public/image/clients.jpg";
import home10thStyles from './Home10th.module.css'
import Link from 'next/link';

const Home10th = (home10thData) => {
    const cards = [
        {
            id: 1,
            title: "Free And Open Source Software",
            date: 'september 11, 2022',
            img: '/image1.jpg',
            description: "Use Timeline to plan projects right the time. how the pieces fit together."
        },
        {
            id: 2,
            title: "Free And Open Source Software",
            date: 'september 11, 2022',
            img: '/image2.png',
            description: "Use Timeline to plan projects right the time. how the pieces fit together."
        },
        {
            id: 3,
            title: "Free And Open Source Software",
            date: 'september 11, 2022',
            img: '/image3.png',
            description: "Use Timeline to plan projects right the time. how the pieces fit together."
        },        
    ];
    return (
        <div className='my-5 py-5 container-lg' style={{fontFamily: 'Poppins'}}>
           <div>
           <h1 className='text-center fs-2 fw-bold my-3 '>Our Special Blogs</h1>
            <p className='text-center fs-6 mb-5'>On the other hand we denounce with righteous indignation dislike men who <br /> are so beguiled and demoralized</p>
            {/* d-flex flex-column flex-lg-row justify-content-md-between justify-content-between */}
            <div className='row row-cols-1 row-cols-md-3 g-4'>
            {
                cards.map(card => (
                    <div
                        key={card.id}>
                        
                        <div>
                            <Card className=' card shadow-lg rounded' >
                                <Image className='img-fluid rounded-top' src={card?.img} width='300px' height='200px' alt="" />
                                <Card.Body>
                                    <Card.Title className='fs-5 fw-bold'>{card.title}</Card.Title>
                                    <Card.Text className='fs-6'>
                                        {card.description}
                                    </Card.Text>
                                    <Link href='/' style={{textDecoration: 'none'}}><button className={`${home10thStyles.btnColor} border-0 btn-color`}>Read more <FontAwesomeIcon icon={faArrowRight}/></button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>)

                )
                }
            </div>
           </div>
        </div>
    );
};

export default Home10th;
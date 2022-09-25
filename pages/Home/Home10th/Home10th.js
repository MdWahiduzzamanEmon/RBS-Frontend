import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';
import images from "../../../public/image/images.jpg";
import image2 from "../../../public/image/clients.jpg";
import home10thStyles from './Home10th.module.css'
import Link from 'next/link';

const Home10th = ({home10thData}) => {
    // const cards = [
    //     {
    //         id: 1,
    //         title: "Free And Open Source Software",
    //         date: 'september 11, 2022',
    //         img: '/image1.jpg',
    //         description: "Use Timeline to plan projects right the time. how the pieces fit together."
    //     },
    //     {
    //         id: 2,
    //         title: "Free And Open Source Software",
    //         date: 'september 11, 2022',
    //         img: '/image2.png',
    //         description: "Use Timeline to plan projects right the time. how the pieces fit together."
    //     },
    //     {
    //         id: 3,
    //         title: "Free And Open Source Software",
    //         date: 'september 11, 2022',
    //         img: '/image3.png',
    //         description: "Use Timeline to plan projects right the time. how the pieces fit together."
    //     },        
    // ];
    return (
        // <div className="container-lg my-5 py-5 mx-auto"
        //     style={{
        //         fontFamily: 'Poppins',
        //         display: (home10thData?.isShow) ? "block" : "none"


        //     }}
        // > <div
        //     // style={{
        //     //     display: (home10thData?.titleData?.isShow) ? "block" : "none"
        //     // }}
        // >
        //         {
        //             home10thData?.titleData?.titleItems?.map((data) => (
        //                 <div key={data.id}

        //                 >
        //                     <h1 className="fs-2 text-center fw-bold my-3">{data.title} </h1>
        //                     <p className="text-center fs-6 mb-5">{data.titleDescription} </p>
        //                 </div>
        //             ))
        //         }
        //     </div>



        //     <div className='row row-cols-1 row-cols-md-3 g-4'
        //     // style={{
        //     //                     display: (home10thData?.items.isShow) ? "block" : "none"
        //     //                 }}
        //     >
        //         {
        //             home10thData?.cardItem?.items?.slice(0, 3).map(card => (
        //                 <div
        //                     key={card.id}

        //                 >

        //                     <div>
        //                         <Card className=' card shadow-lg rounded w-sm-50'
        //                         // style={{
        //                         //     display: (card.isShow) ? "block" : "none"
        //                         // }}
        //                         >
        //                             <Image className='img-fluid rounded-top' src={card.img} alt="" width="300px" height="200px" />
        //                             <Card.Body>
        //                                 <Card.Title className='fs-5 fw-bold'>{card.title}</Card.Title>
        //                                 <Card.Text className='fs-6'>
        //                                     {card.description}
        //                                 </Card.Text>
        //                                 <Link href='/' style={{ textDecoration: 'none' }}><button className={`${style.btnColor} border-0 `}>Read more <FontAwesomeIcon icon={faArrowRight} /></button></Link>
        //                             </Card.Body>
        //                         </Card>
        //                     </div>
        //                 </div>)

        //             )
        //         }
        //     </div>

        // </div>
        <div className='my-5 py-5 container-lg'
            style={{
                fontFamily: 'Poppins',
                display: (home10thData?.isShow) ? "block" : "none"

            }}
        >
            <div>
                {
                    home10thData?.titleData?.titleItems?.map((data) => (
                        <div key={data.id}

                        >
                            <h1 className="fs-2 text-center fw-bold my-3">{data.title} </h1>
                            <p className="text-center fs-6 mb-5">{data.titleDescription} </p>
                        </div>
                    ))

                }
                        <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {home10thData?.cardItem?.items?.slice(0,3).map(card => (
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
                                                    <Link href='/' style={{ textDecoration: 'none' }}><button className={`${home10thStyles.btnColor} border-0 btn-color`}>Read more <FontAwesomeIcon icon={faArrowRight} /></button></Link>
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
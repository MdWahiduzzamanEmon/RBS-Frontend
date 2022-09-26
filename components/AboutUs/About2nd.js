import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFingerprint, faHand, faHandBackFist, faHandHolding, faHandHoldingDroplet, faHandHoldingMedical, faHandsHoldingCircle, faLightbulb, faMobileScreen, faTabletScreenButton } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
import about2ndStyles from './About2nd.module.css'

// const cards = [
//     {
//         id: 1,
//         title: "Innovative Ideas Pixel- Perfect Design",
//         img: "/aboutCard1.png",
//         description: "Use Timeline to plan projects right the time. how the pieces fit together.",
//         icon: faLightbulb,

//     },
//     {
//         id: 2,
//         title: "Highly Customizable UI Experience",
//         img: "/aboutCard2.png",
//         description: "Use Timeline to plan projects right the time. how the pieces fit together.",
//         icon:faTabletScreenButton,

//     },
//     {
//         id: 3,
//         title: "Efficient Connectivity Assistance",
//         img: "/aboutCard3.png",
//         description: "Use Timeline to plan projects right the time. how the pieces fit together.",
//         icon: faFingerprint,

//     },



// ];

const Home2nd = ({about2ndData}) => {
    console.log(about2ndData)
    return (
        <div className="container-lg my-5 py-5 mx-auto"
            style={{
                fontFamily: 'Poppins'
            }}
        >
           {
            about2ndData?.titleData.map((data,index)=> (
                <div key={data?.id}>
                    <h1 className="fs-2 text-center fw-bold my-3">{data?.title}</h1>
                    <p className={`${about2ndStyles.description} text-center fs-6 mb-5`}>{data?.description}</p>

                </div>
            ))
           }
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    about2ndData?.items?.map((data,index) => (
                        <div
                            key={data.id}>

                            <div>
                                <Card className=' card shadow-lg rounded w-sm-50' >
                                    <div className='d-flex justify-content-center'>
                                        <FontAwesomeIcon className='fw-semibold py-3 px-2  ' style={{
                                            fontSize: "50px"
                                        }} icon={data?.icon} />
                                    </div>
                                   <Card.Body>
                                        <Card.Title className='fs-6 fw-bold'>{data?.title}</Card.Title>
                                        <Card.Text className='fs-6'>
                                            {data?.description}
                                        </Card.Text>
                                      
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>)

                    )
                }
            </div>

        </div>
    );
};

export default Home2nd;
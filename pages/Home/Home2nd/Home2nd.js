import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import axios from "axios";
import { Button, Card } from 'react-bootstrap';
// import images from "../../../public/";
// import avatar from "../../../public/banner2.jpeg";
import style from './Home2nd.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
// const cards = [
//     {
//         id: 1,
//         title: "Free And Open Source Software",
//         img: "/images.jpg",
//         description: "Use Timeline to plan projects right the time. how the pieces fit together."
//     },
//     {
//         id: 2,
//         title: "Free And Open Source Software",
//         img: "/banner2.jpeg",
      
//         description: "Use Timeline to plan projects right the time. how the pieces fit together."
//     },
//     {
//         id: 3,
//         title: "Free And Open Source Software",
//         img: "/image2.png",
//         description: "Use Timeline to plan projects right the time. how the pieces fit together."
//     },
    
   
    
// ];
// export const getStaticProps = async () => {
  
//     // Fetching data from jsonplaceholder.
//     const res = await fetch('api/home2ndapi');
//     let allData = await res.json();

//     // Sending fetched data to the page component via props.
//     return {
//         props: {
//             allData: allData
//         }
//     }
// }



const Home2nd = () => {
    const [home2ndInfo, setHome2ndInfo] = useState([]);
    useEffect( () => {
        axios
            .get('/api/home2ndapi')
            .then((res) => {
                setHome2ndInfo(res.data);
                
            })
            .catch((err) => {
                // console.log(err.response.status);
                if ((err)) {
                    console.log(err);
                }
            })
    }, [])
    console.log(home2ndInfo);
    return (
        <div className="container-lg my-5 py-5 mx-auto"
            style={{
                fontFamily: 'Poppins'
        }}
        >
            <h1 className="fs-2 text-center fw-bold my-3">Speed Up Your Workflow</h1>
            <p className="text-center fs-6 mb-5">Use Timeline to plan projects right the first time. See how the pieces you <br /> can spot gap sand overlaps before you start.</p>
           
            <div className='row row-cols-1 row-cols-md-3 g-4'>
            {
                    home2ndInfo.map(card => (
                    <div
                        key={card.id}>
                        
                        <div>
                            <Card className=' card shadow-lg rounded w-sm-50' >
                                <Image className='img-fluid rounded-top' src={card.img} alt="" width="300px" height="200px" />
                                <Card.Body>
                                    <Card.Title className='fs-5 fw-bold'>{card.title}</Card.Title>
                                    <Card.Text className='fs-6'>
                                        {card.description}
                                    </Card.Text>
                                    <Link href='/' style={{ textDecoration: 'none' }}><button className={`${style.btnColor} border-0 `}>Read more <FontAwesomeIcon icon={faArrowRight} /></button></Link>
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
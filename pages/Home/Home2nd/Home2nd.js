import Image from 'next/image';
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
// import images from "../../../public/image/";
// import avatar from "../../../public/banner2.jpeg";
import style from './Home2nd.module.css';
const cards = [
    {
        id: 1,
        title: "Free And Open Source Software",
        img: "/banner.jpeg",
        description: "Use Timeline to plan projects right the time. how the pieces fit together."
    },
    {
        id: 2,
        title: "Free And Open Source Software",
        img: "/banner2.jpeg",
      
        description: "Use Timeline to plan projects right the time. how the pieces fit together."
    },
    {
        id: 3,
        title: "Free And Open Source Software",
        img: "/image2.jpg",
        description: "Use Timeline to plan projects right the time. how the pieces fit together."
    },
    
   
    
];

const Home2nd = () => {
    return (
        <div className="container-lg my-24 mx-auto">
            <h1 className="text-center font-bold my-3">Speed Up Your Workflow</h1>
            <p className="text-center mb-5">Use Timeline to plan projects right the first time. See how the pieces you <br /> can spot gap sand overlaps before you start.</p>
           
            <div className='row row-cols-1 row-cols-md-3 g-4'>
            {
                cards.map(card => (
                    <div
                        key={card.id}>
                        
                        <div>
                            <Card className=' card shadow-lg rounded w-sm-50' >
                                <Image className='img-fluid rounded-top' src={card.img} alt="" width="200px" height="300px" />
                                <Card.Body>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>
                                        {card.description}
                                    </Card.Text>
                                    <Link href='/' style={{ textDecoration: 'none' }}><button className={`${style.btnColor} border-0 `}>Read more &rarr;</button></Link>
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
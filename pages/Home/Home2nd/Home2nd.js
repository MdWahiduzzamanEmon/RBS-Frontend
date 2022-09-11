import Image from 'next/image';
import { Button, Card } from 'react-bootstrap';
import images from "../../../public/image/images.jpg";
const cards = [
    {
        id: 1,
        title: "Free And Open Source Software",
        img: {images},
        description: "Use Timeline to plan projects right the time. how the pieces fit together."
    },
    {
        id: 2,
        title: "Free And Open Source Software",
        img: {images},
        description: "Use Timeline to plan projects right the time. how the pieces fit together."
    },
    {
        id: 3,
        title: "Free And Open Source Software",
        img: {images},
        description: "Use Timeline to plan projects right the time. how the pieces fit together."
    },
    
   
    
];

const Home2nd = () => {
    return (
        <div className=" my-24 mx-auto">
            <h1 className="text-center font-bold my-3">Speed Up Your Workflow</h1>
            <p className="text-center mb-5"
                style={{
                    color:"rgb(75, 101, 126)"
            }}
            >Use Timeline to plan projects right the first time. See how the pieces you <br /> can spot gap sand overlaps before you start.</p>
           
            <div className='d-flex flex-column flex-lg-row justify-content-lg-evenly'>
            {
                cards.map(card => (
                    <div
                        key={card.id}>
                        
                        <div>
                            <Card className=' card shadow-lg rounded' style={{ width: '18rem' }}>
                                <Image className='img-fluid rounded-top' src={images} alt="" />
                                <Card.Body>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>
                                        {card.description}
                                    </Card.Text>
                                    <button className='border-0 hover:text-primary'>Read more &rarr;</button>
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
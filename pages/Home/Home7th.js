import Image from 'next/image';
import { Card } from 'react-bootstrap';
import images from "../../public/image/images.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const cards = [
    {
        id: 1,
        title: "Free And Open Source Software",
        img: "../../public/image/images.jpg",
        description: "Use Timeline to plan projects right the time. how the pieces fit together."
    },
    {
        id: 2,
        title: "Free And Open Source Software",
        img: "../../public/image/images.jpg",
        description: "Use Timeline to plan projects right the time. how the pieces fit together."
    },
    {
        id: 3,
        title: "Free And Open Source Software",
        img: "../../public/image/images.jpg",
        description: "Use Timeline to plan projects right the time. how the pieces fit together."
    },
    {
        id: 4,
        title: "Free And Open Source Software",
        img: { images },
        description: "Use Timeline to plan projects right the time. how the pieces fit together."
    },
   

];

const Home7th = () => {
    return (
        <div className=" my-5 mx-auto">
            <h1 className="text-4xl text-center font-bold my-3">Our Software Features</h1>
            <p className="text-center mb-5">Use Timeline to plan projects right the first time. See how the pieces you <br /> can spot gap sand overlaps before you start.</p>
            <div className='d-flex flex-column flex-lg-row justify-content-md-evenly'>
                {
                    cards.map(card => (
                        <div
                            key={card.id}
                        >

                            <Card className=' card rounded w-sm-50 w-md-75' >
                                <FontAwesomeIcon icon={faSett} /> 
                                    <Card.Body>
                                        <Card.Title>{card.title}</Card.Title>
                                        <Card.Text>
                                            {card.description}
                                        </Card.Text>
                                        <button className='border-0 hover:text-primary'>Read more &rarr;</button>
                                    </Card.Body>
                                </Card>
                        </div>
                       
)
                      
                   )
               }


            </div>

        </div>
    );
};

export default Home7th;
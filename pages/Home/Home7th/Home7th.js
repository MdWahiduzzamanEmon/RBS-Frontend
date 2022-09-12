import Image from 'next/image';
import { Card } from 'react-bootstrap';
import images from "../../../public/image/images.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning, faCoffee, faDownload, faFileDownload, faGear, faReceipt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import style from './Home7th.module.css';
const cards = [
    {
        id: 1,
        title: "Free And Open Source Software",
      
        description: "Use Timeline to plan projects right the time. how the pieces fit together.",
        icon: faGear
    },
    {
        id: 2,
        title: "Free And Open Source Software",
       description: "Use Timeline to plan projects right the time. how the pieces fit together.",
        icon: faBoltLightning
    },
    {
        id: 3,
        title: "Free And Open Source Software",
      
        description: "Use Timeline to plan projects right the time. how the pieces fit together.",
        icon: faDownload
    },
    {
        id: 4,
        title: "Free And Open Source Software",
       
        description: "Use Timeline to plan projects right the time. how the pieces fit together.",
        icon: faReceipt
    },
   

];

const Home7th = () => {
    return (
        <div className=" container-lg my-5 mx-auto">
            <h1 className="text-4xl text-center font-bold my-3">Our Software Features</h1>
            <p className="text-center mb-5">Use Timeline to plan projects right the first time. See how the pieces you <br /> can spot gap sand overlaps before you start.</p>
            <div className='row row-cols-1 row-cols-md-4 g-4'>
                {
                    cards.map(card => (
                        <div
                            key={card.id}
                        >

                            <Card className=' card rounded w-sm-50 w-md-75 shadow-lg' >
                                <div className='d-flex justify-content-center mt-1'><FontAwesomeIcon className='bg-light p-3 rounded-2 fs-3' icon={card.icon} /> </div>
                               <Card.Body>
                                        <Card.Title>{card.title}</Card.Title>
                                        <Card.Text>
                                            {card.description}
                                        </Card.Text>
                                    <Link href='/' style={{ textDecoration: 'none' }}><button className={`${style.btnColor} border-0 btn-color`}>Read more &rarr;</button></Link>
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
// import images from "../../../public/";
// import avatar from "../../../public/banner2.jpeg";
// import style from './Home2nd.module.css';
const cards = [
    {
        id: 1,
        name: "Hanri Louice",
        img: "/team1.jpg",
        designation: "Sr. Web UI/UX Designer"
    },
    {
        id: 2,
        name: "Danver Hamind",
        img: "/team2.webp",

        designation: "Sr. Web Developer"
    },
    {
        id: 3,
        name: "Theodore Lifaz",
        img: "/team3.jpg",
        designation: "Front-end Developer"
    },



];

const Team = () => {
    return (
        <div className="container-lg my-5 py-5 mx-auto"
            style={{
                fontFamily: 'Poppins'
            }}
        >
            <h1 className="fs-2 text-center fw-bold my-3">Our Team Members</h1>
            <p className="text-center fs-6 mb-5">Use Timeline to plan projects right the first time. See how the pieces you <br /> can spot gap sand overlaps before you start.</p>

            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    cards.map(card => (
                        <div
                            key={card.id}>

                            <div>
                                <Card className=' card shadow-lg rounded w-sm-50' >
                                    <Image className='img-fluid rounded-top' src={card.img} alt="" width="120px" height="200px" />
                                    <Card.Body>
                                        <Card.Title className='fs-5 fw-bold'>{card.name}</Card.Title>
                                        <Card.Text className='fs-6'>
                                            {card.designation}
                                        </Card.Text>
                                        {/* <Link href='/' style={{ textDecoration: 'none' }}><button className={`${style.btnColor} border-0 `}>Read more <FontAwesomeIcon icon={faArrowRight} /></button></Link> */}
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

export default Team;
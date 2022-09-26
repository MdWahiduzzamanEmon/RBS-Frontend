import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
// import images from "../../../public/";
// import avatar from "../../../public/banner2.jpeg";
// import style from './Home2nd.module.css';


const Team = ({ teamData }) => {
    console.log(teamData);
    return (
        <div className="container-lg my-5 py-5 mx-auto"
            style={{
                fontFamily: 'Poppins',
                display:(teamData.isShow)? "block":"none" 

            }}
        >{
                teamData?.titleData?.titleItems?.map(textData => (
                    <div key={textData.id}>
                        <h1 className="fs-2 text-center fw-bold my-3">{textData.title }</h1>
                        <p className="text-center fs-6 mb-5">{textData.titleDescription}</p>

                    </div>
                ))
        }
            

            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    teamData?.cardItem?.items?.slice(0,3).map(card => (
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
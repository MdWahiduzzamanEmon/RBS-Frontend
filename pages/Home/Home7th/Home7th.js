import Image from 'next/image';
import { Card } from 'react-bootstrap';
import images from "../../../public/image/images.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import style from './Home7th.module.css';

const Home7th = ({home7thData}) => {
    return (
        <div className=" container-lg my-5 mx-auto py-5"
            style={{
                fontFamily: 'Poppins',
                display: home7thData?.isShow ? 'block':'none'
        }}
        >
          {
            home7thData?.titleData?.map((data,index)=> (
               <div key={data?.id}>
                 <h1 className="fs-2 text-center fw-bold my-3">{data?.title}</h1>
                <p className="text-center fs-6 mb-5">Use Timeline to plan projects right the first time. See how the pieces you <br /> can spot gap sand overlaps before you start.</p>
               </div>
            ))
          }
            <div className='row row-cols-1 row-cols-md-4 g-4'>
                {
                    home7thData?.items.map((data,index) => (
                        <div
                            key={data?.id}
                        >

                            <Card className=' card rounded shadow-lg' >
                                <div className='d-flex justify-content-center mt-1'><FontAwesomeIcon className='bg-light p-3 rounded-2 fs-3'
                                    style={{
                                    "color":data?.color
                                }}
                                    icon={data?.icon} /> </div>
                               <Card.Body>
                                        <Card.Title className='fs-6 fw-bold'>{data?.title}</Card.Title>
                                        <Card.Text className='fs-6'>
                                            {data?.description}
                                        </Card.Text>
                                    <Link href='/' style={{ textDecoration: 'none' }}><button className={`${style.btnColor} border-0 btn-color`}>Read more <FontAwesomeIcon icon={faArrowRight}/> </button></Link>
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
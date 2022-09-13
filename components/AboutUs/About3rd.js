import Image from 'next/image';
import about3rd from '../../public/about3rd.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const About3rd = () => {
    return (
        <div className="d-flex flex-column flex-lg-row  my-5 py-5 align-items-center container-lg" style={{ fontFamily: 'Poppins' }}>

            <div className='p-3'>
                <h1 className="fs-2 fw-bold">We Have More Than 20+ Years <br /> Practical Experience</h1>
                <p className="fs-6 my-4"
                    style={{
                        color: "rgb(75, 101, 126)"
                    }}>On the other hand we denounce with righteous dislike men who are so beguiled.</p>
                <h3 className="fs-5 fw-bold"><span className='me-2'><FontAwesomeIcon className='fs-3' icon={faCheckCircle} color='orange'></FontAwesomeIcon></span>Protect Your Data And Privacy</h3>
                <p className="fs-6 my-4"
                    style={{
                        color: "rgb(75, 101, 126)"
                    }}>On the other hand we denounce with righteus indignation dislike men who are beguiled and</p>

                <h3 className="fs-5 fw-bold"><span className='me-2'><FontAwesomeIcon className='fs-3' icon={faCheckCircle} color='purple'></FontAwesomeIcon></span>Free And Open Source Software</h3>
                <p className="fs-6 my-4"
                    style={{
                        color: "rgb(75, 101, 126)"
                    }}>On the other hand we denounce with righteus indignation dislike men who are beguiled and</p>

            </div>
            <div className='p-3 w-100'>
                <Image className=' rounded-5' src={about3rd} alt=" " objectFit='cover' width="100%" height="100%" layout="responsive" />
            </div>
        </div>
    );
};

export default About3rd;
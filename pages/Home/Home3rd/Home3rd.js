import Image from 'next/image';
import project1 from "../../../public/image/project1.jpeg";
// import { CheckIcon } from '@heroicons/react/24/outline';
// import home3rdStyles from '../../../styles/Home3rd.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import  checkImage from '../../../public/check.png';
import checkIcon from '../../../public/check.png'
import styles from './Home3rd.module.css'
const Home3rd = () => {
    return (
        <div className="d-flex flex-column flex-lg-row mt-5">
                
                <div className=''>
                    <h1 className="fs-1 fw-bold">Your Base For Classic,<br /> Agile  Project <br /> Management</h1>
                    <p className="fs-5 my-3"
                        style={{
                            color: "rgb(75, 101, 126)"
                        }}>On the other hand we denounce with righteus indignation dislike men who are beguiled and</p>
                    <h3 className="fs-4 fw-bold"><span className='me-2'><FontAwesomeIcon icon={faCheck} color=''></FontAwesomeIcon></span>40+ customizable templates</h3>
                    <p className="fs-5 my-3"
                        style={{
                            color: "rgb(75, 101, 126)"
                        }}>On the other hand we denounce with righteus indignation dislike men who are beguiled and</p>

                    <h3 className="fs-4 fw-bold"><span className='me-2'><FontAwesomeIcon icon={faCheck} color=''></FontAwesomeIcon></span>Free And Open Source Software</h3>
                    <p className="fs-5 my-3"
                        style={{
                            color: "rgb(75, 101, 126)"
                        }}>On the other hand we denounce with righteus indignation dislike men who are beguiled and</p>
                    
                </div>
                <Image src={project1} alt=" " className="img-fluid" />
        </div>
    );
};

export default Home3rd;
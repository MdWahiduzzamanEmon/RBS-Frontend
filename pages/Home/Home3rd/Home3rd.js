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
        <div className="d-flex flex-column flex-lg-row  my-5 py-5 align-items-center">
                
                <div className='p-3'>
                    <h1 className="fs-1 fw-bold">Your Base For Classic,<br /> Agile  Project <br /> Management</h1>
                    <p className="fs-5 my-3"
                        style={{
                            color: "rgb(75, 101, 126)"
                        }}>On the other hand we denounce with righteus indignation dislike men who are beguiled and</p>
                    <h3 className="fs-4 fw-bold"><span className='me-2'><FontAwesomeIcon icon={faCheck} color='#765DF5'></FontAwesomeIcon></span>40+ customizable templates</h3>
                    <p className="fs-5 my-3"
                        style={{
                            color: "rgb(75, 101, 126)"
                        }}>On the other hand we denounce with righteus indignation dislike men who are beguiled and</p>

                    <h3 className="fs-4 fw-bold"><span className='me-2'><FontAwesomeIcon icon={faCheck} color='#765DF5'></FontAwesomeIcon></span>Free And Open Source Software</h3>
                    <p className="fs-5 my-3"
                        style={{
                            color: "rgb(75, 101, 126)"
                        }}>On the other hand we denounce with righteus indignation dislike men who are beguiled and</p>
                    
                </div>
               <div className='p-3 w-100'>
               <Image src={project1} alt=" " objectFit='cover' width="100%" height="100%" layout="responsive"/>
               </div>
        </div>
    );
};

export default Home3rd;
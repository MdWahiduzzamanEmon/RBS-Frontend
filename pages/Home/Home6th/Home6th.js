import Image from 'next/image';
import banner2 from '../../../public/banner2.jpeg'
import download from '../../../public/download.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import style from './Home6th.module.css';
import avatar from '../../../public/image/avatar.jpg'
import client1  from '../../../public/image/client1.jpg'
import Slider from './slider';

const Home6th = () => {
    return (
            // <div className="my-5 text-white d-grid row  g-4"
        <div className=' my-5 mx-auto'
            style={{
            // backgroundImage: `url(${download.src})`,
            // width: '100%',
            // height: '100%',
                backgroundColor: "rgb(30, 35, 52)"

        }}
        >
            <div className=" container-lg mx-auto my-5 text-white row row-cols-1 row-cols-md-3 g-4"
           // <div className="my-5 text-white d-flex flex-column flex-md-row justify-content-evenly"
                
            >
                <div className='text-center'>
                    <h1 className='' style={{ fontSize: "60px" }}>9.8k+</h1>
                    <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
                    <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
                    <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
                    <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
                    <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
                    <h5>Happy Customers</h5>

                    <p>Use Timeline to plan <br /> projects right the first time. <br/>See how the pieces <br /> fit together.</p>
                </div>
                <div className='text-center'>
                    <h1 className='' style={{ fontSize: "60px" }}>A+</h1>
                    <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
                    <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
                    <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
                    <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
                    <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
                    <h5>Happy Customers</h5>
                    <p>Use Timeline to plan <br /> projects right the first time. <br/>See how the pieces <br /> fit together.</p>
                </div>
                <div className=''>
                    <h2 className=''>Trusted By 12,000 Customers <br/> Using Our Software!</h2>

                    <p>Use Timeline to plan  projects right the first time. <br/> See how the pieces fit together.</p>
                    <div className='d-flex flex-column justify-content-center align-items-center justify-content-md-start   flex-md-row '>
                        <Image src={avatar} alt=" "  className='rounded-2' />
                        <div className='ms-3'>
                            <h6>Hanri Thomas Doe</h6>
                            <p>Consultancy Agency</p>
                        </div>
                    </div>

                </div>
           </div>
            <div className='pb-5 '>
                
                <Slider></Slider>
            </div>
        </div>
    );
};

export default Home6th;
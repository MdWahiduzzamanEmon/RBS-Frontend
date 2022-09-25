import Image from 'next/image';
import banner2 from '../../../public/banner2.jpeg'
import download from '../../../public/download.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import style from './Home6th.module.css';
import avatar from '../../../public/image/avatar.jpg'
import client1  from '../../../public/image/client1.jpg'
import Slider from './slider';

const Home6th = ({ home6thData }) => {
    console.log(home6thData)
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
                    <h1 className='' style={{ fontSize: "60px" }}>{home6thData.column1Title }</h1>
                    <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
                    <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
                    <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
                    <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
                    <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
                    <h5>{home6thData.column1SubTitle}</h5>
                    

                    <p>{home6thData.column1Description}</p>
                </div>
                {/* <div className='text-center'>
                    <h1 className='' style={{ fontSize: "60px" }}>A+</h1>
                    <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
                    <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
                    <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
                    <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
                    <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
                    <h5>Happy Customers</h5>
                    <p>Use Timeline to plan <br /> projects right the first time. <br/>See how the pieces <br /> fit together.</p>
                </div> */}
                <div className='my-5'>
                    {/* <p className='align-items-center'>{home6thData.column1Description}</p>  */}
                    <blockquote>{home6thData.column1Description} </blockquote>
                    <p>{home6thData.column2Name}</p>
                </div>
                <div className=''>
                    <h2 className=''>{home6thData.column3Title }</h2>

                    <p>{home6thData.column3Description }</p>
                    <div className='d-flex flex-column justify-content-center align-items-center justify-content-md-start   flex-md-row '>
                        <div className='w-25'>
                            <Image src={home6thData.img} alt=" " height="100%" width="100%" objectFit='cover' layout='responsive'
                                className='rounded-2' />
                        </div>
                        <div className='ms-3'>
                            <h6>{home6thData.name }</h6>
                            <p>{home6thData.designation}</p>
                        </div>
                    </div>

                </div>
           </div>
            <div className='pb-5 '>
                
                <Slider
                sliderData={home6thData.slider}
                ></Slider>
            </div>
        </div>
    );
};

export default Home6th;
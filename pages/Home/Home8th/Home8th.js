import React from 'react';
import gradientImage from '../../../public/gradient-image-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { convertToHsl } from 'daisyui/src/colors/functions';
import home8thStyles from './Home8th.module.css'
import Home from '../..';
import image1 from '../../../public/image1.jpg'
import image2 from '../../../public/image2.png'
import image3 from '../../../public/image3.png'
import image4 from '../../../public/image4.png'
import image5 from '../../../public/dot-image.png'
import Image from 'next/image';

const Home8th = () => {
    return (
        <section 
        className={`${home8thStyles.sectionStyles} my-5 container-fluid`} 
        style={{
            backgroundImage: `url(${gradientImage.src})`,
            backgroundSize: 'cover',
            // backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            // margin: '50px'
            }}>
            <div className= 'py-5 '>
                <div className='row row-cols-1 row-cols-md-2'>
                    <div className='position-relative mb-lg-0  d-lg-block d-none'>
                        <div className={`${home8thStyles.dotImage} position-absolute `}><Image src={image5} alt='' className=' img-fluid'></Image></div>
                        <div className={`${home8thStyles.middleImage} position-absolute `}><Image src={image1} alt='' className=' img-fluid'></Image></div>
                        <div className={`${home8thStyles.bottomImage} position-absolute `}><Image src={image2} alt='' className=' img-fluid'></Image></div>
                        <div className={`${home8thStyles.topImage} position-absolute `}><Image src={image3} alt='' className=' img-fluid'></Image></div>
                        <div className={`${home8thStyles.checkImage} position-absolute`}><Image src={image4} alt=''></Image></div>
                    </div>
                    <div>
                        <h1 className='fs-2 fw-bold'>Your Base For Classic, Agile Or <br /> Project Management</h1>
                        <p className='fs-6'>On the other hand we denounce with righteous indignation dislike men who are so beguiled and demoralized.</p>
                        <div>
                           <h1 className='fs-5 fw-bold '><FontAwesomeIcon icon={faCircle} size='2xs'/> Protect Your Data And Privacy</h1>
                           <p className='fs-6'>Use Timeline to plan projects right long the first time. how the pieces fit together.</p>
                        </div>
                        <div>
                           <h1 className='fs-5 fw-bold'><FontAwesomeIcon icon={faCircle} size='2xs'/> Free And Open Source Software</h1>
                           <p className='fs-6'>Use Timeline to plan projects right long the first time. how the pieces fit together.</p>
                        </div>
                        <div>
                            <button className={`${home8thStyles.buttonGradient} border-0`}>Contact Us      <FontAwesomeIcon icon={faArrowRight}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home8th;
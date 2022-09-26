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

const Home8th = ({home8thData}) => {
    return (
        <section 
        className={`${home8thStyles.sectionStyles} my-5 container-fluid`} 
        style={{
            backgroundImage: `url(${gradientImage.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            display: (home8thData?.isShow) ? "block" : "none"
            }}>
            <div className='py-5'>
                {
                    home8thData?.items.map((data, index) => (
                        <div key={index}
                            className='row row-cols-1 row-cols-md-2 '>
                            <div className='position-relative mb-lg-0  d-lg-block d-none'>
                                <div className={`${home8thStyles.dotImage} position-absolute w-100 `}>
                                    <Image src={data.image5} alt=''
                                        height="100%" width="100%"
                                        objectFit="cover" layout="responsive" className=' img-fluid'></Image>
                                </div>
                                <div className={`${home8thStyles.middleImage} position-absolute w-100 `}>
                                    <Image src={data.image1} alt=''
                                        height="100%" width="100%"
                                        objectFit="cover" layout="responsive" className=' img-fluid' ></Image>
                                </div>
                                <div className={`${home8thStyles.bottomImage} position-absolute w-100 `}>
                                    <Image src={data.image2} alt=''
                                        height="100%" width="100%"
                                        objectFit="cover" layout="responsive" className=' img-fluid'></Image>
                                </div>
                                <div className={`${home8thStyles.topImage} position-absolute w-100 `}>
                                    <Image src={data.image3} alt=''
                                        height="100%" width="100%"
                                        objectFit="cover" layout="responsive" className=' img-fluid'>
                                        </Image>
                                </div>
                                <div className={`${home8thStyles.checkImage} position-absolute w-100`}>
                                    <Image src={data.image4} alt=''
                                        height="100%"
                                        width="100%"
                                        objectFit="cover"
                                        layout="responsive"
                                    ></Image>
                                </div>
                            </div>
                            <div>
                                <h1 className='fs-2 fw-bold'>{ data.title}</h1>
                                <p className='fs-6'>{ data.titleDescription}</p>
                                <div>
                                    <h1 className='fs-5 fw-bold '><FontAwesomeIcon icon={faCircle} size='2xs' /> {data.subTitle1}</h1>
                                    <p className='fs-6'>{data.subTitleDescription1}</p>
                                </div>
                                <div>
                                    <h1 className='fs-5 fw-bold'><FontAwesomeIcon icon={faCircle} size='2xs' /> {data.subTitle2 }</h1>
                                    <p className='fs-6'>{data.subTitleDescription1}</p>
                                </div>
                                <div>
                                    <button className={`${home8thStyles.buttonGradient} border-0`}>Contact Us      <FontAwesomeIcon icon={faArrowRight} /></button>
                                </div>
                            </div>
                        </div>  
                    ))
                }
               
            </div>
        </section>
    );
};

export default Home8th;
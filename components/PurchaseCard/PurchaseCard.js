import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import purchaseStyles from './PurchaseCard.module.css'
import hoverImage from '../../public/footer-image1.png'

const PurchaseCard = () => {
    return (
        <div className='py-5'>
           <Card className={`${purchaseStyles.gradientBackground}  container-lg px-5 py-5 overflow-hidden border-0`}>
                 <div className='position-relative '>
                    {/* <div className={` ${footerStyles.footerCircle} position-absolute`}>
                    <Image src={circleImage} alt='circle image'></Image>
                    </div> */}
                   <div className='overflow-hidden'>
                   <div className={`${purchaseStyles.imagePosition} position-absolute d-none d-lg-block`}>
                        <Image src={hoverImage} alt='' className='img-fluid'></Image>
                    </div>
                   </div>
                    <p className='fs-3 fw-bold text-white'>Ready To Start Work?</p>
                    <p className='fs-3 fw-bold text-white'>Purchase Now!</p>
                    <button className={` ${purchaseStyles.footerButton} border-0 px-3 py-2 rounded-1`}>More Features <FontAwesomeIcon icon={faArrowRight}/></button>
                 </div>
            </Card>
           </div>
    );
};

export default PurchaseCard;
import Image from 'next/image';
import NavBar from '../../pages/Home/Navbar/NavBar';
import productBanner1 from '../../public/projectBanner1.png';
import style from '../Products/ProductBanner.module.css'

const ProductBanner = ({ productBannerData }) => {
    return (
        <div>
            <div
                style={{ backgroundColor:"rgb(39, 45, 84)"}}>
                <NavBar />
            </div>
            {
                productBannerData?.items?.map(data => (
                    <div key={data.id}
                        className='bg-light border border-bottom'>
                        <div className="  d-flex flex-column flex-lg-row align-items-center container-lg" style={{ fontFamily: 'Poppins' }}>

                            <div className='p-3'>
                                <h1 className={`${style.bannerText} fs-2 fw-bold py-5 ps-5`}>{data.title}
                                </h1>
                            </div>
                            <div className='p-3 w-100'>
                                <Image className='rounded-5' src={data.img} alt=" "
                                    height='100%' width='100%' objectFit='contain' layout="responsive" />
                            </div>
                        </div>
                    </div>  
                ))
            }
           
            
            
        </div>
    );
};

export default ProductBanner;
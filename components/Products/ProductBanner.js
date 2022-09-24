import Image from 'next/image';
import NavBar from '../../pages/Home/Navbar/NavBar';
import productBanner1 from '../../public/projectBanner1.png';
import style from '../Products/ProductBanner.module.css'

const ProductBanner = () => {
    return (
        <div 
        //     style={{
        //     backgroundImage: `url(${productBanner1.src})`,
        //     backgroundSize: 'cover',
        //     height:"400px"
        //  }}
        >
            <div
                style={{ backgroundColor:"rgb(39, 45, 84)"}}
            ><NavBar />
            </div>
            <div className='bg-light border border-bottom'>

           <div className="  d-flex flex-column flex-lg-row align-items-center container-lg" style={{ fontFamily: 'Poppins' }}>

                <div className='p-3'>
                    <h1 className={`${style.bannerText}fs-2 fw-bold py-5 ps-5`}>We build Project Management Software for your company  </h1>
                    </div>
                <div className='p-3 w-100'>
                    <Image className=' rounded-5' src={productBanner1} alt=" "  layout="responsive" />
                </div>
            </div>
            </div>
            
            
        </div>
    );
};

export default ProductBanner;
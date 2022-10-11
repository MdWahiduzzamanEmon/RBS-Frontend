import Image from 'next/image';
import NavBar from '../../pages/Home/Navbar/NavBar';
import productBanner1 from '../../public/projectBanner1.png';
import style from '../Products/ProductBanner.module.css'

const ProductBanner = ({ productBannerData }) => {
    return (
        <div>
            <div 
                style={{ backgroundColor: "rgb(39, 45, 84)" }}
            
            >
                <NavBar />
            </div>
            <div className=' '
                style={{ display:(productBannerData.isShow)?"block":"none"}}
            >
                <div
                    className='bg-light border border-bottom'>
                
            {
                productBannerData?.items?.map(data => (
                   
                        <div key={data.id} className=" d-flex flex-column flex-lg-row align-items-center container-lg" style={{ fontFamily: 'Poppins' }}>

                            <div className=''>
                                <h1 className={`${style.bannerText}  fw-bold  ps-5`}>{data.title}
                                </h1>
                            </div>
                            <div className=' w-100 '>
                                <Image className='rounded-5' src={data.img} alt=" "
                                    height='50%' width='100%' objectFit='contain' layout="responsive" />
                            </div>
                        </div>
                      
                ))
                    }
                </div>
          </div>
            
           
            
            
        </div>
    );
};

export default ProductBanner;
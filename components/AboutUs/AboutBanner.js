import NavBar from '../../pages/Home/Navbar/NavBar';
import bannerAbout from '../../public/BannerAbout.png'

const AboutBanner = () => {
    return (
        <div className=''
            style={{
                backgroundImage: `url(${bannerAbout.src})`,
                height:"300px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            
                
        }}
        >
            <NavBar /> 
            <div className='text-white text-center py-5 '>
                <h1 className='fs-2'>About us</h1>
            </div>
        </div>
    );
};

export default AboutBanner;
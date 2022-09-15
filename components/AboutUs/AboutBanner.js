import NavBar from '../../pages/Home/Navbar/NavBar';
import bannerAbout from '../../public/BannerAbout.png';
import styles from './AboutBanner.module.css';

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
            <div className=' d-flex justify-content-center align-items-center text-white text-center py-5 '>
                <h1 className={`${styles.bannerText} bannerText`}>About us</h1>
            </div>
        </div>
    );
};

export default AboutBanner;
import NavBar from '../../../pages/Home/Navbar/NavBar';
import banner2 from '../../../public/banner2.png'

const ContactBanner = () => {
    return (
        <div className='px-3'
            style={{
                backgroundImage: `url(${banner2.src})`,
                height:"300px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"       
        }}
        >
            <NavBar /> 
            <div className='text-white text-center py-5 '>
                <h1 className='fs-1 fw-bold'>Contact Us</h1>
            </div>
        </div>
    );
};

export default ContactBanner;
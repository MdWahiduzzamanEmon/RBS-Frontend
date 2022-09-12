import Navbar from "./NavBar";
import Image from 'next/image';
import banner2 from '../../../public/banner2.jpeg'
import download from '../../../public/download.jpg'
import NavBar from "./NavBar";
import bannerStyles from '../../../styles/Banner.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    },[])
    return (
        <>
            <div className={`${bannerStyles.bannerWidth} d-flex align-items-center justify-content-center `}
                style={{
                    backgroundImage: `url(${download.src})`,
                    clipPath: "polygon(0 0, 100% 0, 100% 30%, 100% 100%, 71% 87%, 0 100%, 0% 30%)"
                }}

            >
                {/* <Navbar /> */}
                {/* <NavBar/> */}
                <div
                    
                    
                    className="container mx-auto ">
                    <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center">
                        <div
                            data-aos="fade-right"
                            className="mb-3 mb-lg-0">
                            <h1 className="fs-1 fw-bold">Best Project Management Software!</h1>
                            <p className="py-6">Use Timeline to plan projects right the first time. See how the pieces fit together.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                        <Image data-aos="fade-left" src={banner2} className="img-fluid" alt=" " />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
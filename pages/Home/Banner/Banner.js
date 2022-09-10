import Navbar from "./NavBar";
import Image from 'next/image';
import banner2 from '../../../public/banner2.jpeg'
import download from '../../../public/download.jpg'
import NavBar from "./NavBar";
import bannerStyles from '../../../styles/Banner.module.css'
const Banner = () => {
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
                <div className="container mx-auto ">
                    <div className="d-flex align-items-center justify-content-center">

                        <div>
                            <h1 className="fs-1 fw-bold">Best Project Management Software!</h1>
                            <p className="py-6">Use Timeline to plan projects right the first time. See how the pieces fit together.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                        <Image src={banner2} className="img-fluid" alt=" " />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
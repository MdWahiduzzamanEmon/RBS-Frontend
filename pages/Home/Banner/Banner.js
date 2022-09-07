import Navbar from "./Navbar";
import Image from 'next/image';
import banner2 from '../../../public/banner2.jpeg'
import download from '../../../public/download.jpg'
const Banner = () => {
    return (
        <>
            <div className="text-white"
            style={{
                    backgroundImage: `url(${download.src})`,
                    width: '100%',
                    height: '100%',
                    clipPath: "polygon(0 0, 100% 0, 100% 30%, 100% 100%, 71% 87%, 0 100%, 0% 30%)"
                }}
                 
            >
                <Navbar />
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">

                        <div>
                            <h1 className="text-7xl font-bold">Best Project Management Software!</h1>
                            <p className="py-6">Use Timeline to plan projects right the first time. See how the pieces fit together.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                        <Image src={banner2} className="max-w-sm rounded-xl shadow-2xl " alt=" " />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
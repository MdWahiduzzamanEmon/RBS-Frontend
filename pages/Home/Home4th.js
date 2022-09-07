import Image from 'next/image';
import project2 from "../../public/image/project2.webp";

const Home4th = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div>
                    <h1 className="text-4xl font-bold my-3">Your Base For Classic, Agile Project Management</h1>
                    <p className="text-lg mb-5"
                        style={{
                            color: "rgb(75, 101, 126)"
                        }}>On the other hand we denounce with righteus indignation dislike men who are beguiled and</p>
                    <h3 className="text-xl font-bold mb-5">Protect Your Data And Privacy</h3>
                    <p className="text-lg mb-5"
                        style={{
                            color: "rgb(75, 101, 126)"
                        }}>On the other hand we denounce with righteus indignation dislike men who are beguiled and</p>
                    <h3 className="text-xl font-bold mb-5">Free And Open Source Software</h3>
                    <p className="text-lg mb-5"
                        style={{
                            color: "rgb(75, 101, 126)"
                        }}>On the other hand we denounce with righteus indignation dislike men who are beguiled and</p>

                </div>
                <Image src={project2} alt=" " className="max-w-sm rounded-lg shadow-2xl bg-base-200" />
            
                
            </div>
        </div>
    );
};

export default Home4th;
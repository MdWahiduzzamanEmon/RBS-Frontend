import Image from 'next/image';
import project1 from "../../public/image/project1.jpeg";
const Home3rd = () => {
    return (
        <div className="hero min-h-screen relative">
            <div className="hero-content flex-col lg:flex-row">
                
                <div>
                    <h1 className="text-4xl font-bold my-3">Your Base For Classic, Agile Project Management</h1>
                    <p className="text-lg mb-5"
                        style={{
                            color: "rgb(75, 101, 126)"
                        }}>On the other hand we denounce with righteus indignation dislike men who are beguiled and</p>
                    <h3 className="text-xl font-bold mb-5">40+ customizable templates</h3>
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
                <Image src={project1} alt=" " className="max-w-sm rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default Home3rd;
import Image from 'next/image';
import project2 from "../../public/image/project2.webp";

const Home4th = () => {
    return (
        
            // <div className="d-flex flex-column flex-lg-row ">
        <div className="d-grid">
            
                
                <div>
                    <h1 className="font-bold">Your Base For Classic, Agile Project Management</h1>
                    <p>On the other hand we denounce with righteus indignation dislike men who are beguiled and</p>
                    <h3 className="font-bold">Protect Your Data And Privacy</h3>
                    <p>On the other hand we denounce with righteus indignation dislike men who are beguiled and</p>
                    <h3 className="text-xl font-bold">Free And Open Source Software</h3>
                    <p>On the other hand we denounce with righteus indignation dislike men who are beguiled and</p>

                </div>
                <div>
                <Image src={project2} alt=" "
                    className="img-fluid max-w-sm rounded-lg shadow-2xl" />
                </div>
            
                
            </div>
     
    );
};

export default Home4th;
import Image from 'next/image';
import images from "../../public/image/images.jpg";
const cards = [
    {
        id: 1,
        title: "Free And Open Source Software",
        img: <Image
            src="../../public/image/images.jpg"
            alt=''
        />,
        description:"Use Timeline to plan projects right the time. how the pieces fit together."
    },
    {
        id: 2,
        title: "Free And Open Source Software",
        img: <Image
            src="../../public/image/images.jpg"
            alt=''
        />,
        description:"Use Timeline to plan projects right the time. how the pieces fit together."
    },
    {
        id: 3,
        title: "Free And Open Source Software",
        img: <Image
            src="../../public/image/images.jpg"
            alt=''
        />,
        description:"Use Timeline to plan projects right the time. how the pieces fit together."
    }
    
];

const Home2nd = () => {
    return (
        <div className=" my-24 mx-auto">
            <h1 className="text-4xl text-center font-bold my-3">Speed Up Your Workflow</h1>
            <p className="text-xl text-center mb-5"
                style={{
                    color:"rgb(75, 101, 126)"
            }}
            >Use Timeline to plan projects right the first time. See how the pieces you <br /> can spot gapsand overlaps before you start.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 ml-6 space-y-2'>
                <div
                  className="card w-96 bg-base-100 shadow-xl">
            <div className="px-10 pt-10">
                        <Image
                            src={images}
                            alt=''
                            className='rounded-xl'
                        />, 
                    </div>
                    <div className="card-body text-center">
                        <h2 className="card-title">Free And Open Source Software</h2>
                        <p >Use Timeline to plan projects right the time. how the pieces fit together.</p>
                        <div className="card-actions">
                            <button className='font-semibold text-fuchsia-600 hover:text-fuchsia-900'>Read more</button>
                        </div>
                    </div>
                </div>
                <div
                  className="card w-96 bg-base-100 shadow-2xl">
            <div className="px-10 pt-10">
                        <Image
                            src={images}
                            alt=''
                            className='rounded-xl'
                        />, 
                    </div>
                    <div className="card-body text-center">
                        <h2 className="card-title">Free And Open Source Software</h2>
                        <p>Use Timeline to plan projects right the time. how the pieces fit together.</p>
                        <div className="card-actions">
                            <button className='font-semibold text-fuchsia-600 hover:text-fuchsia-900'>Read more</button>
                        </div>
                    </div>
                </div>
                <div
                  className="card w-96 bg-base-100 shadow-2xl">
            <div className="px-10 pt-10">
                        <Image
                            src={images}
                            alt=''
                            className='rounded-xl'
                        />, 
                    </div>
                    <div className="card-body text-center">
                        <h2 className="card-title">Free And Open Source Software</h2>
                        <p>Use Timeline to plan projects right the time. how the pieces fit together.</p>
                        <div className="card-actions">
                            <button className='font-semibold text-fuchsia-600 hover:text-fuchsia-900'>Read more</button>
                        </div>
                    </div>
                </div>
                

            </div>
            
        </div>
    );
};

export default Home2nd;
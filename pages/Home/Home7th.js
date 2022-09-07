import Image from 'next/image';
import images from "../../public/image/images.jpg";
const cards = [
    {
        id: 1,
        title: "Free And Open Source Software",
        img: "../../public/image/images.jpg",
        description: "Use Timeline to plan projects right the time. how the pieces fit together."
    },
    {
        id: 2,
        title: "Free And Open Source Software",
        img: "../../public/image/images.jpg",
        description: "Use Timeline to plan projects right the time. how the pieces fit together."
    },
    {
        id: 3,
        title: "Free And Open Source Software",
        img: "../../public/image/images.jpg",
        description: "Use Timeline to plan projects right the time. how the pieces fit together."
    }

];

const Home7th = () => {
    return (
        <div className=" my-24 mx-auto">
            <h1 className="text-4xl text-center font-bold my-3">Speed Up Your Workflow</h1>
            <p className="text-xl text-center mb-5"
                style={{
                    color: "rgb(75, 101, 126)"
                }}
            >Use Timeline to plan projects right the first time. See how the pieces you <br /> can spot gap sand overlaps before you start.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3  space-y-2 ml-8'>
                {
                    cards.map(card => (
                        <div
                            key={card.id}>
                         <h1> {card.title} </h1>
                            </div>)
                      
                   )
               }


            </div>

        </div>
    );
};

export default Home7th;
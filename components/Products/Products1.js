import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import product2 from '../../public/product2.jpg';

const Products1 = () => {
    return (
        <div className=''>
            <div className="d-flex flex-column flex-lg-row  my-5 py-5 align-items-center container-lg" style={{ fontFamily: 'Poppins' }}>
                <div className='p-3 w-100'>
                    <Image className=' rounded-5' src={product2} alt=" " layout="responsive" />
                </div>
                <div className='p-3 bg-light rounded-2'>
                    <h1 className="fs-2 fw-bold">Most Advanced Technology Ever! Made For You.</h1>
                    <p className="fs-6 my-4"
                        style={{
                            color: "rgb(75, 101, 126)"
                        }}>On the other hand we denounce with righteous dislike men who are so beguiled.</p>
                    <h3 className="fs-5 fw-bold"><span className='me-2'><FontAwesomeIcon className='fs-3' icon={faCheckCircle} color='orange'></FontAwesomeIcon></span>Protect Your Data And Privacy</h3>
                    <p className="fs-6 my-4"
                        style={{
                            color: "rgb(75, 101, 126)"
                        }}>On the other hand we denounce with righteus indignation dislike men who are beguiled and</p>

                    <h3 className="fs-5 fw-bold"><span className='me-2'><FontAwesomeIcon className='fs-3' icon={faCheckCircle} color='purple'></FontAwesomeIcon></span>Free And Open Source Software</h3>
                    <p className="fs-6 my-4"
                        style={{
                            color: "rgb(75, 101, 126)"
                        }}>On the other hand we denounce with righteus indignation dislike men who are beguiled and</p>

                </div>

            </div>

        </div>
    );
};

export default Products1;
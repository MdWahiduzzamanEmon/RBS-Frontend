import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import product22 from '../../public/product22.jpg';

const Products2 = () => {
    return (
        <div className="d-flex flex-column flex-lg-row  my-5  align-items-center container-lg" style={{
            fontFamily: 'Poppins',
            // backgroundColor:'rgb(23,45,76)'
        }}>
           
            <div className='p-3'>
                <h3 className="fs-5 fw-bold">Most Advanced Technology Ever! Made For You.</h3>
                <p className="fs-6 my-4">
                    <span className='me-2'><FontAwesomeIcon className='' icon={faCheck} color='purple'></FontAwesomeIcon></span>Built with latest technology
                </p> 
                <p className="fs-6 my-4">
                    <span className='me-2'><FontAwesomeIcon className='' icon={faCheck} color='purple'></FontAwesomeIcon></span>Manage complex workflows
                </p> 
                <p className="fs-6 my-4">
                    <span className='me-2'><FontAwesomeIcon className='' icon={faCheck} color='purple'></FontAwesomeIcon></span>Built with latest technology
                </p> 
                <p className="fs-6 my-4">
                    <span className='me-2'><FontAwesomeIcon className='' icon={faCheck} color='purple'></FontAwesomeIcon></span>Manage complex workflows
                </p>
                <button className='btn btn-primary'>Purchase now</button>
                
            </div>
            <div className='p-3 w-100'>
                <Image className=' rounded-5' src={product22} alt=" " layout="responsive" />
            </div>

        </div>
    );
};

export default Products2;
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';


const Products1 = ({ product1Data }) => {
    // console.log(product1Data)
    return (
        <div
            style={{ display: (product1Data.isShow) ? "block" : "none" }}
        >
            {
                product1Data?.items?.map(data => (
                    <div key={data.id}
                        className="d-flex flex-column flex-lg-row  my-5 py-5 align-items-center container-lg" style={{ fontFamily: 'Poppins' }}>
                        <div className='p-3 w-100'>
                            <Image className=' rounded-5' src={data.img} alt=" "
                            width="100%" height="100%" objectFit='contain'    layout="responsive" />
                        </div>
                        <div className='p-3 bg-light rounded-2'>
                            <h1 className="fs-2 fw-bold">{data.title}</h1>
                            <p className="fs-6 my-4"
                                style={{
                                    color: "rgb(75, 101, 126)"
                                }}>{data.titleDescription }</p>
                            <h3 className="fs-5 fw-bold"><span className='me-2'><FontAwesomeIcon className='fs-3' icon={data.icon} color='orange'></FontAwesomeIcon></span>{data.subTitle1}</h3>
                            <p className="fs-6 my-4"
                                style={{
                                    color: "rgb(75, 101, 126)"
                                }}>{data.subTitleDescription1}</p>

                            <h3 className="fs-5 fw-bold"><span className='me-2'><FontAwesomeIcon className='fs-3' icon={data.icon} color='purple'></FontAwesomeIcon></span>{data.subTitle2}</h3>
                            <p className="fs-6 my-4"
                                style={{
                                    color: "rgb(75, 101, 126)"
                                }}>{data.subTitleDescription2}</p>

                        </div>

                    </div>   
                ))
            }
            

        </div>
    );
};

export default Products1;
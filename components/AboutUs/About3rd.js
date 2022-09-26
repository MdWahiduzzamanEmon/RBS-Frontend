import Image from 'next/image';
// import download2 from '../../public/download (2).jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const About3rd = ({ about3rdData }) => {
    console.log(about3rdData);
    return (
        <div style={{
            display:(about3rdData.isShow)? "block" : "none"
        }}>
           
                {
                    about3rdData?.items?.map(data => (
                        <div key={data.id}
                            className="d-flex flex-column flex-lg-row  my-5 py-5 align-items-center container-lg" style={{ fontFamily: 'Poppins' }}>  
                            <div className='p-3'>
                                <h1 className="fs-2 fw-bold">{data.title }</h1>
                                <p className="fs-6 my-4"
                                    style={{
                                        color: "rgb(75, 101, 126)"
                                    }}>{data.titleDescription }</p>
                                <h3 className="fs-5 fw-bold"><span className='me-2'><FontAwesomeIcon className='fs-3' icon={faCheckCircle} color='orange'></FontAwesomeIcon></span>{data.subTitle1 }</h3>
                                <p className="fs-6 my-4"
                                    style={{
                                        color: "rgb(75, 101, 126)"
                                    }}>{data.subTitleDescription1}</p>

                                <h3 className="fs-5 fw-bold"><span className='me-2'><FontAwesomeIcon className='fs-3' icon={faCheckCircle} color='purple'></FontAwesomeIcon></span>{data.subTitle2}</h3>
                                <p className="fs-6 my-4"
                                    style={{
                                        color: "rgb(75, 101, 126)"
                                    }}>{data.subTitleDescription2}</p>

                            </div>
                            <div className='p-3 w-100'>
                                <Image className=' rounded-5' src={data.img} alt=" " width="100%" height="100%" layout="responsive" />
                            </div>
                        </div>
                    ))
}
                
        </div>
        
    );
};

export default About3rd;
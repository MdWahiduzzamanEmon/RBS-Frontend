import Image from 'next/image';
import project1 from "../../../public/project1.jpeg";
// import { CheckIcon } from '@heroicons/react/24/outline';
// import home3rdStyles from '../../../styles/Home3rd.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import  checkImage from '../../../public/check.png';
import checkIcon from '../../../public/check.png'
import styles from './Home3rd.module.css'

const Home3rd = ({home3rdData}) => {
    console.log(home3rdData);
    return (
        <div style={{fontFamily: 'Poppins', display: home3rdData?.isShow ? 'block' : 'none'}}>
        <div className="d-flex flex-column flex-lg-row  my-5 py-5 align-items-center container-lg" >
                <div className='p-3'>
                   {
                    home3rdData?.items?.map((data,index)=>(
                        <div key={data?.id} style={{display: data?.isShow ? 'block': 'none'}}>
                             <h1 className="fs-2 fw-bold">{data?.title}</h1>
                            <p className="fs-6 my-4"
                        style={{
                            color: "rgb(75, 101, 126)"
                        }}>{data?.description}</p>
                            <h3 className="fs-5 fw-bold"><span className='me-2'><FontAwesomeIcon icon={faCheck} color='#765DF5'></FontAwesomeIcon></span>{data?.subTitle1}</h3>
                            <p className="fs-6 my-4"
                        style={{
                            color: "rgb(75, 101, 126)"
                        }}>{data?.subTitle1Description}</p>
                            <h3 className="fs-5 fw-bold"><span className='me-2'><FontAwesomeIcon icon={faCheck} color='#765DF5'></FontAwesomeIcon></span>{data?.subTitle2}</h3>
                            <p className="fs-6 my-4"
                        style={{
                            color: "rgb(75, 101, 126)"
                        }}>{data?.subTitle2Description}</p>
                            </div>
                    ))
                   }    
                </div>
               <div className='p-3 w-100'>
              {
                  home3rdData?.items?.map((data,index)=>(

                      <Image key={data?.id} src={data?.image} alt=" " objectFit='cover' width="100%" height="100%" layout="responsive"/>
                  ))
              }
               </div>
        </div>
        </div>
    );
};

export default Home3rd;
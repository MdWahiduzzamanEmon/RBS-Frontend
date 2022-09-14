import React from 'react';
import infosStyles from './ContactInfos.module.css'

const ContactInfos = () => {
    return (
        <div className={`${infosStyles.infos} px-3 py-5`}>
            <div className='row row-cols-1 row-cols-md-4 justify-content-center g-4'>
            <div className=''>
                <h1 className='fs-2 mb-3'>Email Us</h1>
                <p>If you have any queries please feel free to email us.</p>
                <p style={{color: '#625DF5'}} className='fw-bold'>info@example.com</p>
            </div>
            <div>
                <h1 className='fs-2 mb-3'>Office Address</h1>
                <p>PO Box 16122 Collins Street West Victoria 8007 Australia.</p>
                <p>Monday – Friday : 6 am to 8 pm EST</p>
                <p>Saturday : 6 am to 2 pm EST</p>
            </div>
            <div>
                <h1 className='fs-2 mb-3'>Get In Touch</h1>
                <p>`{"Have any questions? We'd love to hear from you."}`</p>
                <p>+1 (888) 456 7890</p>
                <p>+1 (444) 123 4560</p>
            </div>
        </div>
        </div>
    );
};

export default ContactInfos;
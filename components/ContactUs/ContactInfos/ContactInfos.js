import React from 'react';
import infosStyles from './ContactInfos.module.css'

const ContactInfos = () => {
    return (
        <div className={`${infosStyles.infos}`}>
            <div className='row row-cols-4'>
            <div className=''>
                <h1 className='fs-2'>Email Us</h1>
                <p>On the other hand we denounce with beguiled and demoralized.</p>
                <p>info@example.com</p>
            </div>
            <div>
                <h1 className='fs-2'>Office Address</h1>
                <p>PO Box 16122 Collins Street West Victoria 8007 Australia.</p>
                <p>Monday – Friday : 6 am to 8 pm EST</p>
                <p>Saturday : 6 am to 2 pm EST</p>
            </div>
            <div>
                <h1 className='fs-2'>Get In Touch</h1>
                <p>On the other hand we denounce with beguiled and demoralized.</p>
                <p>+1 (888) 456 7890</p>
                <p>+1 (444) 123 4560</p>
            </div>
        </div>
        </div>
    );
};

export default ContactInfos;
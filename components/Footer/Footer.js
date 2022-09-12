import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import rbsLogo from '../../public/RBS_logo.png'
import footerStyles from './Footer.module.css'

const Footer = () => {
    const demoData = [
        {
            id: 1,
            title: "Help and Advice",
            lists: [
                {
                    url: '/',
                    item: 'How it Work'
                },
                {
                    url: '/',
                    item: '24/7 Customer Support'
                },
                {
                    url: '/',
                    item: 'Term and Condition'
                },
                {
                    url: '/',
                    item: 'Privacy Policy'
                },
            ]
        },
        {
            id: 2,
            title: "Our Features",
            lists: [
                {
                    url: '/',
                    item: 'Open Source'
                },
                {
                    url: '/',
                    item: 'Faster Performance'
                },
                {
                    url: '/',
                    item: 'Term and Condition'
                },
                { 
                    url: '/',
                    item: 'Privacy Policy'
                },
                {
                    url: '/',
                    item: 'Customer Spotlight'
                },
                {
                    url: '/',
                    item: 'Reseller Program'
                },
                {
                    url: '/',
                    item: 'Careers'
                },
                {
                    url: '/',
                    item: 'Terms of Service'
                },
            ]
        },
        {
            id: 3,
            title: "Our Features",
            lists: [
                { 
                    url: '/',
                    item: 'Email: demo@example.com'
                },
                {
                    url: '/',
                    item: 'Phone: 94273492324'
                },
                {
                    url: '/',
                    item: 'Address: Collins street, West Victoria, Australia '
                },
            ]
        },
    ]
    return (
        <section className='container-fluid'>
            <div className='d-flex flex-column justify-content-center container-lg'>
            <div className='footer-top-part row row-cols-1 row-cols-md-3 g-4 justify-content-center'>
           {
            demoData.map((data,index)=> (
                <div key={index} className=''>
                <h1 className='fs-4 fw-bold'>{data.title}</h1>
                   <ul className='ms-0 ps-0' >
                  {
                    data.lists.map((itemData,index)=> (
                        <Link href={itemData?.url} key={index}><li className='fs-6' style={{listStyle: 'none', cursor:'pointer'}}>{itemData.item}</li></Link>
                    ))
                  }
                  </ul>
               </div>  
            ))
           } 
            </div>
            <div className='footer-bottom-part d-flex flex-column flex-md-row justify-content-between align-items-center'>
               <div className=''> <Image src={rbsLogo} width='200px' height='150px' layout='fixed' alt=''></Image></div>
               <div><p className='fs-6'>Copyright &copy; {new Date().getFullYear()} RBS Tech, All rights reserved.</p></div>
            </div>
            </div>
        </section>
    );
};

export default Footer;
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Row } from 'react-bootstrap';
import footerCommonStyles from './Footer.module.css'

const FooterCommon = () => {
    const demoData = [
        {
            id: 1,
            logo: '/RBS_logo.png',
            description: 'On the other handed denounce with who are so beg demoralized.',
            // link: 

        },
        {
            id: 2,
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
            id: 3,
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
            id: 4,
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
        <>
            <div className={`${footerCommonStyles.footerCommon} px-3 pt-5`}>
                <div className="row">
                    {
                        demoData.map((data, index) => (
                            <div key={index} className='col-12 col-lg-3'>
                                {data?.logo && (
                                    <Image src={data?.logo} width='100px' height='100px' alt='logo' className='img-fluid rounded-circle'
                                    
                                    ></Image>
                                )}
                                {
                                    data?.description && (
                                        <p>{data?.description}</p>
                                    )
                                }
                                <h1 className='fs-4 fw-bold'>{data.title}</h1>
                                <ul className='ms-0 ps-0' >
                                    {
                                        data?.lists?.map((itemData, index) => (
                                            <Link href={itemData?.url} key={index}><li className={`${footerCommonStyles.text}`} style={{ listStyle: 'none', cursor: 'pointer' }}>{itemData.item}</li></Link>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={`${footerCommonStyles.footerBottom} text-center w-100`}>
                <p>Copyright &copy; {new Date().getFullYear()} RBS Tech Limited, All rights reserved.</p>
            </div>

        </>
    );
};

export default FooterCommon;
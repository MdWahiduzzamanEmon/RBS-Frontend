import React from 'react';
import ProductBanner from '../components/Products/ProductBanner';
import NavBar from './Home/Navbar/NavBar';
import Products1 from '../components/Products/Products1';
import Products2 from '../components/Products/Products2';
import ProductSlider from '../components/Products/ProductSlider';
import FooterCommon from '../components/FooterCommon/FooterCommon';

const products = () => {
    return (
        <div style={{
            color: "rgb(23, 52, 101)",
            fontFamily: 'Poppins'
        }}>
            
            <ProductBanner />
            <Products1 />
            <Products2 />
            <ProductSlider />
          
        </div>
    );
};

export default products;
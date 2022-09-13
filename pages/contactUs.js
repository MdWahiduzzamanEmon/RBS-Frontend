import ContactBanner from "../components/ContactUs/ContactBanner/ContactBanner";
import ContactInfos from "../components/ContactUs/ContactInfos/ContactInfos";
import Footer from "../components/Footer/Footer";
import FooterCommon from "../components/FooterCommon/FooterCommon";
import NavBar from "./Home/Navbar/NavBar";

const contactUs = () => {
    return (
        <section>
            <ContactBanner/>
            <ContactInfos/>
            {/* <FooterCommon/> */}
            {/* <NavBar/> */}
            <Footer/>
        </section>
    );
};

export default contactUs;
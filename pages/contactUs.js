import axios from "axios";
import ContactBanner from "../components/ContactUs/ContactBanner/ContactBanner";
import ContactForm from "../components/ContactUs/ContactForm/ContactForm";
import ContactInfos from "../components/ContactUs/ContactInfos/ContactInfos";

const contactUs = ({contactUsData}) => {
    return (
        <section className="">
            <ContactBanner/>
            <ContactInfos contactUsData={contactUsData}/>
            <ContactForm/>
        </section>
    );
};

export default contactUs;

export async function getServerSideProps(){
    const contactUsInfos = await axios.get('http://localhost:3000/api/contactus/contactusapi')

    return {
        props:{
            contactUsData: contactUsInfos.data
        }
    }
}
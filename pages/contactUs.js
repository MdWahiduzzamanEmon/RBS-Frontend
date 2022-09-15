import ContactBanner from "../components/ContactUs/ContactBanner/ContactBanner";
import ContactForm from "../components/ContactUs/ContactForm/ContactForm";
import ContactInfos from "../components/ContactUs/ContactInfos/ContactInfos";

const contactUs = () => {
    return (
        <section className="">
            <ContactBanner/>
            <ContactInfos/>
            <ContactForm/>
        </section>
    );
};

export default contactUs;
import Policy from "../components/Pricing/Policy/Policy";
import Pricing from "../components/Pricing/Pricing"
import PricingBanner from "../components/Pricing/PricingBanner";

const pricing = () => {
    return (
        <>
            <PricingBanner/>
            <Pricing/>
            <Policy/>
        </>
    );
};

export default pricing;
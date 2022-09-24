import Banner from "./Banner/Banner";

// import Home3rd from "./Home3rd";
import Home2nd from "./Home2nd/Home2nd";
import Home4th from "./Home4th";
import Home5th from "./Home5th";
import Home6th from "./Home6th/Home6th";
import Home7th from "./Home7th/Home7th";
import Home3rd from "./Home3rd/Home3rd";
import Home10th from "./Home10th/Home10th";
import Home9th from "./Home9th/Home9th";
import Home8th from "./Home8th/Home8th";
import PurchaseCard from "../../components/PurchaseCard/PurchaseCard";


const HomePage = ({bannerData}) => {
    return (
        <div>
            <div>
            <Banner bannerData={bannerData} />

                <Home2nd />
                <Home3rd />
                <Home4th />
                <Home5th />
                <Home6th />
                <Home7th />
                <Home8th/>
                <Home9th />
                <Home10th/>
                <PurchaseCard/>
            </div>
        </div>
    );
};

export default HomePage;
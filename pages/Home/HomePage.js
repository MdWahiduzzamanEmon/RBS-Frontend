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


const HomePage = ({
    bannerData,
    bannerImagesData,
    home2ndData,
    home4thData,
    home8thData,
    home10thData }) => {
    return (
        <div>
            <div>
            <Banner 
            bannerData={bannerData}
            bannerImagesData={bannerImagesData}
             />

                <Home2nd home2ndData={home2ndData} />
                <Home3rd  />
                <Home4th home4thData= {home4thData} />
                <Home5th />
                <Home6th />
                <Home7th />
                <Home8th home8thData={home8thData} />
                <Home9th />
                <Home10th home10thData={home10thData} />
                <PurchaseCard/>
            </div>
        </div>
    );
};

export default HomePage;
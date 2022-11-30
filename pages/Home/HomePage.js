import Banner from "./Banner/Banner";

// import Home3rd from "./Home3rd";
import Home2nd from "./Home2nd/Home2nd";
import Home6th from "./Home6th/Home6th";
import Home7th from "./Home7th/Home7th";
import Home3rd from "./Home3rd/Home3rd";
import Home10th from "./Home10th/Home10th";
import Home9th from "./Home9th/Home9th";
import Home8th from "./Home8th/Home8th";
import PurchaseCard from "../../components/PurchaseCard/PurchaseCard";
import Home5th from "./Home5th/Home5th";
import ManagePlatform from "../../components/ManagePlatform.js/ManagePlatform";
import CircularMotion from "../../components/circularMotion/CircularMotion";
import MiniPricing from "../../components/miniPricing/MiniPricing";
import FeaturesBoard from "../../components/featuresBoard/FeaturesBoard";
import CompareBoard from "../../components/compareBoard.js/CompareBoard";
import ProjectManagement from "./ProjectManagement";
import FinancialManagement from "../../components/FinancialManagement/FinancialManagement";

const HomePage = ({
  bannerData,
  bannerImagesData,
  home2ndData,
  home3rdData,
  home5thData,
  projectManagementData,
  home7thData,
  managePlatformData,
  home6thData,
  home8thData,
  home9thData,
  home10thData,
  purchaseCardData,
  miniPricingData,
  featuresData,
  financialManagementData,
}) => {
  return (
    <div>
      <div>
        <Banner bannerData={bannerData} bannerImagesData={bannerImagesData} />
        <FeaturesBoard featuresData={featuresData} />
        {/* <ManagePlatform managePlatformData={managePlatformData} /> */}
        {/* //**************Features section****************/}
        {/* <Home2nd home2ndData={home2ndData} /> */}

        {/* //***************Video section***************** */}
        <Home5th home5thData={home5thData} />

        {/* //********Describing features in details******** */}
        <Home3rd home3rdData={home3rdData} />
        <ProjectManagement projectManagementData={projectManagementData} />
        <FinancialManagement
          financialManagementData={financialManagementData}
        />
        <Home8th home8thData={home8thData} />

        {/* //*******************Review section****************/}
        <Home6th home6thData={home6thData} />
        {/* <Home7th home7thData={home7thData} /> */}

        {/* //***************Mini pricing section************* */}
        <MiniPricing miniPricingData={miniPricingData} />

        {/*//**************Comparing softwares******************/}
        <CompareBoard />

        {/* //**********Why Software is better section*******  */}
        <Home9th home9thData={home9thData} />
        {/* <PurchaseCard purchaseCardData={purchaseCardData} /> */}
      </div>
    </div>
  );
};

export default HomePage;

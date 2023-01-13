import React from "react";
import DemoCards from "../../components/watchDemos/DemoCards/DemoCards";
import WatchDemosBanner from "../../components/watchDemos/watchDemosBanner/WatchDemosBanner";
import { watchDemosDemoData } from "../../public/JSON/watchDemos/watchDemosDemoData";

export const getStaticProps = async () => {
  return {
    props: {
      watchDemosData: watchDemosDemoData,
      // allFeaturesMainPageData,
    },
  };
};

const WatchDemos = ({ watchDemosData }) => {
  return (
    <div
      // style={{ background: "linear-gradient(45deg,#140c1f 0%,#24c6dc 100%)" }}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgb(249, 236, 248) 15%, rgb(226, 246, 254) 100%)",
      }}
    >
      <WatchDemosBanner data={watchDemosData.banner} />
      <DemoCards />
    </div>
  );
};

export default WatchDemos;

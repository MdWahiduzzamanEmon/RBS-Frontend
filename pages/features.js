import axios from "axios";
import React from "react";
import FeatureWithLeftImage from "../components/features/FeatureWithLeftImage/FeatureWithLeftImage";
import FeatureWithRightImage from "../components/features/FeatureWithRightImage/FeatureWithRightImage";

const Features = () => {
  const [featuresData, setFeaturesData] = React.useState();
  React.useEffect(() => {
    axios.get("/api/features/featuresapi").then((res) => {
      setFeaturesData(res.data);
      console.log(featuresData);
    });
  }, []);
  return (
    <div>
      {featuresData?.map((feature) => {
        if (feature.id % 2 === 0) {
          return <FeatureWithRightImage key={feature.id} feature={feature} />;
        }
        return <FeatureWithLeftImage key={feature.id} feature={feature} />;
      })}
    </div>
  );
};

export default Features;

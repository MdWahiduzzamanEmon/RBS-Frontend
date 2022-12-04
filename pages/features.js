import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import FeatureWithLeftImage from "../components/features/FeatureWithLeftImage/FeatureWithLeftImage";
import FeatureWithRightImage from "../components/features/FeatureWithRightImage/FeatureWithRightImage";
import changeColorOfCircleCheck from "../components/utility/functions/changeColorOfCircleCheck";

const Features = () => {
  const [featuresData, setFeaturesData] = React.useState();
  React.useEffect(() => {
    axios.get("/api/features/featuresapi").then((res) => {
      setFeaturesData(res.data);
    });
  }, []);

  const router = useRouter();
  console.log(router.events);

  return (
    <div>
      {featuresData?.features?.map((feature) => {
        if (feature.id % 2 === 0) {
          return (
            <FeatureWithRightImage
              key={feature.id}
              feature={feature}
              colorChange={changeColorOfCircleCheck}
            />
          );
        }
        return (
          <FeatureWithLeftImage
            // id={id}
            key={feature.id}
            feature={feature}
            colorChange={changeColorOfCircleCheck}
          />
        );
      })}
    </div>
  );
};

export default Features;

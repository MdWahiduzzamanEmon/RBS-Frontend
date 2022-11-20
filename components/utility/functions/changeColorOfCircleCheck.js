const changeColorOfCircleCheck = (keyPointId) => {
  switch (keyPointId) {
    case 1: {
      return "#00D2D2";
    }
    case 2: {
      return "#FF9900";
    }
    default: {
      return "#FF7575";
    }
  }
};

export default changeColorOfCircleCheck;

const changeColorOfCircleCheck = (keyPointId) => {
  switch (keyPointId) {
    case 1: {
      return "#00D2D2";
    }
    case 2: {
      return "#FF9900";
    }
    case 3: {
      return "#FF7575";
    }
    case 4: {
      return "#3E6D9C";
    }
    case 5: {
      return "#557153";
    }
    default: {
      return "#D36B00";
    }
  }
};

export default changeColorOfCircleCheck;

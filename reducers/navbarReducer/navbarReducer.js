export const initialState = {
  openProduct: false,
  openResources: false,
  openContactUs: false,
  openPricing: false,
  openWatchADemo: false,
  showActiveInnerText: "",
  changeNavbarPosition: "",
  mobileNavbarOpen: false,
};

export default function navbarReducer(state = initialState, action) {
  switch (action.type) {
    case "OPEN_PRODUCT": {
      return {
        ...state,
        openProduct: action.payload.openProduct,
        openResources: action.payload.openResources,
        openContactUs: action.payload.openContactUs,
        showActiveInnerText: action.payload.innerText,
        changeNavbarPosition: action.payload.changeNavbarPosition,
      };
    }
    case "OPEN_RESOURCES": {
      return {
        ...state,
        openProduct: action.payload.openProduct,
        openResources: action.payload.openResources,
        openContactUs: action.payload.openContactUs,
        showActiveInnerText: action.payload.innerText,
        changeNavbarPosition: action.payload.changeNavbarPosition,
      };
    }
    case "OPEN_PRICING": {
      return {
        ...state,
        openProduct: action.payload.openProduct,
        openResources: action.payload.openResources,
        openContactUs: action.payload.openContactUs,
        showActiveInnerText: action.payload.innerText,
        changeNavbarPosition: action.payload.changeNavbarPosition,
      };
    }
    case "OPEN_WATCH_A_DEMO": {
      return {
        ...state,
        openProduct: action.payload.openProduct,
        openResources: action.payload.openResources,
        openContactUs: action.payload.openContactUs,
        showActiveInnerText: action.payload.innerText,
        changeNavbarPosition: action.payload.changeNavbarPosition,
      };
    }
    case "OPEN_CONTACT_US": {
      return {
        ...state,
        openProduct: action.payload.openProduct,
        openResources: action.payload.openResources,
        openContactUs: action.payload.openContactUs,
        showActiveInnerText: action.payload.innerText,
        changeNavbarPosition: action.payload.changeNavbarPosition,
      };
    }
    case "MOBILE_NAVBAR_OPEN": {
      return {
        ...state,
        mobileNavbarOpen: action.payload.mobileNavbarOpen,
      };
    }
    case "CLOSE_NAVBAR": {
      return {
        ...state,
        openProduct: action.payload.openProduct,
        openResources: action.payload.openResources,
        openContactUs: action.payload.openContactUs,
        showActiveInnerText: action.payload.innerText,
        changeNavbarPosition: action.payload.changeNavbarPosition,
      };
    }
    default:
      return state;
  }
}

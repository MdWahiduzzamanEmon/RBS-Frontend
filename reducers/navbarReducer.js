export const initialState = {
  openProduct: false,
  openResources: false,
  openPricing: false,
  openWatchADemo: false,
  showActiveInnerText: "",
  mobileNavbarOpen: false,
};

export default function navbarReducer(state = initialState, action) {
  switch (action.type) {
    case "OPEN_PRODUCT": {
      return {
        ...state,
        openProduct: action.payload.openProduct,
        openResources: action.payload.openResources,
        showActiveInnerText: action.payload.innerText,
      };
    }
    case "OPEN_RESOURCES": {
      return {
        ...state,
        openProduct: action.payload.openProduct,
        openResources: action.payload.openResources,
        showActiveInnerText: action.payload.innerText,
      };
    }
    case "OPEN_PRICING": {
      return {
        ...state,
        openProduct: action.payload.openProduct,
        openResources: action.payload.openResources,
        openPricing: action.payload.openPricing,
        openWatchADemo: action.payload.openWatchADemo,
        showActiveInnerText: action.payload.innerText,
      };
    }
    case "OPEN_WATCH_A_DEMO": {
      return {
        ...state,
        openProduct: action.payload.openProduct,
        openResources: action.payload.openResources,
        openPricing: action.payload.openPricing,
        openWatchADemo: action.payload.openWatchADemo,
        showActiveInnerText: action.payload.innerText,
      };
    }
    case "MOBILE_NAVBAR_OPEN": {
      return {
        ...state,
        mobileNavbarOpen: action.payload.mobileNavbarOpen,
      };
    }
    default:
      return state;
  }
}

export const initialState = {
  openManage: false,
  mobileNavbarOpen: false,
  showActiveInnerText: "",
};

export default function navbarBlogReducer(state = initialState, action) {
  switch (action.type) {
    case "OPEN_MANAGE": {
      return {
        ...state,
        openManage: action.payload.openManage,
        innerText: action.payload.innerText,
      };
    }
    case "CLOSE_NAVBAR": {
      return {
        ...state,
        openManage: false,
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

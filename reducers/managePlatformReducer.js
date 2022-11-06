export const initialStateMp = {
  firstSubmenuOpen: false,
  secondSubmenuOpen: false,
};

export const managePlatformReducer = (state = initialStateMp, action) => {
  switch (action.type) {
    case "OPEN_FIRST_SUBMENU": {
      return {
        ...state,
        firstSubmenuOpen: action.payload.firstSubmenuOpen,
        secondSubmenuOpen: action.payload.secondSubmenuOpen,
      };
    }
    case "OPEN_SECOND_SUBMENU": {
      return {
        ...state,
        firstSubmenuOpen: action.payload.firstSubmenuOpen,
        secondSubmenuOpen: action.payload.secondSubmenuOpen,
      };
    }
    default: {
      return state;
    }
  }
};

export const closeNavbar = () => {
  return {
    type: "CLOSE_NAVBAR",
    payload: {
      openProduct: false,
      openResources: false,
      openContactUs: false,
      openPricing: false,
      openWatchADemo: false,
      innerText: "",
    },
  };
};

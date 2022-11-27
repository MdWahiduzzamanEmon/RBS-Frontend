import axios from "axios";
import { useState, useEffect } from "react";
import FooterCommon from "./FooterCommon/FooterCommon";

const Layout = ({ children }) => {
  const [footerDetails, setFooterDetails] = useState({});
  useEffect(() => {
    axios
      .get("/api/footerapi")
      .then((response) => setFooterDetails(response.data));
  }, []);
  return (
    <>
      <div>{children}</div>
      <FooterCommon footerDetails={footerDetails} />
    </>
  );
};

export default Layout;

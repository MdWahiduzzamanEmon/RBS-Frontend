import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";
import Layout from "../components/Layout";
import "../styles/globals.css";
import NavBar from "./Home/Navbar/NavBar";
import React from "react";

function MyApp({ Component, pageProps }) {
  const [pageLoaded, setPageLoaded] = React.useState(false);

  React.useEffect(() => {
    setPageLoaded(true);
  }, []);
  return (
    <>
      {pageLoaded ? (
        <SSRProvider>
          <Layout>
            <NavBar></NavBar>
            <Component {...pageProps} />
          </Layout>
        </SSRProvider>
      ) : null}
    </>
  );
}

export default MyApp;

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";
import Layout from "../components/Layout";
import "../styles/globals.css";
import NavBar from "./Home/Navbar/NavBar";
import React from "react";
import { useRouter } from "next/router";
import NavbarBlog from "../components/Blog/NavbarBlog/NavbarBlog";

function MyApp({ Component, pageProps }) {
  const [pageLoaded, setPageLoaded] = React.useState(false);

  React.useEffect(() => {
    setPageLoaded(true);
  }, []);
  const router = useRouter();
  console.log(router);
  return (
    <>
      {pageLoaded ? (
        <SSRProvider>
          <Layout>
            {/* {router.asPath.includes("/blog") ? <NavbarBlog /> : <NavBar />} */}
            <NavBar />
            <Component {...pageProps} />
          </Layout>
        </SSRProvider>
      ) : null}
    </>
  );
}

export default MyApp;

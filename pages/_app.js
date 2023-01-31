import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";
import Layout from "../components/Layout";
import "../styles/globals.css";
import NavBar from "./Home/Navbar/NavBar";
import React from "react";
import { useRouter } from "next/router";
import auth from "../firebase.init";
import jwt_decode from "jwt-decode";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import GoToTop from "../components/GoToTop/GoToTop";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    setPageLoaded(true);
  }, []);
  const router = useRouter();

  const user = auth.currentUser;
  function handleCredentialResponse(response) {
    const userObject = jwt_decode(response.credential);
    const idToken = response.credential;
    const credential = GoogleAuthProvider.credential(idToken);
    // console.log(credential);

    // Sign in with credential from the Google user.
    signInWithCredential(auth, credential)
      .then((result) => {
        // setUser(result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The credential that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  // * scroll to top button */
  React.useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 150 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {pageLoaded ? (
        <SSRProvider>
          <Layout>
            {/* {router.asPath.includes("/blog") ? <NavbarBlog /> : <NavBar />} */}
            {showButton && <GoToTop handleScrollToTop={handleScrollToTop} />}
            <NavBar />
            <Head>
              <title>Vitlous</title>
            </Head>
            <Component {...pageProps} />
          </Layout>
        </SSRProvider>
      ) : null}
    </>
  );
}

export default MyApp;

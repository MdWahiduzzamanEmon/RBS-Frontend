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

function MyApp({ Component, pageProps }) {
  const [pageLoaded, setPageLoaded] = React.useState(false);

  React.useEffect(() => {
    setPageLoaded(true);
  }, []);
  const router = useRouter();
  const user = auth.currentUser;
  function handleCredentialResponse(response) {
    const userObject = jwt_decode(response.credential);
    const idToken = response.credential;
    const credential = GoogleAuthProvider.credential(idToken);
    console.log(credential);

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

  React.useEffect(() => {
    // if (divRef.current) {
    window.google?.accounts?.id?.initialize({
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      // callback: (res, error) => {
      //   // This is the function that will be executed once the authentication with google is finished
      // },
      callback: handleCredentialResponse,
    });
    //   window.google?.accounts?.id.renderButton(divRef.current, {
    //     type: "standard",
    //     size: "large",
    //     theme: "filled_blue",
    //     text: "sign_in_with",
    //     shape: "rectangular",
    //     logo_alignment: "left",
    //   });
    // }
    if (!user) {
      // window.google?.accounts?.id.prompt();
      // window.google.accounts.id.cancel();
    }
  }, [user]);
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

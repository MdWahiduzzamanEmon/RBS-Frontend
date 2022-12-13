import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import logoVitlous from "../../public/logoVitlous.png";
import jwt_decode from "jwt-decode";
import GoogleSvg from "../../svgComponents/GoogleSvg";
import styles from "./CSignUp.module.css";
import {
  GoogleAuthProvider,
  signInWithCredential,
  signOut,
} from "firebase/auth";
import Script from "next/script";
import auth from "../../firebase.init";
import Link from "next/link";
import useViewport from "../../hooks/useViewport";
import { useRouter } from "next/router";

const CSignUp = () => {
  const [user, setUser] = React.useState("");
  const divRef = React.useRef(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  function handleCredentialResponse(response) {
    const userObject = jwt_decode(response.credential);
    const idToken = response.credential;
    const credential = GoogleAuthProvider.credential(idToken);
    console.log(credential);

    // Sign in with credential from the Google user.
    signInWithCredential(auth, credential)
      .then((result) => {
        setUser(result.user);
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
    if (divRef.current) {
      window.google?.accounts?.id.initialize({
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        // callback: (res, error) => {
        //   // This is the function that will be executed once the authentication with google is finished
        // },
        callback: handleCredentialResponse,
      });
      window.google?.accounts?.id.renderButton(divRef.current, {
        type: "standard",
        size: "large",
        theme: "filled_blue",
        text: "sign_in_with",
        shape: "rectangular",
        logo_alignment: "left",
      });
    }
    // if (!user) {
    //   window.google?.accounts?.id.prompt();
    // }
  }, [user]);

  const { width } = useViewport();
  const breakpoint = 992;

  return (
    <div className={`${styles.signInWrapper} `}>
      {/* <div className={`${styles.signInImageWrapper} container`}>
        <Image
          src={logoVitlous}
          alt="logo"
          width={120}
          height={120}
          objectFit="contain"
        ></Image>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam?</p>
      </div> */}

      {/* form section */}

      <div className={`${styles.signInFormWrapper} container-xl`}>
        {/* <div
          className={`${styles.formToggle}`}
          style={{ display: width <= breakpoint && "none" }}
        >
          <p>
            <small>
              {`Don't have an account?`}{" "}
              <Link href="/signup">
                <span className={`${styles.toggleLink}`}>Sign up now</span>
              </Link>
            </small>
          </p>
        </div> */}
        <div className={`${styles.formContainer}`}>
          <div className={`${styles.formTextContainer}`}>
            <h3 className={`${styles.formTextContainerTitle}`}>
              Sign up to Vitlous
            </h3>
            {/* Google logo with label */}
            {/* <div className={`${styles.formTextContainerSocial}`}>
            <p>Google</p>
            <GoogleSvg width={20} height={20} />
          </div> */}
            <div ref={divRef} style={{ width: "50%" }}></div>
            {/* or with horizontal line */}
            <div className={`${styles.formTextContainerDivider} w-100`}>
              <div
                style={{ height: "1px", background: "#e0e0e0", width: "50%" }}
              ></div>
              <p>Or</p>
              <div
                style={{ height: "1px", background: "#e0e0e0", width: "50%" }}
              ></div>
            </div>
            <div className={`${styles.formTextContainerForm}`}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex gap-2">
                  <div>
                    <label>Name</label>
                    <input
                      type="text"
                      {...register("name", {
                        required: true,
                      })}
                    />
                    {errors.name?.type === "required" && (
                      <p
                        role="alert"
                        className="text-danger"
                        style={{ fontSize: "13px" }}
                      >
                        Name is required
                      </p>
                    )}
                  </div>
                  <div>
                    <label>Username</label>
                    <input
                      type="text"
                      {...register("username", {
                        required: true,
                      })}
                    />
                    {errors.username?.type === "required" && (
                      <p
                        role="alert"
                        className="text-danger"
                        style={{ fontSize: "13px" }}
                      >
                        Username is required
                      </p>
                    )}
                  </div>
                </div>

                <div className="">
                  <label className="">Email</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: /^[A-Za-z]+$/i,
                    })}
                  />
                  {errors.email && (
                    <p
                      role="alert"
                      className="text-danger"
                      style={{ fontSize: "13px" }}
                    >
                      {errors.email?.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <div className="d-flex justify-content-between">
                    <label>Password</label>
                    {/* <label className={`${styles.formForgetPasswordLabel}`}>
                      Forgot password?
                    </label> */}
                  </div>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      maxLength: 8,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                  />
                  {errors.password?.type === "required" && (
                    <p
                      role="alert"
                      className="text-danger"
                      style={{ fontSize: "13px" }}
                    >
                      Password is required
                    </p>
                  )}
                </div>
                <div></div>
                <button type="submit">Sign up</button>
                <div
                  className={`${styles.formToggle}`}
                  style={{
                    // display: width >= breakpoint ? "none" : "block",
                    marginTop: "15px",
                  }}
                >
                  <p>
                    <small>
                      Already have an account?
                      <Link href="/signin">
                        <span className={`${styles.toggleLink} ps-1`}>
                          Sign in
                        </span>
                      </Link>
                    </small>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSignUp;

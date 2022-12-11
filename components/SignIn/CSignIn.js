import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import logoVitlous from "../../public/logoVitlous.png";
import GoogleSvg from "../../svgComponents/GoogleSvg";

const CSignIn = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div>
        <Image
          src={logoVitlous}
          alt="logo"
          width={150}
          height={150}
          objectFit="contain"
        ></Image>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam?</p>
      </div>
      <div>
        <p>
          <small>
            {`Don't have an account?`} <span>Sign up now</span>
          </small>
        </p>
        <h3>Sign in to Vitlous</h3>
        {/* Google logo with label */}
        <div>
          <p>Google</p>
          <GoogleSvg width={64} height={64} />
        </div>
        {/* or with horizontal line */}
        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Email</label>
              <input
                type="email"
                {...register("Email", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                {...register("Password", {
                  required: true,
                  maxLength: 8,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CSignIn;

// components/LoginBox.js
import React from "react";
import Link from "next/link";
import InputField from "./InputField";
import SocialLogin from "./SocialLogin";
import LoginButton from "./LoginButton";
import "./LoginBox.css";
import { getData } from "@/lib/getData";

const LoginBox = () => {
  
  return (
    <div className="login-box">
      <h2>Bienvenido</h2>
      <p>Elige una de las opciones</p>
      <InputField type="email" placeholder="getutorial@gmail.com" />
      <InputField type="password" placeholder="Contraseña" />
      <Link href="" className="forgot-password">
        Olvido su contraseña?
      </Link>
      <div className="Red-Social">
        <p>O continue con</p>
        <SocialLogin />
        <LoginButton />
      </div>
    </div>
  );
};

export default LoginBox;

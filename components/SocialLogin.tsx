// components/SocialLogin.js
import React from "react";
import "./SocialLogin.css";
import Link from "next/link";
import Google from "@/public/Google.svg"
import Meta from "@/public/Meta.svg"
import Apple from "@/public/Apple.svg"

const SocialLogin = () => {
  return (
    <div className="social-login">
      <button>
      <img src={Google.src} alt="" />
        <Link href=""></Link>
      </button>
      <button>
        <img src={Meta.src} alt="" />
        <Link href=""></Link>
      </button>
      <button>
        <img src={Apple.src} alt="" />
        <Link href=""></Link>
      </button>
    </div>
  );
};

export default SocialLogin;

import React from "react";
import Link from "next/link";
import "./LoginButton.css";

const LoginButton = () => {
  return (
    <button className="login-button">
        <Link href="/dashboard">INGRESAR</Link>
    </button>

    
  );
};

export default LoginButton;

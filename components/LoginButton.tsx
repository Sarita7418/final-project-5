import React from "react";
import Link from "next/link";
import "./LoginButton.css";

interface LoginButtonProps {
  isAuthenticated: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = () => {
  return (
    <button className="login-button">
        <Link href="/dashboard">INGRESAR</Link>
    </button>
  );
};

export default LoginButton;
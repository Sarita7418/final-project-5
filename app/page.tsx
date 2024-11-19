
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Login from "@/components/Login";
import { getData } from "@/lib/getData";

export default async function Home() {
  let dataUSers = await getData("https://673778bcaafa2ef22233f00b.mockapi.io/usuarios");
  return (
    <div className="login-container">
      <Login />
    </div>
  );
}

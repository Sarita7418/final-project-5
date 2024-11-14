import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Login from "@/components/Login";

export default function Home() {
  return (
<<<<<<< HEAD
    <div>
      <Button variant="outline" className="rojo">
        <Link href="/configuracion">Configuración</Link>
      </Button>
=======
    <div className="login-container">
     <Login/>
>>>>>>> 6e02d0c460a5bf4a7b1a58651f0730e2580a9bbe
    </div>
  );
}

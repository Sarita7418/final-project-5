import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "@/components/ui/button.css";

export default function Home() {
  return (
    <div>
      <Button variant="outline" className="rojo">
        <Link href="/configuracion">Configuración</Link>
      </Button>
    </div>
  );
}

import { getData } from "@/lib/getData";
import { create } from "zustand";

type Usuario = {
  id: string;
  email: string;
  name: string;
  avatar: string;
  userName: string;
  password: string;
  nacimiento: string;
  direccion: string;
  rol: string;
  gestion: string;
};

type Alerta = {
  id: string;
  limiteConsumo: string;
  consumoActual: string;
  uMedida: string;
};

type Area = {
  id: string;
  lunes: string;
  martes: string;
  miercoles: string;
  jueves: string;
  viernes: string;
  sabado: string;
  domingo: string;
  uMedida: string;
  area: string;
};

type Sensor = {
  id: string;
  sensor: string;
  tipo: string;
  ubicacion: string;
  estado: string;
  recurso: string;
};

type Piedashboard = {
  id: string;
  piso1: string;
  piso2: string;
  piso3: string;
  piso4: string;
  plantaBaja: string;
  recurso: string;
};

type Cmensual = {
  id: string;
  createdAt: string;
  consumo: string;
  uMedida: string;
};

type Lectura = {
  id: string;
  sensor: string;
  fecha: string;
  hora: string;
  valor: string;
  recurso: string;
};

type AuthStore = {
  usuarios: Usuario[];
  alertas: Alerta[];
  areas: Area[];
  sensores: Sensor[];
  piedashboard: Piedashboard[];
  cmensual: Cmensual[];
  lecturas: Lectura[];
  rolselected: string;
  editUserID: string;
  reportID: string;
  user: Usuario | null; // Añadir la propiedad 'user'
  isLoading: boolean; // Agregar isLoading
  errorMessage: string | null; // Agregar errorMessage
  guardarIDEdit: (id: string) => void;
  guardarReportID: (id: string) => void;  
  guardarRol: (rol: string) => void;
  fetchUsuarios: () => Promise<void>;
  fetchAlertas: () => Promise<void>;
  fetchAreas: () => Promise<void>;
  fetchSensores: () => Promise<void>;
  fetchPiedashboard: () => Promise<void>;
  fetchCmensual: () => Promise<void>;
  fetchLecturas: () => Promise<void>;
  eliminarUsuario: (id: string) => void;
  agregarUsuarioA: (usuario: Usuario) => Promise<void>;
  cambiarPassword: (id: string, newPassword: string) => Promise<boolean>;
  editarUsuarioA: (id: string, usuario: Usuario) => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  usuarios: [],
  alertas: [],
  areas: [],
  sensores: [],
  piedashboard: [],
  cmensual: [],
  lecturas: [],
  rolselected: "",
  editUserID: "",
  user: null, // Inicializar 'user' como null
  isLoading: false, // Estado inicial para isLoading
  errorMessage: null, // Estado inicial para errorMessage
  reportID: "",
  guardarRol: (rol: string) => {
    set({ rolselected: rol });
  },
  guardarIDEdit: (id: string) => {
    set({ editUserID: id });
  },
  fetchUsuarios: async () => {
    const data = await getData(
      "https://673778bcaafa2ef22233f00b.mockapi.io/usuarios"
    );
    set({ usuarios: data });
  },
  eliminarUsuario: (id: string) => {
    set((state) => ({
      usuarios: state.usuarios.filter((usuario) => usuario.id !== id),
    }));
  },
  guardarReportID: (id: string) => {
    set({ reportID: id });
  },
  fetchAlertas: async () => {
    const data = await getData(
      "https://673778bcaafa2ef22233f00b.mockapi.io/alertas"
    );
    set({ alertas: data });
  },
  fetchAreas: async () => {
    const data = await getData(
      "https://673778bcaafa2ef22233f00b.mockapi.io/Areas"
    );
    set({ areas: data });
  },
  fetchSensores: async () => {
    const data = await getData(
      "https://673778bcaafa2ef22233f00b.mockapi.io/Sensores"
    );
    set({ sensores: data });
  },
  fetchPiedashboard: async () => {
    const data = await getData(
      "https://673778bcaafa2ef22233f00b.mockapi.io/pieDashboard"
    );
    set({ piedashboard: data });
  },
  fetchCmensual: async () => {
    const data = await getData(
      "https://673778bcaafa2ef22233f00b.mockapi.io/cMensual"
    );
    set({ cmensual: data });
  },
  fetchLecturas: async () => {
    const data = await getData(
      "https://673778bcaafa2ef22233f00b.mockapi.io/lecturas"
    );
    set({ lecturas: data });
  },

  agregarUsuarioA: async (usuario) => {
    try {
      const response = await fetch(
        "https://673778bcaafa2ef22233f00b.mockapi.io/usuarios",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
        }
      );
      if (!response.ok) {
        throw new Error("Error al agregar usuario");
      }
      const nuevoUsuario = await response.json();
      set((state) => ({
        usuarios: [...state.usuarios, nuevoUsuario],
      }));
    } catch (error) {
      console.error("Error al agregar usuario:", error);
    }
  },
  cambiarPassword: async (id, newPassword) => {
    try {
      const response = await fetch(
        `https://673778bcaafa2ef22233f00b.mockapi.io/usuarios/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password: newPassword }),
        }
      );

      if (response.ok) {
        set((state) => ({
          usuarios: state.usuarios.map((usuario) =>
            usuario.id === id
              ? { ...usuario, password: newPassword }
              : usuario
          ),
          isLoading: false,
          errorMessage: null,
        }));
        return true; // Contraseña actualizada exitosamente
      } else {
        set({
          isLoading: false,
          errorMessage: "Error al cambiar la contraseña",
        });
        return false; // Error en la respuesta
      }
      if (!response.ok) {
        throw new Error("Error al cambiar la contraseña");
      }
      return true;
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error);
      return false;
    }
  },
  editarUsuarioA: async (id, usuario) => {
    try {
      const response = await fetch(
        `https://673778bcaafa2ef22233f00b.mockapi.io/usuarios/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
        }
      );
      if (!response.ok) {
        throw new Error("Error al editar usuario");
      }
      const usuarioActualizado = await response.json();
      set((state) => ({
        usuarios: state.usuarios.map((u) =>
          u.id === id ? usuarioActualizado : u
        ),
      }));
    } catch (error) {
      console.error("Error al editar usuario:", error);
    }
  },
}));

function get(): { usuarios: any } {
  throw new Error("Function not implemented.");
}
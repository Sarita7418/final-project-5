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

  user: Usuario | null; // Añadir la propiedad 'user'
  isLoading: boolean; // Agregar isLoading
  errorMessage: string | null; // Agregar errorMessage

  guardarRol: (rol: string) => void;
  fetchUsuarios: () => Promise<void>;
  fetchAlertas: () => Promise<void>;
  fetchAreas: () => Promise<void>;
  fetchSensores: () => Promise<void>;
  fetchPiedashboard: () => Promise<void>;
  fetchCmensual: () => Promise<void>;
  fetchLecturas: () => Promise<void>;
  eliminarUsuario: (id: string) => void;
  cambiarPassword: (id: string, newPassword: string) => Promise<boolean>;
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

  user: null, // Inicializar 'user' como null
  isLoading: false, // Estado inicial para isLoading
  errorMessage: null, // Estado inicial para errorMessage

  guardarRol: (rol: string) => {
    set({ rolselected: rol });
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

  cambiarPassword: async (email: string, newPassword: string) => {
    const { usuarios } = get(); // Obtén el estado actual del store

    set({ isLoading: true, errorMessage: null }); // Indicador de carga

    try {
      // Buscar el usuario por su correo
      const usuarioExistente = usuarios.find(
        (usuario) => usuario.email === email
      );

      if (!usuarioExistente) {
        set({
          isLoading: false,
          errorMessage: "El correo electrónico no está registrado.",
        });
        return false; // Retorna false si no existe el usuario
      }

      // Realizar petición para actualizar contraseña
      const response = await fetch(
        `https://673778bcaafa2ef22233f00b.mockapi.io/usuarios/${usuarioExistente.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: newPassword }),
        }
      );

      if (response.ok) {
        set((state) => ({
          usuarios: state.usuarios.map((usuario) =>
            usuario.id === usuarioExistente.id
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
    } catch (error) {
      console.error("Error en la petición de cambio de contraseña", error);
      set({
        isLoading: false,
        errorMessage: "Hubo un error al cambiar la contraseña",
      });
      return false;
    }
  },
}));
function get(): { usuarios: any } {
  throw new Error("Function not implemented.");
}

import { getData } from '@/lib/getData';
import { create } from 'zustand';

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
    guardarRol: (rol: string) => void;
    fetchUsuarios: () => Promise<void>;
    fetchAlertas: () => Promise<void>;
    fetchAreas: () => Promise<void>;
    fetchSensores: () => Promise<void>;
    fetchPiedashboard: () => Promise<void>;
    fetchCmensual: () => Promise<void>;
    fetchLecturas: () => Promise<void>;
    eliminarUsuario: (id: string) => void;

    
};

export const useAuthStore = create<AuthStore>((set) => ({
    usuarios: [],
    alertas: [],
    areas: [],
    sensores: [],
    piedashboard: [],
    cmensual: [],
    lecturas: [],
    rolselected: "",
    guardarRol: (rol: string) => {
        set({ rolselected: rol });
    },
    fetchUsuarios: async () => {
        const data = await getData("https://673778bcaafa2ef22233f00b.mockapi.io/usuarios");
        set({ usuarios: data });
    },

    eliminarUsuario: (id: string) => {
        set((state) => ({
          usuarios: state.usuarios.filter((usuario) => usuario.id !== id),
        }));
    },

    fetchAlertas: async () => {
        const data = await getData("https://673778bcaafa2ef22233f00b.mockapi.io/alertas");
        set({ alertas: data });
    },
    fetchAreas: async () => {
        const data = await getData("https://673778bcaafa2ef22233f00b.mockapi.io/Areas");
        set({ areas: data });
    },
    fetchSensores: async () => {
        const data = await getData("https://673778bcaafa2ef22233f00b.mockapi.io/Sensores");
        set({ sensores: data });
    },
    fetchPiedashboard: async () => {
        const data = await getData("https://673778bcaafa2ef22233f00b.mockapi.io/pieDashboard");
        set({ piedashboard: data });
    },
    fetchCmensual: async () => {
        const data = await getData("https://673778bcaafa2ef22233f00b.mockapi.io/cMensual");
        set({ cmensual: data });
    },
    fetchLecturas: async () => {
        const data = await getData("https://673778bcaafa2ef22233f00b.mockapi.io/lecturas");
        set({ lecturas: data });
    }
    
}));


  
import { useAuthStore } from '@/app/store';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import SocialLogin from './SocialLogin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginBox.css';
import "./LoginButton.css";
import { useRouter } from 'next/navigation';

const LoginBox = () => {
  const { usuarios, fetchUsuarios, guardarRol } = useAuthStore();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const clickSoundRef = useRef<HTMLAudioElement | null>(null);


 /* useEffect(() => {
    if (typeof window !== 'undefined') {
      clickSoundRef.current = new Audio('/click.mp3');
    }
  }, []);*/

  useEffect(() => {
    fetchUsuarios();
  }, [fetchUsuarios]);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const logear = async () => {
    try {
      if (clickSoundRef.current) {
        await clickSoundRef.current.play();
      }
    } catch (error) {
      console.error('Error al reproducir el audio:', error);
    }

    const usuarioEncontrado = usuarios.find((usuario) => usuario.userName === username);

    if (usuarioEncontrado && usuarioEncontrado.password === password) {
      guardarRol(usuarioEncontrado.rol);
      localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioEncontrado));
      router.push('/dashboard');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-box">
      <h2>Bienvenido</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={handlePasswordChange}
      />
      <Link href="/password" className="forgot-password">
        ¿Olvidó su contraseña?
      </Link>
      <div className="Red-Social">
        <p>O continúe con:</p>
        <SocialLogin />
        <button className="login-button" onClick={logear}>
          INGRESAR
        </button>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default LoginBox;


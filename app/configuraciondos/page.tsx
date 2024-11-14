import React from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Lista from "./components/Lista";
import "./config.css"
import BotonAgr from './components/BotonAgr';

const configuracion = () => {
  return (
    <div>
      <Header />
      <section className="content">
        <Menu />
        <section className="config_conten">
              <div className="pestana">                
                <h4>Usuarios</h4>
                <h4>Ajustes del Sistema</h4>
              </div>
                <Lista/>
                <BotonAgr/>
             
        </section>
      </section>
</div>
  )
}

export default configuracion
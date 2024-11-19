import React from 'react'
import Header from '@/components/Header'
import Menu from '@/components/Menu'
import Lista from '@/components/Lista'
import BotonAgr from '@/components/BotonAgr'
import ConfigMenu from '@/components/ConfigMenu'


const configuracion = () => {
  return (
    <div>
      <Header />
      <section className="content">
        <Menu />
        <section className="page_content">
              <ConfigMenu/>
        </section>
      </section>
</div>
  )
}

export default configuracion
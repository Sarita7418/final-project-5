import React from 'react'
import Header from '@/components/Header'
import Menu from '@/components/Menu'
import Alert from './components/Alert'


function alerts() {
  return (
    <div>
      <Header />
      <section className="content">
        <Menu />
        <section className="page_content">
          <Alert/>
        </section>
      </section>
</div>
  )
}

export default alerts
import Header from '@/components/Header'
import Menu from '@/components/Menu'
import React from 'react'

const dashboard = () => {
  return (
    <div>
        <Header/>
        <section className='content'>
          <Menu/>
        </section>
    </div>
  )
}

export default dashboard
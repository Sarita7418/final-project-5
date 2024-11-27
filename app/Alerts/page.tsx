"use client"
import React from 'react'
import Header from '@/components/Header'
import Menu from '@/components/Menu'
import Alert from '@/components/Alert'

function alerts() {

  return (
    <div>
      <Header />
      <section className="content">
        <Menu />
        <section className="page_content">
          <Alert handleTabChange={function (tab: string): void {
            throw new Error('Function not implemented.')
          } }/>
        </section>
      </section>
</div>
  )
}

export default alerts
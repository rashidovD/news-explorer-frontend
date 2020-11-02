import React from 'react'
import './Preloader.css'

function Preloader() {
  return (
    <section className="preloader">
      <i className="preloader__rotary" />
      <p className="preloader__text">Идет поиск новостей...</p>
    </section>
  )
}

export default Preloader

import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Provide pre-made pages and layouts, plugins, and other elements to ensure consistency. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Personalize all the elements to fit your specific needs without any coding knowledge.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create the website to be search engine friendly.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Static web service.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Allow websites to work on different platforms.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Customized web app development. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Full-stack development.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services
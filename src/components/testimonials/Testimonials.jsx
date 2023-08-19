import React from 'react'
import './testimonials.css'
import avtr1 from '../../assets/avatar1.jpg'
import avtr2 from '../../assets/avatar2.jpg'
import avtr3 from '../../assets/avatar3.jpg'
import avtr4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: avtr1,
    name: 'Nikhil Srivastav',
    review: 'I asked for a well made portfolio for my professional field and I was totally satisfied with the result.'
  },
  {
    avatar: avtr2,
    name: 'Dheeraj Kanwal',
    review: 'I needed a portfolio that could showcase my acedemics and my professional background and that too on a due time, and Abhishek did not disappoint.'
  },
  {
    avatar: avtr3,
    name: 'Gaurav Belwal',
    review: 'Abhishek listens to the said task and queries when the problem arrives in a very professional manner. Its a good trait for a developer.'
  },
  {
    avatar: avtr4,
    name: 'I.D. Paliwal',
    review: 'I asked for help for a web page design, and I got exactly what I needed with a well made design and it really eased my problem.'
  }
]


const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}  /* 40px*/
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review, index}) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt = 'reviewers'/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials
import './P1_section6_style.scss'
import {Photo} from '../../../Photo.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function P1_section6(){
    return(
        <>
        
            <section className='P1_section6'>
                <div className='container'>
                    <h2>Our customers say</h2>
                    <div>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 5</SwiperSlide>
                            <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 7</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                            <SwiperSlide>Slide 9</SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='mainUser'>
                        <img src={Photo.main_user} alt="" />
                    </div>
                    <div className='nameUser'>
                        <p className='name'>Starla Virgoun</p>
                        <p>Financial advisor</p>
                    </div>
                    <div className='text'>
                        <p className='asd'>“</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <p className='asd'>“</p>
                    </div>
                    <div className='users'>
                        <img src={Photo.users_div} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
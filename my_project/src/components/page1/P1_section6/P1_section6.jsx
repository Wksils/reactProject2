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
                    <div className='dsa'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={false}
                            navigation={false}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                            initialSlide={3}
                        >
                            <SwiperSlide>
                                <div className='cont'>
                                    <div className='mainUser'>
                                        <img src={Photo.usOne} alt="" />
                                    </div>
                                    <div className='nameUser'>
                                        <p className='name'>Masha Vasha</p>
                                        <p>Cool girl</p>
                                    </div>
                                    <div className='text'>
                                        <p className='asd'>“</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                                        <p className='asd'>“</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='cont'>
                                    <div className='mainUser'>
                                        <img src={Photo.usTwo} alt="" />
                                    </div>
                                    <div className='nameUser'>
                                        <p className='name'>Stacy Star</p>
                                        <p>DJ</p>
                                    </div>
                                    <div className='text'>
                                        <p className='asd'>“</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                                        <p className='asd'>“</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='cont'>
                                    <div className='mainUser'>
                                        <img src={Photo.usThree} alt="" />
                                    </div>
                                    <div className='nameUser'>
                                        <p className='name'>Olga Fire</p>
                                        <p>Financial advisor</p>
                                    </div>
                                    <div className='text'>
                                        <p className='asd'>“</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                                        <p className='asd'>“</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                               <div className='cont'>
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
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='cont'>
                                    <div className='mainUser'>
                                        <img src={Photo.usFour} alt="" />
                                    </div>
                                    <div className='nameUser'>
                                        <p className='name'>Timur Ivanov</p>
                                        <p>Bro</p>
                                    </div>
                                    <div className='text'>
                                        <p className='asd'>“</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                                        <p className='asd'>“</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='cont'>
                                    <div className='mainUser'>
                                        <img src={Photo.usFive} alt="" />
                                    </div>
                                    <div className='nameUser'>
                                        <p className='name'>Mimi Yola</p>
                                        <p>Financial advisor</p>
                                    </div>
                                    <div className='text'>
                                        <p className='asd'>“</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                                        <p className='asd'>“</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='cont'>
                                    <div className='mainUser'>
                                        <img src={Photo.usSix} alt="" />
                                    </div>
                                    <div className='nameUser'>
                                        <p className='name'>Sara Jons</p>
                                        <p>Financial advisor</p>
                                    </div>
                                    <div className='text'>
                                        <p className='asd'>“</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                                        <p className='asd'>“</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='users'>
                        <img src={Photo.users_div} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
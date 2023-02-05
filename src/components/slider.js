import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './slider.css'




export default function slider() {
    return(
        <>
        <Swiper

modules={[Navigation, Pagination, Scrollbar, A11y]}
spaceBetween={10}
slidesPerView={1}
navigation
pagination={{ clickable: true }}
scrollbar={{ style: true }}
onSwiper={(swiper) => console.log(swiper)}
onSlideChange={() => console.log('slide change')}
>
         <div className='Slider'>
           <SwiperSlide>

            <div className='Slide1'>

                    <img className='img-slider'src='./img/18a.jpg' width={"400px"} height={"400px"}  alt= 'home'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='Slider2'>
                    <img className='img-slider'src='./img/21a.jpg' width={"400px"} height={"400px"} alt= 'home'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='Slider3'>
                    <img className='img-slider'src='./img/23a.jpg' width={"400px"} height={"400px"}  alt= 'home'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='Slider4'>
                    <img className='img-slider'src='./img/26a.jpg' width={"400px"} height={"400px"}  alt= 'home'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='Slider5'>
                    <img className='img-slider'src='./img/30a.jpg' width={"400px"} height={"400px"}  alt= 'home'/>
                </div>
            </SwiperSlide>
                </div>
        </Swiper>
        </>
    )
}
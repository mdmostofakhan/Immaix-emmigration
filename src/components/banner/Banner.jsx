import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    const [travels, setTravels] = useState()

    useEffect(() => {
        fetch("file.json")
        .then( res => res.json())
        .then( data => setTravels(data))
        console.log(travels)
    },[])

    return (
        <div>
              <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       {
        travels?.map((travel,index) => (
          <div key={index}>
             <SwiperSlide>
              <div
              className='h-[700px] mt-8 bg-cover bg-no-repeat  relative bg-opacity-40 '
              style={{
                backgroundImage: `url(${travel.images})`
                
              }}
              >
                <div className=''>
                <p className='text-white absolute top-[15%] text-2xl left-[42%]'>{travel.title}</p>
                <p className='text-white absolute top-[23%] text-8xl w-[] font-bold left-[26%]'>{travel.text}</p>
                <p>{travel.letter}</p>
                </div>
              </div>
           </SwiperSlide>
          </div>
        ))}
      </Swiper>
        </div>
    );
};

export default Banner;
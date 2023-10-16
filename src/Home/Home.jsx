import React, { useEffect, useState } from 'react';
import Banner from '../components/banner/Banner';
import { Icon } from '@iconify/react';
import images from '../assets/img-bg.jpg'

const Home = () => {
    const [visas, setVisas] = useState()

    useEffect(() => {
        fetch('file2.json')
        .then(res => res.json())
        .then(data => setVisas(data))
        console.log(visas)
    },[])

    return (
        <div>
            <Banner></Banner>
            <div className='mt-8 container mx-auto w-[63%]  gap-5 grid grid-cols-3'>
              {
                visas?.map((visa,index) => (
                    <div key={index}>
                        <div className='border  flex gap-6 p-5 h-40 hover:shadow-lg '>
                            <p className='text-6xl'><span><Icon icon={visa.icon} /></span></p>
                            <div>
                                <p className='text-2xl font-bold'>{visa.title}</p>
                                <p className=' mt-2 '>{visa.text}</p>
                            </div>
                        </div>
                     </div>
                ))
              }
              </div>
            </div>
    );
};

export default Home;


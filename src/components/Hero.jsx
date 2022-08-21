import React from 'react'
import bgImg from '../assets/imgone.png'
import wave from '../assets/wave.svg'

const Hero = () => {
  return (
    <>
    <div className='w-full h-screen bg-whitedefault flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-3xl text-bluedefault'>Fundado em 2022, nós somos o</p>
                <div className='flex'>
                <h1 className='text-5xl text-yellowdefault'>Mountain</h1> 
                <h1 className='text-5xl text-bluedefault'>Bank</h1>
            </div>
            <p className='text-3xl text-bluedefault'>O único banco capaz de levar o seu saldo para as <span className='text-yellowdefault'>alturas!</span></p> 
            <button className='py-2 px-7 sm:w-[60%] my-4'>Leve-me para cima!</button>
            </div>
            <div className=''>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
        </div>
    </div>
    <div>
        <img src={wave} alt="" />
    </div>
    </>
  )
}

export default Hero
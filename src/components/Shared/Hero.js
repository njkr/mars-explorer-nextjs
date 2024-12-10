import React from 'react'

// custom
import Logo from '../../assets/mars_3.png'

function Hero() {
  return (
    <div className='flex flex-col items-center space-y-2 py-8'>
      <img src={Logo} alt='marsx logo' className='' />
      {/* <h1 className='text-4xl text-clr-white font-Ubuntu font-semibold py-10'>
        Mars<span className='text-clr-bg-orange'>x</span> Game
      </h1> */}
    </div>
  )
}

export default Hero
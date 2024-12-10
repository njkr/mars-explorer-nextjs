import React from 'react'

// custom
import ConnectWallet from './ConnectWallet'
import MintLand from './MintLand'
// import LandImg from '../../assets/land.png'
import LandVideo from '../../assets/Land_NFT.mp4'

function Land() {
  return (
    <div className='flex flex-col space-y-2 items-center justify-between max-w-lg mx-auto w-full py-4 border rounded-lg'>
      <p className='sm:text-2xl text-xl font-normal capitalize text-center w-full px-4 font-MovieReg'>
        To complete the process, please
        <br />
        <span className='text-clr-bg-blue font-bold underline font-MovieBoldItalic'>
          Connect Wallet
        </span>{' '}
        then{' '}
        <span className='text-clr-bg-orange font-bold underline font-MovieBoldItalic'>
          Mint Land
        </span>
      </p>
      {/* <img
        src={LandImg}
        alt='land'
        className='object-cover sm:h-[45vh] h-[40vh] w-10/12 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow hover:shadow-white/90 border bg-white p-1'
      /> */}
      <video
        className='object-cover sm:h-[49vh] h-[40vh] sm:w-10/12 w-11/12 rounded-lg shadow-none border'
        autoPlay
        loop
        muted
      >
        <source src={LandVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='grid sm:grid-cols-2 sm:gap-4 w-full sm:px-10 px-7 text-center'>
        <ConnectWallet />
        <MintLand />
      </div>
    </div>
  )
}

export default Land
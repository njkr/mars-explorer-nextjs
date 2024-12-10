import React from 'react'

function Loading() {
  return (
    <div className='flex items-center z-100 w-full h-full absolute top-0 left-0'>
        <div className='absolute top-0 left-0 w-full h-full bg-white opacity-75 z-10'></div>
        <div className='flex items-center justify-center mx-auto bg-black rounded-lg z-50 S-330:py-20 py-16 S-330:px-20 px-10'>
            <div aria-label="Loading..." className="flex S-550:flex-row flex-col items-center S-550:space-x-2">
                <svg className="h-20 w-20 animate-spin stroke-clr-bg-orange" viewBox="0 0 256 256">
                    <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                    <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="24"></line>
                    <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                    </line>
                    <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="24"></line>
                    <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                    </line>
                    <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="24"></line>
                    <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                    <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                    </line>
                </svg>
                <span className="text-4xl font-medium text-clr-bg-orange">Loading...</span>
            </div>
        </div>
    </div>
  )
}

export default Loading
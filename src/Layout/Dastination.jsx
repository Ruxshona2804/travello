import Image from 'next/image'
import React from 'react'
import italy from '@/assets/images/italy.svg'
import london from '@/assets/images/london.svg'
import europe from '@/assets/images/europe.svg'
import decore from '@/assets/images/Decore.svg'
const Dastination = () => {
    return (
        <div className="container mx-auto ">
            <div className="text-center mb-12">
                <p className="text-xl text-gray-500">Top Selling</p>
                <p className="text-4xl md:text-5xl font-bold text-gray-800">Top Destinations</p>
            </div>

            <div className="cards relative flex items-center gap-4">
                <div className="card  ">
                    <Image src={italy} alt='italy' width={500}   className="w-full object-contain" />
                    <div className="p-4">
                        <p className="">
                            Rome, Italty <span className="text-orange-500 font-bold">$5.42k</span>
                        </p>
                        <p className="text-gray-500 text-sm mt-2">10 Days Trip</p>
                    </div>
                </div>

                <div className="">
                    <Image src={london} alt='london'  className="" />
                    <div className="">
                        <p className="">
                            London, UK <span className="">$4.2k</span>
                        </p>
                        <p className="">12 Days Trip</p>
                    </div>
                </div>

                <div className="z-10 ">
                    <Image src={europe} alt='europe'  className="w-full object-cover" />

                    <div className="p-4">
                        <p className="">
                            Rome, Italy <span className="text-orange-500 font-bold">$15k</span>
                        </p>
                        <p className="text-gray-500 text-sm mt-2">28 Days Trip</p>
                    </div>

                </div>
                <div className='absolute z-0 bottom-10 -right-20'>
                    <Image className='' src={decore} alt="decore" />
                </div>
            </div>
        </div>
    )
}

export default Dastination

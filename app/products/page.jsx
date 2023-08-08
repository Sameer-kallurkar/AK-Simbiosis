import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <div className="products flex flex-col gap-10">
        <div className="conname font-bold text-6xl mt-10 mb-5">
            <h1>Products</h1>
        </div>
        <div className="prodimgs flex flex-wrap ml-10 mr-10 align-middle justify-center">
        <div className="prodimg group m-10">
        <Image
            src='/assets/Products/Card-16.svg'
            alt='hero'
            width={275}
            height={150}
            objectFit="cover"
            className=' pop transition-transform duration-300 transform scale-100 group-hover:scale-110 shadow-xl'
        />
        </div>
        <div className="prodimg group m-10">
        <Image
            src='/assets/Products/Card-15.svg'
            alt='hero'
            width={275}
            height={150}
            objectFit="cover"
            className=' pop transition-transform duration-300 transform scale-100 group-hover:scale-110 shadow-xl'
        />
        </div>
        <div className="prodimg group m-10">
        <Image
            src='/assets/Products/Card-14.svg'
            alt='hero'
            width={275}
            height={150}
            objectFit="cover"
            className=' pop transition-transform duration-300 transform scale-100 group-hover:scale-110 shadow-xl'
        />
        </div>
        <div className="prodimg group m-10">
        <Image
            src='/assets/Products/Card-13.svg'
            alt='hero'
            width={275}
            height={150}
            objectFit="cover"
            className=' pop transition-transform duration-300 transform scale-100 group-hover:scale-110 shadow-xl'
        />
        </div>
        <div className="prodimg group m-10">
        <Image
            src='/assets/Products/Card.svg'
            alt='hero'
            width={275}
            height={150}
            objectFit="cover"
            className=' pop transition-transform duration-300 transform scale-100 group-hover:scale-110 shadow-xl'
        />
        </div>
        <div className="prodimg group m-10">
        <Image
            src='/assets/Products/Card-1.svg'
            alt='hero'
            width={275}
            height={150}
            objectFit="cover"
            className=' pop transition-transform duration-300 transform scale-100 group-hover:scale-110 shadow-xl'
        />
        </div>
        <div className="prodimg group m-10">
        <Image
            src='/assets/Products/Card-2.svg'
            alt='hero'
            width={275}
            height={150}
            objectFit="cover"
            className=' pop transition-transform duration-300 transform scale-100 group-hover:scale-110 shadow-xl'
        />
        </div>
        <div className="prodimg group m-10">
        <Image
            src='/assets/Products/Card-3.svg'
            alt='hero'
            width={275}
            height={150}
            objectFit="cover"
            className=' pop transition-transform duration-300 transform scale-100 group-hover:scale-110 shadow-xl'
        />
        </div>
        <div className="prodimg group m-10">
        <Image
            src='/assets/Products/Card-4.svg'
            alt='hero'
            width={275}
            height={150}
            objectFit="cover"
            className=' pop transition-transform duration-300 transform scale-100 group-hover:scale-110 shadow-xl'
        />
        </div>
        <div className="prodimg group m-10">
        <Image
            src='/assets/Products/Card-5.svg'
            alt='hero'
            width={275}
            height={150}
            objectFit="cover"
            className=' pop transition-transform duration-300 transform scale-100 group-hover:scale-110 shadow-xl'
        />
        </div>
        <div className="prodimg group m-10">
        <Image
            src='/assets/Products/Card-6.svg'
            alt='hero'
            width={275}
            height={150}
            objectFit="cover"
            className=' pop transition-transform duration-300 transform scale-100 group-hover:scale-110 shadow-xl'
        />
        </div>
        <div className="prodimg group m-10">
        <Image
            src='/assets/Products/Card-7.svg'
            alt='hero'
            width={275}
            height={150}
            objectFit="cover"
            className=' pop transition-transform duration-300 transform scale-100 group-hover:scale-110 shadow-xl'
        />
        </div>
        <div className="prodimg group m-10">
        <Image
            src='/assets/Products/Card-8.svg'
            alt='hero'
            width={275}
            height={150}
            objectFit="cover"
            className=' pop transition-transform duration-300 transform scale-100 group-hover:scale-110 shadow-xl'
        />
        </div>
        <div className="prodimg group m-10">
        <Image
            src='/assets/Products/Card-9.svg'
            alt='hero'
            width={275}
            height={150}
            objectFit="cover"
            className=' pop transition-transform duration-300 transform scale-100 group-hover:scale-110 shadow-xl'
        />
        </div>
        <div className="prodimg group m-10">
        <Image
            src='/assets/Products/Card-10.svg'
            alt='hero'
            width={275}
            height={150}
            objectFit="cover"
            className=' pop transition-transform duration-300 transform scale-100 group-hover:scale-110 shadow-xl'
        />
        </div>
        <div className="prodimg group m-10">
        <Image
            src='/assets/Products/Card-11.svg'
            alt='hero'
            width={275}
            height={150}
            objectFit="cover"
            className=' pop transition-transform duration-300 transform scale-100 group-hover:scale-110 shadow-xl'
        />
        </div>
        <div className="prodimg group m-10">
        <Image
            src='/assets/Products/Card-12.svg'
            alt='hero'
            width={275}
            height={150}
            objectFit="cover"
            className=' pop transition-transform duration-300 transform scale-100 group-hover:scale-110 shadow-xl'
        />
        </div>
        </div>
    </div>
    <div className='h-20'></div>
    </>
  )
}

export default page
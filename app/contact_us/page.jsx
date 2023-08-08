import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div className="contacts flex flex-col bg-[#008CAB] lg:h-[600px] gap-[150px]">
        <div className="conname text-white font-bold text-6xl mt-10">
            <h1>Contact Us</h1>
        </div>
        <div className="conimg flex gap-5">
        <div className="group shadow-xl">
        <Link href='mailto:marketingaksimbiosis@rediffmail.com'>
            <Image
                src='/assets/con_gmail.svg'
                alt='hero'
                width={300}
                height={300}
                className='transition-transform duration-300 transform scale-100 group-hover:scale-110 '
            />
        </Link>
        </div>
        <div className="group shadow-xl">
        <Link href='tel:+919449934983'>
            <Image
                src='/assets/con_call.svg'
                alt='hero'
                width={300}
                height={300}
                className='transition-transform duration-300 transform scale-100 group-hover:scale-110'
            />
        </Link>
        </div>
        <div className="group shadow-xl">
        <Link href='https://wa.me/+919449934983'>
            <Image
                src='/assets/con_wa.svg'
                alt='hero'
                width={300}
                height={300}
                className='transition-transform duration-300 transform scale-100 group-hover:scale-110'
            />
        </Link>
        </div>
        <div className="group shadow-xl">
        <Link href='https://www.linkedin.com/company/95724592/admin/feed/posts/'>
            <Image
                src='/assets/con_lked.svg'
                alt='hero'
                width={300}
                height={300}
                className='transition-transform duration-300 transform scale-100 group-hover:scale-110'
            />
        </Link>
        </div>
        </div>
    </div>
    </>
  )
}

export default page
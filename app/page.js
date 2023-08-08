import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className="contactlink">
    <div className="sm:flex hidden lg:ml-48">
            <div className='flex gap-3 md:gap-5 mr-14 mt-5'>
              <div className='flex gap-2 ml-5'>
                  <Image
                  src='/assets/Gmail logo.svg'
                  alt='hero'
                  width={20}
                  height={20}
                  className='object-contain'
                  />
                <Link href='mailto:marketingaksimbiosis@rediffmail.com'className="text-black text-base font-medium  hover:text-cyan-500">
                  <p>marketingaksimbiosis@rediffmail.com</p>
                </Link>
                </div>
              
              <div className='flex gap-2 ml-5'>
                  <Image
                  src='/assets/linkedin logo.svg'
                  alt='hero'
                  width={20}
                  height={20}
                  className='object-contain'
                  />
                <Link href='https://www.linkedin.com/company/95724592/admin/feed/posts/'className="text-black text-base font-medium  hover:text-cyan-500">
                  <p>/company/ak-simbiosis</p>
                </Link>
                </div>

              <div className='flex gap-2 ml-10'>
                  <Image
                  src='/assets/whatsapp logo.svg'
                  alt='hero'
                  width={20}
                  height={20}
                  className='object-contain'
                  />
                <Link href='https://wa.me/+919449934983'className="text-black text-base font-medium  hover:text-cyan-500">
                  <p>+91 9449934983</p>
                </Link>
                </div>
              
              <div className='flex gap-2 ml-10'>
                  <Image
                  src='/assets/Phone logo.svg'
                  alt='hero'
                  width={20}
                  height={20}
                  className='object-contain'
                  />
                <Link href='tel:+919449934983'className="text-black text-base font-medium  hover:text-cyan-500">
                  <p>+91 9449934983</p>
                </Link>
                </div>
            </div>
        </div>
    </div>


    <div className="hero lg:ml-24 lg:mt-28 lg:h-[700px] ">
      <Link href='/products'>
        <Image
          src='/assets/HeroAll.svg'
          alt='hero'
          width={1300}
          height={600}
      ></Image>
      </Link>

      </div>

 
      <div className='Why_us w-full lg:h-[950px]'>
      <Image
          src='/assets/Why Us.svg'
          alt='hero'
          width={1700}
          height={600}
          className='object-contain'
      ></Image>
      </div>

      <div className='popular_products'>
        <div className="popname font-bold text-5xl m-16">
          <h1>Popular Products</h1>
        </div>
        <div className="popimg m-10 overflow-hidden p-5">
          <div className="card group relative  w-[400px]">
          <Link href='/products'>
          <Image
              src='/assets/pop1.svg'
              alt='hero'
              width={500}
              height={250}
              className='transition-transform duration-300 transform scale-100 group-hover:scale-110'
          />
          </Link>
        </div>
          <div className="card group relative  w-[400px]">
          <Link href='/products'>
          <Image
              src='/assets/pop2.svg'
              alt='hero'
              width={500}
              height={200}
              objectFit="cover"
              className='transition-transform duration-300 transform scale-100 group-hover:scale-110'
          />
          </Link>
        </div>
          <div className="card group relative  w-[400px]">
          <Link href='/products'>
          <Image
              src='/assets/pop3.svg'
              alt='hero'
              width={400}
              height={200}
              objectFit="cover"
              className='transition-transform duration-300 transform scale-100 group-hover:scale-110'
          />
          </Link>
        </div>
          <div className="card group relative  w-[400px]">
          <Link href='/products'>
          <Image
              src='/assets/pop4.svg'
              alt='hero'
              width={400}
              height={200}
              objectFit="cover"
              className=' pop transition-transform duration-300 transform scale-100 group-hover:scale-110'
          />
          </Link>



        </div>
        </div>
      </div>


      <div className='ayurvedic_products'>
        <div className="ayuname font-bold text-5xl m-16">
          <h1>Ayurvedic Products</h1>
        </div>
        <div className="ayuimg lg:ml-24 ml-3 mt-5">
        <Link href='/products'>
          <Image
              src='/assets/Aruprd.svg'
              alt='hero'
              width={1300}
              height={400}
              objectFit="cover"
              className=' pop transition-transform duration-300 transform scale-100 group-hover:scale-110'
          />
          </Link>
        </div>
        </div>
        <div className='h-20'></div>
    </>
  )
}

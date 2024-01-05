import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { SliderData } from './SliderData'
import Image from 'next/image'

export default function Portfolio() {

  const [modal, setModal] = useState(false)
  const [TempImg, setTempImg] = useState('')

  const getImg = (imgSrc) => {
    setTempImg(imgSrc);
    setModal(true);
  }

  return (
    <>
    {modal && 
      <div className="w-[100%] h-[100vh] fixed top-0 left-0 justify-center items-center align-middle bg-black/90 transition-opacity ease-in-out z-50">
        <AiOutlineClose size={50} color='white' className='fixed top-[15%] right-[15%] p-2 cursor-pointer' onClick={() => setModal(false)} />
        <Image src={TempImg} alt='Image' className='object-cover w-auto max-w-[90%] sm:max-w-[60%] h-auto max-h-[60%] block box-border mt-[60%] sm:mt-[10%] mx-auto' width={1240} height={500}/>
      </div>
    }
    <div className='max-w-[90%] h-auto mx-auto py-16 text-center'>
      <div className='h-auto columns-3 max-lg:columns-2 max-sm:columns-1 py-0 px-3'>
        {SliderData.map((slide, index) => {
          return (
            <div className='transition-opacity cursor-pointer mb-3 ease-linear' key={index} onClick={() => getImg(slide.image)}>
              <Image src={slide.image}  alt='/' className='object-cover' width={1240} height={500}/>
            </div>
          )
        })}
      </div> 
    </div>
    </>
  )

   /* return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className=' font-bold text-2xl p-4'>Travel Photos</h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' alt='/' className='w-full h-full ' width='677' height='451'/>
            </div>
            <div className='w-full h-full'>
              <Image src='https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80' alt='/' className='w-full h-full object-cover'width={600} height={602} />
            </div>
            <div className='w-full h-full'>
              <Image src='https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2437&q=80' alt='/' className='w-full h-full object-cover'width={600} height={602} />
            </div>
            <div className='w-full h-full'>
              <Image src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' alt='/' className='w-full h-full object-cover'width={600} height={602} />
            </div>
            <div className='w-full h-full'>
              <Image src='https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2419&q=80' alt='/' className='w-full h-full object-cover'width={600} height={602} />
            </div>
        </div>
    </div>
  ) */
}

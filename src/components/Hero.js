

export default function Hero({heading, message, bg}) {  

  return (
    <div className={`flex items-center justify-center ${bg} mb-12 bg-fixed bg-center bg-cover custom-img`}>
      {/* Overlay */}
      <div className={`absolute top-0 left-0 right-0 bottom-0 bg-black/80 w-full ${bg}`} />
      <div className="p-8 sm:p-5 text-white z-[2] mt-[-10rem]">
        <h2 className=" text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 py-2 border hover:bg-white hover:text-black">Book</button>
      </div>
    </div>
  )
}

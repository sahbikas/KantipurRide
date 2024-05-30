import React from 'react'

function page() {
  return (
    <div className='shadow border-green-800 bg-white  rounded-md lg:ml-10'>
        <div>
       <span className='font-bold text-2xl ml-3'>Heat Map</span>
        </div>
        <hr/>
        <div className="flex justify-center items-center py-3 ">
      <div className="w-full h-10 bg-gray-200 flex justify-between items-center rounded-lg p-4 hover:bg-gray-200 transition duration-300">
        <div className="text-gray-700 hover:text-red-500 cursor-pointer"> TRANSPORT</div>
        <div className="text-gray-700 hover:text-blue-500 cursor-pointer">ORDER</div>
        <div className="text-gray-700 hover:text-green-500 cursor-pointer">SERVICE</div>
        <div className="text-gray-700 hover:text-yellow-500 cursor-pointer">DELIVERY</div>
      </div>
    </div>
    <div className=" flex-wrap justify-center md:justify-around py-3">
  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline">
    Toggle HeatMap
  </button>
  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline">
    Change Gradient
  </button>
  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline">
    Change Radius
  </button>
  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline">
    Change Opacity
  </button>
</div>

    <div className="w-full h-[500px] bg-gray-200 border border-gray-300 rounded-lg flex justify-center items-center py-3">
      <p className="text-xl font-bold text-gray-800">Map</p>
    </div>
    </div>
  )
}

export default page
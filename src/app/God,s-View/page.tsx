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
   Enroute To pickup
  </button>
  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline">
   Reached Pickup
  </button>
  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline">
    Journey Started
  </button>
  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline">
    Available
  </button>
  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline">
    All
  </button>
</div>

<div className="flex">
      {/* Left Side Scroll Bar */}
      <div className="flex-none h-screen overflow-y-auto w-1/4 bg-gray-200 p-4">
        {/* List of Users */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">All</h2>
          {/* List of Users Goes Here */}
          {/* Example: */}
          <div className="text-sm">
            <p>Provider Demo - 987654****</p>
            <p>Fabian Demo - 987654****</p>
            {/* Other Users... */}
          </div>
        </div>
      </div>
      
      {/* Right Side Map */}
      <div className="flex-auto h-screen overflow-hidden">
        {/* Map Goes Here */}
        {/* Example: */}
        <div className="bg-gray-400 h-full w-full flex justify-center items-center">
          <p className="text-xl text-gray-700">Map Goes Here</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page
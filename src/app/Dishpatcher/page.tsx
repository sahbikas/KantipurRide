import React from 'react';
import Image from 'next/image';
function Page() {
  return (
    <div className='shadow border-green-800  rounded-lg lg:ml-10'>
      <div>
        <h1>Request List</h1>
       
      </div>
      <hr/>
      
      <div className=' border-green-800  rounded-lg '>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-10 px-4">
        {/* Small Box */}
        <div className="bg-blue-200 h-[500px] rounded-lg sm:col-span-1">
        <div className='bg-[#dadcecda]'>
        <span >Searching List</span>
        </div>
        
        </div>
        {/* Big Box */}
        <div className="bg-green-200 h-[500px] rounded-lg sm:col-span-2">
          <div className='bg-[#dadcecda]'>
        <span >Map</span>
        </div>
        <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Page;

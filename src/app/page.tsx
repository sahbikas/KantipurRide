import Image from "next/image";

export default function Dashboard() {
  return (
    < >
     <div className=" items-center shadow lg:ml-10">
      <p className="font-bold ">DASHBOARD</p>
      <h1 className="font-bold text-2xl">Dashboard Overview</h1>
     <div className="py-11">
     <div className=' border-green-800  rounded-lg '>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-5 px-4">
        
        <div className="bg-blue-200 p-8 rounded-lg shadow">Box 1</div>
       
        <div className="bg-green-200 p-8 rounded-lg shadow">Box 2</div>
       
        <div className="bg-yellow-200 p-8 rounded-lg shadow">Box 3</div>
        
        <div className="bg-red-200 p-8 rounded-lg shadow">Box 4</div>
      </div>
    </div>
    <div className=' border-green-800  rounded-lg '>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 px-4">
        
        <div className="bg-blue-200 p-20 rounded-lg shadow">Box 1</div>
       
        <div className="bg-green-200 p-20 rounded-lg shadow">Box 2</div>
      </div>
    </div>
    <div className=' border-green-800  rounded-lg '>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 px-4">
        
        <div className="bg-blue-200 p-20 rounded-lg shadow">Box 1</div>
       
        <div className="bg-green-200 p-20 rounded-lg shadow">Box 2</div>
      </div>
    </div>
      
      </div> 
      </div>
     
    </>
  );
}

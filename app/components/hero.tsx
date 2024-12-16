import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-gray-100 p-6">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-blue-400 text-white p-6 rounded-lg m-2">
        <h2 className="text-2xl font-bold mb-2">The Best Platform for Car Rental</h2>
        <p className="mb-4">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
        <button className="bg-blue-700 text-white px-4 py-2 rounded">Rental Car</button>
        <Image 
          src="/car1.png" 
          alt="Car Rental" 
          width={500} 
          height={300} 
          className="mt-4"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-blue-600 text-white p-6 rounded-lg m-2">
        <h2 className="text-2xl font-bold mb-2">Easy way to rent a car at a low price</h2>
        <p className="mb-4">Providing cheap car rental services and safe and comfortable facilities.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Rental Car</button>
        <Image 
          src="/car2.png" 
          alt="Car Rental" 
          width={500} 
          height={300} 
          className="mt-4"
        />
      </div>
    </div>
  );
};

export default Hero;
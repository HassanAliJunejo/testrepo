import Image from "next/image";

interface CarCardProps {
  image: string;
  name: string;
  type: string;
  price: string;
}

const CarCard = ({ image, name, type, price }: CarCardProps) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-center">
      <Image src={image} alt={name} width={300} height={150} className="mx-auto" />
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-gray-500">{type}</p>
      <p className="font-bold mt-2">${price}/day</p>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Rent Now</button>
    </div>
  );
};

export default CarCard;
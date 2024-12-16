'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/component/ui/card";

export default function Page() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='w-full flex'>
      <div className="first hidden sm:flex w-[20%]">
        <Image src={'/Nav Bar Side (1).png'} alt='' width={360} height={1600}/>
      </div>
      <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
             <section className="popular w-full flex flex-col gap-4">
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Koenigsegg', image: '/koenigsegg.png', desc: 'Sport' },
              { title: 'Nissan GT - R', image: '/car (8).png', desc: 'Luxury' },
              { title: 'Rolls-Royce', image: '/car (9).png', desc: 'Sport' },
              { title: 'All New Rush', image: '/Car (13).png', desc: 'Luxury' },
              { title: 'CR - V', image: '/Car (11).png', desc: 'Luxury' },
              { title: 'ALLNEW TERIOS', image: '/Car (14).png', desc: 'SUV' },
              { title: 'MGZX Exclusive', image: '/Car (16).png', desc: 'Luxury' },
              { title: 'NEW MGZS', image: '/Car (15).png', desc: 'SUV' },
              { title: 'CR -V ', image: '/Car (11).png', desc: 'Luxury' },
              { title: 'NEW MGZS', image: '/Car (15).png', desc: 'SUV' },
              { title: 'NEW MGZS', image: '/Car (15).png', desc: 'SUV' },
            ].map((car, index) => (
              <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="w-full flex items-center justify-between">
                    {car.title} <Image src={"/Like.png"} alt="" width={20} height={20} />
                  </CardTitle>
                  <CardDescription>{car.desc}</CardDescription>
                </CardHeader>
                <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                  <Image src={car.image} alt="" width={220} height={68} />
                  <Image src={"/Spesification (4).png"} alt="" width={256} height={24} className='hidden md:flex' />
                  <Image src={"/Spesification (2).png"} alt="" width={256} height={24} className='md:hidden' />
                </CardContent>
                <CardFooter className="w-full flex items-center justify-between">
                  <p>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <Link href={'/details'}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          {showMore && (
            <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'MG ZX Exclusive', image: '/Car (16).png', desc: 'SUV' },
                { title: 'NEW MG ZS', image: '/Car (15).png', desc: 'Sedan' },
                { title: 'New MG ZX Excite', image: '/car (8).png', desc: 'Sport' },
                { title: 'NEW MG ZS', image: '/koenigsegg.png', desc: 'Sedan' },
              ].map((car, index) => (
                <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle className="w-full flex items-center justify-between">
                      {car.title} <Image src={"/heart.png"} alt="" width={20} height={20} />
                    </CardTitle>
                    <CardDescription>{car.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                    <Image src={car.image} alt="" width={220} height={68} />
                    <Image src={"/Spesification (3).png"} alt="" width={256} height={24} className='hidden md:flex' />
                    <Image src={"/Spesification (3).png"} alt="" width={256} height={24} className='md:hidden' />
                  </CardContent>
                  <CardFooter className="w-full flex items-center justify-between">
                    <p>
                      $99.00/<span className="text-gray-500">day</span>
                    </p>
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </section>

        <section className="button w-full text-center">
          <button 
            onClick={toggleShowMore} 
            className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5"
          >
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
        </section>
      </div>
    </div>
  );
}
'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useState } from 'react';

import { bigShoe1 } from '../../../../../public/assets/images';
import ShoeCard from '@/lib/components/ShoeCard';
import Button from '@/lib/components/ui/Button';
import { shoes, statistics } from '@/lib/constant';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState<string | StaticImageData>(
    bigShoe1
  );

  return (
    <section id="home" className="xl:padding-l wide:padding-r padding-b">
      <div className="max-container flex min-h-screen w-full flex-col justify-center gap-10 xl:flex-row">
        <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
          <p className="font-montserrat text-xl text-coral-red">
            Our Summer Collection
          </p>
          <h1 className="max-sm:text[72px] mt-10 font-palanquin text-8xl font-bold max-sm:leading-[82]">
            <span className="relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white">
              The New Arrival
            </span>
            <br />
            <span className="mt-3 inline-block text-coral-red">Nike</span>
            Shoes
          </h1>
          <p className="mb-14 mt-6 font-montserrat text-lg leading-8 text-slate-gray sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <Button label="Shop Now" iconUrl="/assets/icons/arrow-right.svg" />
          <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p className="font-palanquin text-4xl font-bold">
                  {stat.value}
                </p>
                <p className="font-montserrat leading-7 text-slate-gray">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex flex-1 items-center justify-center bg-primary bg-hero rounded-b-lg bg-cover bg-center max-xl:py-40 xl:min-h-screen">
          <Image
            src={bigShoeImg}
            width={610}
            height={500}
            alt="shoes"
            className="relative z-10 object-contain"
          />
          <div className="s:gap-6 absolute -bottom-[5%] flex gap-4 max-sm:px-6 sm:left-[10%]">
            {shoes.map((shoe) => (
              <div key={shoe.thumbnail}>
                <ShoeCard
                  imgUrl={shoe}
                  changeBigShoeImg={(currShoe) => {
                    setBigShoeImg(currShoe);
                  }}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

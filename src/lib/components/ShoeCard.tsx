'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import { cn } from '../styles/utils';
import type { IShoes } from '../types';

type Props = {
  imgUrl: IShoes;
  changeBigShoeImg: (imgUrl: string | StaticImageData) => void;
  bigShoeImg: string | StaticImageData;
};

const ShoeCard = ({ imgUrl, changeBigShoeImg, bigShoeImg }: Props) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImg(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={cn('cursor-pointer rounded-xl border-2 max-sm:flex-1', {
        'border-coral-red': bigShoeImg === imgUrl.bigShoe,
      })}
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className="flex items-center justify-center rounded-xl bg-card bg-cover bg-center max-sm:p-4 sm:h-40 sm:w-40">
        <Image
          src={imgUrl.thumbnail}
          width={127}
          height={103}
          alt="shoe"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;

import type { StaticImageData } from 'next/image';

export interface IShoes {
  thumbnail: string;
  bigShoe: string | StaticImageData;
}

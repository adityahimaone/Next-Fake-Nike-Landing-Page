import Image from 'next/image';

type Props = {
  imgURL: any;
  name: string;
  price: string;
};

const PopularProductCard = ({ imgURL, name, price }: Props) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <Image
        src={imgURL}
        width={280}
        height={280}
        alt={name}
        className="object-contain"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <Image src="/assets/icons/star.svg" width={20} height={20} alt="star" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold text-coral-red font-montserrat text-xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;

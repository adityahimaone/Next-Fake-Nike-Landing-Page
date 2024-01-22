import Image from 'next/image';

type Props = {
  imgURL: any;
  label: string;
  subtext: string;
};

const ServiceCard = ({ imgURL, label, subtext }: Props) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl py-16 px-10">
      <div className="w-11 h-11 justify-center flex items-center bg-coral-red rounded-full">
        <Image src={imgURL} width={24} height={24} alt="icons" />
      </div>
      <h3 className="mt-5 font-palanquin leading-normal text-3xl font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;

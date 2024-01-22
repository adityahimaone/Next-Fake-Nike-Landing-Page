import Image from 'next/image';

type Props = {
  imgURL: any;
  customerName: string;
  rating: number;
  feedback: string;
};

const ReviewCard = ({ imgURL, customerName, rating, feedback }: Props) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src={imgURL}
        width={120}
        height={120}
        className="rounded-full object-cover"
        alt="customer"
      />
      <p className="mt-6 max-w-sm info-text text-center">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <Image
          src="/assets/icons/star.svg"
          width={24}
          height={24}
          alt="star"
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="text-3xl mt-1 font-palanquin font-bold text-center">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;

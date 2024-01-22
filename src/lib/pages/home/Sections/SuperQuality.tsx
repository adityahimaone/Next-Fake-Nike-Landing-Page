import Image from 'next/image';

import Button from '@/lib/components/ui/Button';

const SuperQuality = () => {
  return (
    <section id="about-us" className="padding">
      <div className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            <span className="relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white">
              We Provide You
            </span>
            <span className="mt-3 inline-block text-coral-red">Super</span>{' '}
            <span className="mt-3 inline-block text-coral-red">Quality</span>{' '}
            Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance
          </p>
          <p className="mt-6 info-text lg:max-w-lg">
            Our dedication to detail and excellence ensures your satisfication
          </p>
          <div className="mt-11">
            <Button label="View details" />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/assets/images/shoe8.svg"
            width={570}
            height={522}
            className="object-contain"
            alt="shoe"
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;

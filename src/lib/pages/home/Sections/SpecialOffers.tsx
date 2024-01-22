import Image from 'next/image';

import Button from '@/lib/components/ui/Button';

const SpecialOffers = () => {
  return (
    <section id="special-offers" className="padding">
      <div className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className="flex-1">
          <Image
            src="/assets/images/offer.svg"
            width={773}
            height={687}
            alt="offers"
            className="object-contain w-full"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            <span className="mt-3 inline-block text-coral-red">Special</span>{' '}
            Offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Embark on shopping journey that redefines your experiences with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="mt-6 info-text lg:max-w-lg">
            Navigate a realm of possibilities designed to fulfill your unique
            desires. surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional
          </p>
          <div className="mt-11 flex flex-wrap gap-x-4">
            <Button label="Shop now" iconUrl="/assets/icons/arrow-right.svg" />
            <Button label="Learn more" variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;

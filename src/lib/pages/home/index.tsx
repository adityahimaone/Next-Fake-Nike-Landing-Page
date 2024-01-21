import type { NextPage } from 'next';

import {
  Hero,
  CustomerReviews,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from './Sections';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffers />
      <CustomerReviews />
      <Subscribe />
    </>
  );
};

export default Home;

import Image from 'next/image';
import Link from 'next/link';

import { footerLinks, socialMedia } from '../constant';

const Footer = () => {
  return (
    <footer className="padding-x padding-t bg-black pb-8">
      <div className="max-container">
        <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
          <div className="flex flex-col items-start">
            <Link href="/">
              <Image
                src="/assets/images/footer-logo.svg"
                width={150}
                height={46}
                alt="logo"
              />
            </Link>
            <p className="mt-6 font-montserrat text-base leading-7 text-white-400 sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect size In Store. Get Rewards
            </p>
            <div className="mt-8 flex items-center gap-5">
              {socialMedia.map((item) => (
                <div
                  key={item.alt}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white"
                >
                  <Image src={item.src} width={24} height={24} alt={item.alt} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
            {footerLinks.map((item) => (
              <div key={item.title}>
                <h4 className="mb-6 font-montserrat text-2xl font-medium leading-normal text-white">
                  {item.title}
                </h4>
                <ul className="">
                  {item.links.map((link) => (
                    <li
                      key={link.link}
                      className="mt-3 cursor-pointer font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                    >
                      <Link href={link.link} className="">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-24 flex justify-between text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 cursor-pointer items-center justify-start gap-2 font-montserrat">
          &copy; <p>Copyright. All rights reserved.</p>
        </div>
        <p className="cursor-pointer font-montserrat">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;

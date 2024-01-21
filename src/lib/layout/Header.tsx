// import { ThemeToggle } from '@/lib/components/theme-toggle';

import Image from 'next/image';
import Link from 'next/link';

import { navLinks } from '../constant';

const Header = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/images/header-logo.svg"
            width={130}
            height={29}
            alt="logo"
          />
        </Link>
        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-montserrat text-lg leading-normal text-slate-gray"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image
            src="/assets/icons/hamburger.svg"
            width={24}
            height={24}
            alt="hamburger"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;

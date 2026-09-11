import { useState } from 'react';
import Logo from '../../assets/logo-text.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-x-3 gap-y-3 rounded-xl border border-gray-200 bg-white p-4 text-black sm:px-6 lg:flex lg:justify-between lg:rounded-none lg:border-0 lg:bg-transparent lg:px-8">
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center border-0 bg-transparent p-0 hover:bg-transparent lg:hidden"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="flex flex-col gap-1" aria-hidden="true">
          <span className="h-0.5 w-5 bg-[#0F172A]" />
          <span className="h-0.5 w-5 bg-[#0F172A]" />
          <span className="h-0.5 w-5 bg-[#0F172A]" />
        </span>
      </button>
      <img
        src={Logo}
        alt="Logo"
        className="w-28 justify-self-center sm:w-32 lg:justify-self-auto"
      />
      <ul
        className={`${isMenuOpen ? 'flex' : 'hidden'} col-span-3 row-start-2 flex-col gap-4 border-t border-gray-200 pt-4 text-center text-sm lg:order-0 lg:flex lg:w-auto lg:flex-row lg:gap-x-4 lg:gap-y-1 lg:border-0 lg:p-0 lg:text-left`}
        onClick={() => setIsMenuOpen(false)}
      >
        <li className="text-[#DB2777]">Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex justify-self-end gap-1 sm:gap-2">
        <button className="btn btn-sm border-none bg-white px-1 text-xs font-light sm:px-4 sm:text-sm">
          Sign In
        </button>
        <button className="btn btn-sm btn-secondary rounded-3xl px-2 text-xs font-semibold sm:px-5 sm:text-sm">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;

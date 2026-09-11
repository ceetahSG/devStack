import Logo from '../../assets/logo-text.png';
const Footer = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-16 flex flex-col items-center justify-between gap-8 p-4 text-center sm:mt-20 sm:gap-10 sm:p-10 md:flex-row md:items-center md:text-left">
        <div>
          <img src={Logo} alt="logo" className="mx-auto h-10 w-40 md:mx-0" />
          <div className="text-[#64748B] text-[12px] mt-5 max-w-[384px]">
            Curated tools, technologies, and resources for developers building modern software.
            <ul className="my-5 flex justify-center gap-3 md:justify-start">
              <li>GitHub</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="hidden text-[12px] flex-col gap-2 md:flex">
          <h2 className="font-bold  text-[#0F172A]">Product</h2>
          <ul className="text-[#64748B] ">
            <li className="my-2">Home</li>
            <li className="my-2">Technologies</li>
            <li className="my-2">Projects</li>
          </ul>
        </div>
        <div className="hidden text-[12px] flex-col gap-2 md:flex">
          <h2 className="font-bold  text-[#0F172A]">Company</h2>
          <ul className="text-[#64748B] ">
            <li className="my-2">About</li>
            <li className="my-2">Contacts</li>
            <li className="my-2">Careers</li>
          </ul>
        </div>
        <div className="hidden text-[12px] flex-col gap-2 md:flex">
          <h2 className="font-bold  text-[#0F172A]">Legal</h2>
          <ul className="text-[#64748B] ">
            <li className="my-2">Privacy Policy</li>
            <li className="my-2">Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-200 p-4 text-center sm:flex-row sm:items-center sm:gap-10 sm:p-10 sm:text-left">
        <p className="text-[#64748B] text-[12px]">© 2026 Dev Stack. All rights reserved.</p>
        <ul className="flex gap-5 text-[#64748B] text-[12px]">
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

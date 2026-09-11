import Logo from '../../assets/logo-text.png';
const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 p-10 mt-20">
        <div>
          <img src={Logo} alt="logo" className="w-40 h-10" />
          <p className="text-[#64748B] text-[12px] mt-5 max-w-[384px]">
            Curated tools, technologies, and resources for developers building modern software.
            <ul className="flex gap-3 my-5">
              <li>GitHub</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </p>
        </div>
        <div className="text-[12px] flex flex-col gap-2">
          <h2 className="font-bold  text-[#0F172A]">Product</h2>
          <ul className="text-[#64748B] ">
            <li className="my-2">Home</li>
            <li className="my-2">Technologies</li>
            <li className="my-2">Projects</li>
          </ul>
        </div>
        <div className="text-[12px] flex flex-col gap-2">
          <h2 className="font-bold  text-[#0F172A]">Company</h2>
          <ul className="text-[#64748B] ">
            <li className="my-2">About</li>
            <li className="my-2">Contacts</li>
            <li className="my-2">Careers</li>
          </ul>
        </div>
        <div className="text-[12px] flex flex-col gap-2">
          <h2 className="font-bold  text-[#0F172A]">Legal</h2>
          <ul className="text-[#64748B] ">
            <li className="my-2">Privacy Policy</li>
            <li className="my-2">Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between gap-10 p-10 border-t border-gray-200">
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

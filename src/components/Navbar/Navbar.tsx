import Logo from '../../assets/logo-text.png';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 text-black container mx-auto">
      <img src={Logo} alt="Logo" />
      <ul className="flex space-x-4">
        <li className="text-[#DB2777]">Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div>
        <button className="btn bg-white border-none font-light">Sign In</button>
        <button className="btn btn-secondary rounded-3xl font-semibold">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;

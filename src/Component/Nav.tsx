import Logo from '../assets/logo-text.png'
const Nav = () => {
  return (
    <div className='sticky top-0 z-50 bg-white'>
      <nav className="flex justify-between items-center my-6 container mx-auto  p-2 ">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <ul className='flex justify-between gap-4'>
            <li><a href="#"  className='text-[#D91B7E]'>Home</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <button className="btn  rounded-4xl mr-0.5">Sign In</button>
          <button className="btn btn-secondary rounded-4xl">Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
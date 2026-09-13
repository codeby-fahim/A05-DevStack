import Logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <div className="container mx-auto mt-50 mb-20">
      <div className="flex justify-between gap-4 mb-20">
        <div>
          <img src={Logo} alt="" className="mb-5"/>
          <p className="mb-5">
            Curated tools, technologies, and resources for developers <br/>building
            modern software.
          </p>
          <ul className="font-bold flex gap-3">
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between">
          <h2 className="font-bold">PRODUCTS</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </div>
        <div className="flex flex-col justify-between">
          <h2 className="font-bold ">COMPANY</h2>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="flex flex-col justify-between">
          <h2 className="font-bold">LEGAL</h2>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            
          </ul>
        </div>
      </div>
      <hr className="opacity-20 my-10"/>
      
      <div className="flex justify-between items-center ">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex justify-between gap-3">
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

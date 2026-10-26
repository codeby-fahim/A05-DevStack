import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-white sm:mt-24 lg:mt-32">
      <div className="container mx-auto px-4 pt-12 pb-8 sm:px-6 sm:pt-16 lg:px-8">
        <div className="mb-12 grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-3 lg:grid-cols-4 lg:mb-16">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <img src={Logo} alt="Dev Stack" className="mb-5 h-8 w-auto" />
            <p className="mb-5 max-w-sm text-sm text-gray-600 sm:text-base">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <ul className="flex flex-wrap gap-4 font-bold">
              <li>
                <a href="#" className="transition-colors hover:text-[#D91B7E]">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#D91B7E]">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#D91B7E]">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-bold">PRODUCTS</h2>
            <ul className="space-y-2 text-sm text-gray-600 sm:text-base">
              <li>
                <a href="#" className="transition-colors hover:text-[#D91B7E]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#D91B7E]">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#D91B7E]">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-bold">COMPANY</h2>
            <ul className="space-y-2 text-sm text-gray-600 sm:text-base">
              <li>
                <a href="#" className="transition-colors hover:text-[#D91B7E]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#D91B7E]">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#D91B7E]">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-bold">LEGAL</h2>
            <ul className="space-y-2 text-sm text-gray-600 sm:text-base">
              <li>
                <a href="#" className="transition-colors hover:text-[#D91B7E]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#D91B7E]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-6 opacity-20 sm:my-8" />

        <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-gray-600 sm:flex-row sm:text-left sm:text-base">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="transition-colors hover:text-[#D91B7E]">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-[#D91B7E]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

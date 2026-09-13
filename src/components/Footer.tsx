import logo from "../assets/logo.png";

const LINK_GROUPS = [
  { title: "Product", links: ["Home", "Technologies", "Projects"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

const SOCIAL_LINKS = ["GitHub", "Twitter", "LinkedIn"];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand block */}
          <div>
            <img src={logo} alt="Dev Stack logo" className="h-8 w-auto" />
            <p className="mt-3 max-w-xs text-sm text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="mt-4 flex gap-4 text-sm font-medium text-gray-600">
              {SOCIAL_LINKS.map((social) => (
                <a key={social} href="#" className="hover:text-gray-900">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold tracking-wide text-gray-900">
                {group.title.toUpperCase()}
              </h4>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-gray-500">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-gray-900">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-100 pt-6 text-xs text-gray-400 sm:flex-row">
          <p>© {year} Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-600">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

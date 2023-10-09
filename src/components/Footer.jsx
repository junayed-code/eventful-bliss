import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="footer p-10 max-w-7xl mx-auto">
        <nav>
          <header className="footer-title">Services</header>
          <Link className="link link-hover">Planning</Link>
          <Link className="link link-hover">Entertainment</Link>
          <Link className="link link-hover">Venue Selection</Link>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Blog</Link>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </nav>
      </div>
      <div className="footer px-10 py-4 border-t border-gray-400 max-w-7xl mx-auto">
        <aside className="items-center grid-flow-col">
          <p>© 2023 Eventful Bliss™. All Rights Reserved.</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link>
              <FaFacebookF className="text-2xl" />
            </Link>
            <Link>
              <FaTwitter className="text-2xl" />
            </Link>
            <Link>
              <FaYoutube className="text-2xl" />
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}

import { FaBars } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "wouter";

const Header = () => {
  const navRef = useRef(null);
  const collapse = () => {
    navRef.current.classList.toggle("hidden");
  };

  return (
    <header className="flex items-center justify-between flex-wrap bg-eerie-black text-cultured p-6 mb-10">
      <div className="flex-shrink-0 mr-6">
        <a href="/">
          <span className="text-3xl font-bold">NoH8</span>
          <br />
          <span className="text-xl">Around Us</span>
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={collapse}
          className="px-3 py-2 border rounded border-white-400"
        >
          <FaBars />
        </button>
      </div>
      <nav
        ref={navRef}
        className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden"
      >
        <ul className="lg:flex-grow lg:text-right">
          <li className="lg:inline-block">
            <Link href="/">
              <a className="block mt-4 lg:inline mr-4 lg:mt-0">Home</a>
            </Link>
          </li>
          <li className="lg:inline-block">
            <Link href="/about">
              <a className="block mt-4 lg:inline mr-4 lg:mt-0">About</a>
            </Link>
          </li>
          <li className="lg:inline-block text-cameo-pink font-bold">
            <a href="https://discord.com/api/oauth2/authorize?client_id=989985094590672946&permissions=8&redirect_uri=https%3A%2F%2Fnoh8-around.us&response_type=code&scope=applications.commands%20dm_channels.read%20bot" target="_BLANK">
              <a className="block mt-4 lg:inline lg:mt-0">Invite to my Server</a>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

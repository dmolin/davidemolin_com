import _ from "lodash";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

/* disabled, until multi-page navigation is rolled out
const navigation = [
  { name: "Home", href: "/" },
  { name: "About me", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" }
];
*/
const navigation = [];

const NavBar = (_props) => {
  const [showMenu, toggleMenu] = useState(false);

  const _renderLinks = (onClick) => (
    navigation.map(n => (
      <Link key={n.name} href={n.href}>
        <a
          {...(_.isFunction(onClick) ? { onClick } : {})}
          className="block border-b-2 border-transparent px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:border-b-2 hover:border-gray-400"
        >{n.name}</a>
      </Link>
    ))
  );

  return (
    <div className="flex justify-center w-full border-b _justify-between h-12 items-center px-4 _relative fixed z-10 bg-white">
        <div className="flex-shrink-0 flex gap-1">
          <Image src="/img/logo-laptop.svg" height={20} width={35} />
          <Image src="/img/logo-name.svg" height={20} width={148} />
        </div>
        <h1>
          <span className="absolute" style={{ top: "-10em" }}>Davide Molin's Webpage</span>
        </h1>

      <div className="hidden md:-my-px md:ml-6 md:flex md:space-x-4">
        {_renderLinks()}
      </div>
      {!_.isEmpty(navigation) &&
        <div className="md:hidden">
          <a onClick={() => toggleMenu(!showMenu)}><FaBars/></a>
          <div
            className={`${showMenu ? "transform -translate-x-0" : "transform translate-x-full"} fixed z-10 bg-white p-4 rounded-bl transition-all duration-500 ease-in-out right-0`}>
            {_renderLinks(() => toggleMenu(false))}
          </div>
        </div>
      }
    </div>
  )
};

export default NavBar;

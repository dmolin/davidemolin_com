const navigation = [
  { name: "Home", href: "/" },
  { name: "About me", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" }
];

const NavBar = (_props) => (
  <div className="flex justify-between h-10 items-center px-4">
    <div className="flex-shrink-0 flex gap-1">
      <img className="h-6" src="/img/logo-laptop.svg" />
      <img className="hidden md:block h-6 w-auto" src="/img/logo-name.svg"/>
    </div>

    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
      {navigation.map(n => (
        <a
          key={n.name}
          href={n.href}
          className="block border-b-2 border-transparent px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:border-b-2 hover:border-gray-400"
        >{n.name}</a>
      ))}
    </div>
  </div>
);

export default NavBar;

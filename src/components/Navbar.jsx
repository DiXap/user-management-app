/**
 * Renders a sticky application Navbar
 */
const Navbar = () => {
  return (
    <nav className="w-full h-[75px] sticky top-0 z-20 bg-gray-800 p-4 flex items-center">
      <div className="mr-auto flex items-center space-x-2">
        <img src="/vite.svg" alt="Logo" />
        <h1 className="text-white font-semibold not-sm:hidden">User Management App</h1>
      </div>
    </nav>
  );
};

export default Navbar;

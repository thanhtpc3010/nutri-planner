import Nav from './Nav.jsx';
import SearchBar from './SearchBar.jsx';

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            🍎 NutriPlanner
          </h1>
        </div>
        <div className="flex-1 max-w-md mx-4">
          <SearchBar />
        </div>
        <div className="flex-shrink-0">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;


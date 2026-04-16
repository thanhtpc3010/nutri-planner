import Nav from './Nav.jsx';
import SearchBar from './SearchBar.jsx';

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            🍎 NutriPlanner
          </h1>
        </div>
        <SearchBar />
        <Nav />
      </div>
    </header>
  );
};

export default Header;


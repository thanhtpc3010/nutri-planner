const SearchInput = ({ value, onChange, placeholder = "Search meals..." }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white shadow-sm"
    />
  );
};

export default SearchInput;


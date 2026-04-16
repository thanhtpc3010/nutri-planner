import { NavLink } from 'react-router-dom';

const Nav = () => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/favorites', label: 'Favorites' },
    { to: '/calculator', label: 'Calculator' },
    { to: '/contact', label: 'Contact' },
    { to: '/feedback', label: 'Feedback' },
    { to: '/login', label: 'Login' },
    { to: '/register', label: 'Register' }
  ];

  return (
    <nav className="flex flex-wrap gap-2 md:gap-4">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg font-medium transition-all ${
              isActive
                ? 'bg-primary-500 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;


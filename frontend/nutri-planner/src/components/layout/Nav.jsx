import { NavLink } from 'react-router-dom';

const Nav = () => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/favorites', label: 'Favorites' },
    { to: '/calculator', label: 'Calculator' },
    { to: '/contact', label: 'Contact' },
    { to: '/feedback', label: 'Feedback' },
    { to: '/auth', label: 'Auth' }
  ];

  return (
    <nav className="flex gap-1 md:gap-2">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `px-2 md:px-3 py-1 md:py-2 rounded-lg font-medium text-sm md:text-base transition-all ${
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


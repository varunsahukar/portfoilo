import './TactileNavbar.css';

const TactileNavbar = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact', isSpecial: true },
  ];

  return (
    <nav className="tactile-nav-container fixed top-0 left-0 z-[100]">
      <div className="paper-nav">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`nav-item ${item.isSpecial ? 'contact' : ''}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default TactileNavbar;

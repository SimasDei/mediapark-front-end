import React from 'react';

const TopMenu = () => {
  const navLinks = [
    { title: 'Pradžia', url: '#!' },
    { title: 'Pasiūlymai', url: '#!' },
    { title: 'Naujienos', url: '#!' },
    { title: 'Kontaktai', url: '#!' },
  ];
  return (
    <nav className="top-menu">
      <div className="top-menu__container">
        <div className="top-menu__logo">
          <h1>NTPROJECT</h1>
        </div>
        <ul className="top-menu__list">
          {navLinks.map(link => (
            <li className="top-menu__item" key={link.title}>
              <a href={link.url} className="top-menu__link">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TopMenu;

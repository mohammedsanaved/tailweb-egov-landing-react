import { useState } from 'react';
import '../App.css';
import { ChevronDown, Search } from 'lucide-react';

const NAV_LINKS = [
  'About Us',
  'Areas of work',
  'Products & Solutions',
  'Our Platform',
  'Ecosystem',
  'Resources',
];

const Navbar = ({ scrolled }: { scrolled: boolean }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── TOP BAR ──────────────────────────────────────── */}
      <div className='top-bar'>
        <div className='top-bar-inner'>
          <a href='#' className='top-bar-link'>
            Events
          </a>
          <a href='#' className='top-bar-link'>
            Contact us
          </a>
          <div className='lang-selector'>
            {/* UK flag */}
            <svg
              width='20'
              height='14'
              viewBox='0 0 20 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='20' height='14' rx='1' fill='#012169' />
              <path d='M0 0L20 14M20 0L0 14' stroke='white' strokeWidth='2.5' />
              <path
                d='M0 0L20 14M20 0L0 14'
                stroke='#C8102E'
                strokeWidth='1.5'
              />
              <path d='M10 0V14M0 7H20' stroke='white' strokeWidth='3.5' />
              <path d='M10 0V14M0 7H20' stroke='#C8102E' strokeWidth='2' />
            </svg>
            <span className='lang-label'>ENG</span>
            <svg width='10' height='6' viewBox='0 0 10 6' fill='none'>
              <path
                d='M1 1L5 5L9 1'
                stroke='#1a8fc1'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV ─────────────────────────────────────── */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className='nav-inner'>
          {/* Logo */}
          <a href='#' className='nav-logo'>
            e<span>GOV</span>
            {/* <small>FOUNDATION</small> */}
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {/* Desktop links */}
            <ul className='nav-links'>
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a href='#' style={{ display: 'flex' }}>
                    {link}
                    <ChevronDown size={18} color='#00bcd4' />
                  </a>
                </li>
              ))}
            </ul>

            {/* Right: search + hamburger */}
            <div className='nav-actions'>
              <button className='search-btn' aria-label='Search'>
                {/* <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2.2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <circle cx='11' cy='11' r='8' />
                <line x1='21' y1='21' x2='16.65' y2='16.65' />
              </svg> */}
                <Search size={18} />
              </button>
            </div>
            <button
              className='hamburger'
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label='Menu'
            >
              <svg width='18' height='14' viewBox='0 0 18 14' fill='none'>
                <rect width='18' height='2' rx='1' fill='#1a2733' />
                <rect y='6' width='18' height='2' rx='1' fill='#1a2733' />
                <rect y='12' width='14' height='2' rx='1' fill='#1a2733' />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu — uses .mobile-menu and .mobile-menu.open from CSS */}
        <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link} href='#' onClick={() => setMobileOpen(false)}>
              {link}
            </a>
          ))}
          <div className='mobile-menu-footer'>
            <a href='#'>Events</a>
            <a href='#'>Contact us</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

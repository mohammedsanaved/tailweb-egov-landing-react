import { Mail } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='section-inner'>
          <div className='footer-grid'>
            <div>
              <div className='footer-brand'>
                <span>e</span>GOV
              </div>
              <p className='footer-desc'>
                Catalyzing digital transformation in public service delivery at
                speed & scale.
              </p>
              <div className='social-row'>
                {[
                  <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' />,
                  <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5' />,
                  // <svg
                  //   xmlns='http://www.w3.org/2000/svg'
                  //   width='16'
                  //   height='16'
                  //   fill='currentColor'
                  //   class='bi bi-youtube'
                  //   viewBox='0 0 16 16'
                  // >
                  <path d='M12 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z' />,
                  // </svg>,

                  <>
                    <path d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z' />
                    <rect x='2' y='9' width='4' height='12' />
                    <circle cx='4' cy='4' r='2' />
                  </>,
                ].map((icon, i) => (
                  <a
                    key={i}
                    href='#'
                    className='social-btn'
                    aria-label='Social'
                  >
                    <svg
                      width='15'
                      height='15'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      {icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className='footer-heading'>Useful Links</p>
              <ul className='footer-links'>
                {['Home', 'Our People', 'Our Impact'].map((l) => (
                  <li key={l}>
                    <a href='#'>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className='footer-heading'>Resources</p>
              <ul className='footer-links'>
                {['Financials', 'DIGIT Sandbox', 'Contact Us'].map((l) => (
                  <li key={l}>
                    <a href='#'>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className='footer-heading'>Subscribe Now</p>
              <p
                style={{
                  fontSize: 14,
                  color: '#475569',
                  marginBottom: 14,
                  lineHeight: 1.6,
                }}
              >
                Receive regular updates of our monthly newsletter DOT – in your
                inbox.
              </p>
              <div className='subscribe-row'>
                <input
                  type='email'
                  className='subscribe-input'
                  placeholder='Your email address'
                />
                <button className='subscribe-btn'>
                  <Mail size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='footer-bottom'>
        <span style={{ color: '#fff' }}>
          © 2026, eGov. All Rights Reserved.
        </span>
        <div>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Terms and Conditions</a>
        </div>
      </div>
    </>
  );
};

export default Footer;

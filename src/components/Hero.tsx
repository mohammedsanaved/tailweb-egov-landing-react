// import React from 'react';

const Hero = () => {
  return (
    <>
      {/* ── HERO ───────────────────── */}
      <section className='hero'>
        <div className='section-inner'>
          <div className='hero-grid'>
            <div>
              <h1 className='hero-h1'>
                20 years of digital
                <br />
                transformation in public
                <br />
                service delivery
                <br />
                <em className='section-weight-700'>It's possible.</em>
              </h1>
              <p className='hero-p'>
                At eGov, we're driven by the power of open digital
                infrastructure and ecosystems to enable governments deliver
                accessible, inclusive and transparent services to every citizen.
              </p>
              <div className='hero-btns'>
                <a href='#' className='btn-primary'>
                  Our Approach
                </a>
                <a href='#latest' className='btn-outline'>
                  Our Impact
                </a>
              </div>
            </div>
            <div className='hero-img-wrap'>
              <img
                src='https://placehold.co/600x440/d1eaf7/1565c0?text=Citizens+%26+Governance'
                alt='Citizens and governance'
                className='hero-img'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

// import React from 'react';

const Digit = () => {
  return (
    <>
      <section className='digit-section'>
        <div className='section-inner'>
          <div className='digit-grid'>
            <div>
              <div className='digit-logo'>
                · DIGIT<span>.</span>
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,.4)',
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  marginBottom: 4,
                }}
              >
                by eGov Foundation
              </p>
              <h2 className='digit-h2'>
                Our open source <br />
                <strong>technology-for-good platform</strong>
              </h2>
              <p className='digit-p'>
                DIGIT, short for Digital Infrastructure for Governance,
                Inclusion and Transformation is eGov's open-source platform with
                reusable building blocks and shared data registries that can be
                used to build solutions in multiple sectors.
              </p>
              <a href='#' className='btn-ghost-white'>
                Explore the platform
              </a>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img
                src='https://placehold.co/360x480/0a2540/00bcd4?text=DIGIT+Platform+App'
                alt='DIGIT platform'
                className='digit-img'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Digit;

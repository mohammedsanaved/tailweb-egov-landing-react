// import React from 'react';

const Support = () => {
  return (
    <>
      <section className='supporters'>
        <div className='section-inner'>
          {/* <span className='section-tag'>Our Ecosystem</span> */}
          <h2
            className='section-h2'
            style={{
              marginTop: 10,
              display: 'flex',
              gap: 8,
              alignItems: 'flex-start',
            }}
          >
            Our <em className='section-weight-700'>Supporters</em>
          </h2>
          <div className='supporters-grid'>
            {[
              '∞ co',
              'Bill & Melinda Gates Foundation',
              'TATA TRUSTS',
              'The Rockefeller Foundation',
              'National Health Authority',
            ].map((s) => (
              <div key={s} className='supporter'>
                <p className='supporter-name'>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;

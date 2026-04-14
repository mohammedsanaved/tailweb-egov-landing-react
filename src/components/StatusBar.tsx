// import React from 'react';

const StatusBar = () => {
  return (
    <>
      <section className='stats-bar'>
        <div className='section-inner'>
          <div className='counter-hero'>
            <div className='counter-big'>1,000,000,100+</div>
            <p className='counter-caption'>
              Citizens availing public services through eGov's Digital Public
              Goods (DPG)
            </p>
          </div>
          <div className='stats-grid'>
            {[
              { num: '1.1 Billion+', label: 'Public services delivered' },
              {
                num: '50+ partners',
                label: 'From technology, governments and NGOs',
              },
            ].map((s) => (
              <div key={s.num} className='stat-item'>
                <div className='stat-num'>{s.num}</div>
                <div className='stat-label'>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StatusBar;

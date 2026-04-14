import React from 'react';

const Story = () => {
  return (
    <>
      <section className='section sustaining'>
        <div className='section-inner'>
          {/* <span className='section-tag'>Our Story</span> */}
          <h2 className='section-h2' style={{ marginTop: 10 }}>
            20 years of reimagining for citizens and <br />
            <em className='section-weight-700'>sustaining change</em>
          </h2>
          <p className='sustaining-body'>
            Technology is powerful but is only one piece of the puzzle when it
            comes to enhancing the quality of life for every citizen. To have
            sustainable impact at scale, the collective energy of local networks
            to solve local problems needs to be tapped into. Our partners &
            networks bring this collective energy to life.
          </p>
          <div className='stories-grid'>
            {[
              {
                img: 'https://placehold.co/480x190/e8f4fd/1565c0?text=Farmer+Story',
                text: 'Technology is helping local governments provide seamless services to citizens in rural areas, transforming lives one village at a time.',
              },
              {
                img: 'https://placehold.co/480x190/f0fafb/00838f?text=City+Official+Story',
                text: '"I help cities achieve their mission." Digital governance enables officials to serve citizens faster and with greater transparency.',
              },
            ].map((s, i) => (
              <div key={i} className='story-card'>
                <img src={s.img} alt={`Story ${i + 1}`} />
                <div className='story-card-body'>{s.text}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href='#' className='btn-outline'>
              About Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;

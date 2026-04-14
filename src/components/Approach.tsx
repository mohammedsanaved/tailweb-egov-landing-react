import { useState } from 'react';

const tabs = [
  'Public Health',
  'Public Finance',
  'Local Governance',
  'Water & Sanitation',
];

const Approach = () => {
  const [activeTab, setActiveTab] = useState('Public Health');
  return (
    <>
      <section className='approach-section'>
        <div className='approach-container'>
          <div className='approaches-grid'>
            <div className='approaches-sidebar'>
              <div className='sidebar-content'>
                <h2 className='approach-h2'>
                  Big problems need
                  <br />
                  <span className='approach-bold'>bold approaches</span>
                </h2>
                <div className='sidebar-btns'>
                  {tabs.map((t) => (
                    <button
                      key={t}
                      className={`approach-tab-btn${activeTab === t ? ' active' : ''}`}
                      onClick={() => setActiveTab(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className='approach-cards'>
              <div className='approach-card teal'>
                <div className='card-content'>
                  <div className='card-num'>210+</div>
                  <div className='card-txt'>
                    cities LIVE with 10BedICU across India
                  </div>
                  <button className='read-more-btn'>Read More</button>
                </div>
                {/* Illustration placeholder */}
                <div className='card-illustration medical-bed'></div>
              </div>
              <div className='approach-card blue'>
                <div className='card-content'>
                  <div className='card-num'>2 Bn</div>
                  <div className='card-txt'>
                    COVID-19 vaccination certificates issued
                  </div>
                  <button className='read-more-btn'>Read More</button>
                </div>
                {/* Illustration placeholder */}
                <div className='card-illustration vaccine'></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Approach;

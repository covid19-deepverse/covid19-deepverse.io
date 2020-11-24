import React from 'react';
import { IconContext } from 'react-icons';
import * as FiIcons from 'react-icons/fi';

function Filters({ handleCaseTypeChange }) {
  const fetchilters = async (e) => {
    await handleCaseTypeChange(e);
    // console.log(e+" is on clicked")
  };
  return (
    <div className="left__container">
      <div className="header__left">
        <div className="header__logo">DEEPVERSE.IO</div>
        <div className="header__title__wrapper">
          Coronavirus
          <br />
          Disease
          <br />
          (COVID-19)
          <br />
          Dashboard
        </div>
      </div>
      <div className="commodities__list">
        {/* <div className="commodities__list_filter">
          <IconContext.Provider
            value={{ color: '#EA5771', className: 'global-class-name' }}
          >
            <div>
              <FiIcons.FiHexagon size="1.7em" />
            </div>
          </IconContext.Provider>
          <div className="commodities_check--total--case">CONFIRMED</div>
        </div> */}
        <div
          className="commodities__list_filter"
          onClick={() => fetchilters('cases')}
        >
          <IconContext.Provider
            value={{ color: '#D22D36', className: 'global-class-name' }}
          >
            <div>
              <FiIcons.FiHexagon size="1.7em" />
            </div>
          </IconContext.Provider>

          <div className="commodities_check--active--case" onClick="">
            CONFIRMED
          </div>
        </div>
        <div
          className="commodities__list_filter"
          onClick={() => fetchilters('recovered')}
        >
          <IconContext.Provider
            value={{ color: '#039245', className: 'global-class-name' }}
          >
            <div>
              <FiIcons.FiHexagon size="1.7em" />
            </div>
          </IconContext.Provider>

          <div className="commodities_check--recovered--case" onClick="">
            Recovered
          </div>
        </div>
        <div
          className="commodities__list_filter"
          onClick={() => fetchilters('deaths')}
        >
          <IconContext.Provider
            value={{ color: '#EA5771', className: 'global-class-name' }}
          >
            <div>
              <FiIcons.FiHexagon size="1.7em" />
            </div>
          </IconContext.Provider>

          <div className="commodities_check--deaths--case" onClick="">
            Deaths
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;

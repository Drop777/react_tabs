import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, currentTabIndex, selectTab }) => {
  const className = i => (i === currentTabIndex
    ? 'nav-item active'
    : 'nav-item'
  );

  return (
    <>
      <div className="nav-bar">
        {tabs.map((tab, i) => (
          <button
            type="button"
            className={className(i)}
            key={i}
            onClick={() => selectTab(i)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <p className="content">{tabs[currentTabIndex].content}</p>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object),
  currentTabIndex: PropTypes.number,
  selectTab: PropTypes.func,
}.isRequired;

export default Tabs;

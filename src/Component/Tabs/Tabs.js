import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';
import classNames from 'classname';

const Tabs = ({ tabs, currentTabIndex, selectTab }) => {
  const className = i => (
    classNames({
      'nav-item': true,
      active: i === currentTabIndex,
    })
  );

  return (
    <>
      <div className="nav-bar">
        {tabs.map((tab, i) => (
          <button
            type="button"
            className={className(i)}
            key={tab.title}
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
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })),
  currentTabIndex: PropTypes.number,
  selectTab: PropTypes.func,
}.isRequired;

export default Tabs;

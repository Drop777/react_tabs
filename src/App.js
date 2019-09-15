import React from 'react';
import './App.css';
import Tabs from './Component/Tabs/Tabs';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
    currentTabIndex: 0,
  };

  selectTab = (index) => {
    this.setState({ currentTabIndex: index });
  };

  render() {
    const { tabs, currentTabIndex } = this.state;
    const { selectTab } = this;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1>{tabs.length} tabs</h1>
        <Tabs
          tabs={tabs}
          currentTabIndex={currentTabIndex}
          selectTab={selectTab}
        />
      </div>
    );
  }
}

export default App;

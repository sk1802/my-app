

// src/MyLayout.js

import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './MyLayout.css'; // Import custom CSS for styling

const MyLayout = () => {
  const layout = [
    { i: 'component1', x: 0, y: 0, w: 3, h: 6 }, // First component
    { i: 'component2', x: 3, y: 0, w: 9, h: 6 }, // Second component
    { i: 'component3', x: 0, y: 6, w: 12, h: 6 }, // Third component
  ];

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={(window.innerHeight - 20) / 12} // Adjust row height based on window size
      width={window.innerWidth - 20}
    >
      <div key="component1" className="component">
        {/* Content for component 1 */}
        Component 1
      </div>
      <div key="component2" className="component">
        {/* Content for component 2 */}
        Component 2
      </div>
      <div key="component3" className="component">
        {/* Content for component 3 */}
        Component 3
      </div>
    </GridLayout>
  );
};

export default MyLayout;

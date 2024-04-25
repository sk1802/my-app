import React from 'react';
import GridLayout from 'react-grid-layout';
import { Resizable } from 'react-resizable'; // Import Resizable
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './MyLayout.css'; // Import custom CSS for styling

const MyLayout = () => {
  const layout = [
    { i: 'component1', x: 0, y: 0, w: 3, h: 6 }, // First component
    { i: 'component2', x: 3, y: 0, w: 9, h: 6 }, // Second component
    { i: 'component3', x: 0, y: 6, w: 12, h: 6 }, // Third component
  ];

  // Resizable component with handles on all sides
  const ResizableComponent = ({ item }) => (
    <Resizable
      className="resizable-component"
      height={item.h * ((window.innerHeight - 20) / 12)}
      width={item.w * (window.innerWidth / 12)}
      resizeHandles={['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne']}
    >
      <div className="component">
        Component {item.i.slice(-1)}
      </div>
    </Resizable>
  );

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={(window.innerHeight - 20) / 12} // Adjust row height based on window size
      width={window.innerWidth - 20}
    >
      {layout.map(item => (
        <div key={item.i}>
          <ResizableComponent item={item} />
        </div>
      ))}
    </GridLayout>
  );
};

export default MyLayout;